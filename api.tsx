import axios from 'axios';

export const serverURL = 'https://petshion.herokuapp.com';

const getRequest = (type: any, path: any, params: any, token: any) => {
  if (type === 'get') {
    return axios.get(serverURL + path, {
      params: {
        ...params,
      },
      headers: token ? {Authorization: `Token ${token}`} : null,
    });
  } else if (type === 'post') {
    return axios.post(serverURL + path, {
      params: {
        ...params,
      },
      headers: token ? {Authorization: `Token ${token}`} : null,
    });
  } else if (type === 'delete') {
    return axios.delete(serverURL + path, {
      params: {
        ...params,
      },
      headers: token ? {Authorization: `Token ${token}`} : null,
    });
  }
  return axios.get(serverURL);
};

const getAnything = async (type: any, path: any, params = {}, token = null) => {
  try {
    const {
      data: {results},
      data,
    } = await getRequest(type, path, params, token);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const mainApi = {
  listItems: () => getAnything('get', '/main'),
  product: (id: any) => getAnything('get', `/product/${id}`),
  search: (query: any) => getAnything('get', '/search', query),
};

export const pawMarkApi = {
  getPawmarks: (token: any) => getAnything('get', '/pawmark', {}, token),
  addPawmark: (query: any, token: any) =>
    getAnything('post', '/pawmark/add', query, token),
  removePawmark: (query: any, token: any) =>
    getAnything('delete', '/pawmark/remove', query, token),
};

export const basketApi = {
  getBaskets: (token: any) => getAnything('get', '/basket', {}, token),
  addBasket: (query: any, token: any) =>
    getAnything('post', '/basket/add', query, token),
  removeBasket: (query: any, token: any) =>
    getAnything('delete', '/basket/remove', query, token),
};
