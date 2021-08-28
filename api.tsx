import axios from 'axios';

const makeRequest = (path: any, params: any) =>
  axios.get(`https://petshion.herokuapp.com${path}`, {
    params: {
      ...params,
    },
  });

const getAnything = async (path: any, params = {}) => {
  try {
    const {
      data: {results},
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const mainApi = {
  listItems: () => getAnything('/main'),
  product: (id: any) => getAnything(`/product/${id}`),
  search: (query: any) => getAnything('/search', query),
  google: () => getAnything('/auth/google'),
};
