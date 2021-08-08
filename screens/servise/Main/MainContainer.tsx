import React, {useEffect, useState} from 'react';

import MainPresenter from './MainPresenter';

import {items} from '../../../testItem/dummy';
import {mainApi} from '../../../api';

export interface Item {
  product_id: string;
  image: string;
}

export default () => {
  const [products, setProducts] = useState({
    loading: true,
    getProducts: [],
    getProductsError: null,
  });
  const getData = async () => {
    const [getProducts, getProductsError] = await mainApi.getProducts();
    console.log(getProducts);
    setProducts({
      loading: false,
      getProducts,
      getProductsError,
    });
  };

  useEffect(() => {
    getData();
    console.log();
  }, []);

  return <MainPresenter items={products.getProducts} />;
};
