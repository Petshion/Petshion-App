import React, {useState, useEffect} from 'react';

import {mainApi} from '../../../api';
import {Product} from '../../../assets/types';
import ProductPresenter from './ProductPresenter';

interface ProductState {
  loading: boolean;
  result: Product | null;
}

export default ({
  route: {
    params: {_id},
  },
}: any) => {
  const [product, setProduct] = useState<ProductState>({
    loading: true,
    result: null,
  });

  const getData = async () => {
    const [getProduct, getProductError] = await mainApi.product(_id);
    if (getProductError) return;
    console.log(getProduct);
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
        rate: getProduct.rate,
        size_content: getProduct.size_content,
        size: getProduct.size,
        color: getProduct.color,
        AR_image: getProduct.AR_image,
      },
    });
  };

  useEffect(() => {
    getData();
  }, [_id]);

  if (!product.result) return <></>;
  return <ProductPresenter refreshFn={getData} {...product} />;
};
