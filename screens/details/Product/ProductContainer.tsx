import React, {useState, useEffect} from 'react';

import {mainApi} from '../../../api';
import {Product} from '../../../assets/types';
import ProductPresenter from './ProductPresenter';

interface ProductState {
  loading: boolean;
  result: Product;
}

export default ({
  route: {
    params: {_id},
  },
}: any) => {
  const [product, setProduct] = useState<ProductState>({
    loading: true,
    result: {
      images: [],
      _id: '',
      title: '',
      brand_name: '',
      price: 0,
      kind: '',
      content: '',
      size_content: [],
      size: '',
    },
  });

  const getData = async () => {
    const [getProduct, getProductError] = await mainApi.product(_id);
    setProduct({
      loading: false,
      result: {
        ...getProduct,
        images: getProduct.images,
        _id: getProduct._id,
        title: getProduct.title,
        brand_name: getProduct.Brand_name,
        price: getProduct.price,
        kind: getProduct.kind,
        content: getProduct.content,
        size_content: getProduct.size_content,
        size: getProduct.size,
      },
    });
  };

  useEffect(() => {
    getData();
  }, [_id]);

  return <ProductPresenter refreshFn={getData} {...product} />;
};
