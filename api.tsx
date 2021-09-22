import axios from 'axios';

export const serverURL = 'https://petshion-dev.herokuapp.com';

const getRequest = (type: any, path: any, params: any, token: any) => {
  console.log(params);
  if (type === 'get') {
    return axios.get(serverURL + path, {
      params: {
        ...params,
      },
      headers: token ? {Authorization: `Bearer ${token}`} : null,
    });
  } else if (type === 'post') {
    return axios.post(serverURL + path, params, {
      headers: token ? {Authorization: `Bearer ${token}`} : null,
    });
  } else if (type === 'delete') {
    console.log('weifjweofjw');
    return axios.delete(serverURL + path, {
      data: {
        ...params,
      },
      headers: token ? {Authorization: `Bearer ${token}`} : null,
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
    console.log(data);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const mainApi = {
  listItems: () => getAnything('get', '/product'),
  product: (id: any) => getAnything('get', `/product/${id}`),
  search: (query: any) => getAnything('get', '/search', query),
};

export const pawMarkApi = {
  getPawmarks: (token: any) => getAnything('get', '/pawmark', {}, token),
  addPawmark: (query: any, token: any) =>
    getAnything('post', '/pawmark', query, token),
  removePawmark: (query: any, token: any) =>
    getAnything('delete', '/pawmark', query, token),
};

export const basketApi = {
  getBaskets: (token: any) => getAnything('get', '/basket', {}, token),
  addBasket: (query: any, token: any) =>
    getAnything('post', '/basket', query, token),
  removeBasket: (query: any, token: any) =>
    getAnything('delete', '/basket', query, token),
};
