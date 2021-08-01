import React, {useState, useEffect} from 'react';

import {mainApi} from '../../../api';
import ProductPresenter from './ProductPresenter';

interface Item {
  images: string[];
  _id: string;
  title: string;
  brand_name: string;
  preice: number;
  kind: string;
  content: string;
  size_content: string[];
  size: string;
}

interface Detail {
  loading: boolean;
  result: Item;
}

export default ({
  route: {
    params: {id},
  },
}: any) => {
  const [detail, setDetail] = useState<Detail>({
    loading: true,
    result: {
      images: [],
      _id: '',
      title: '',
      brand_name: '',
      preice: 0,
      kind: '',
      content: '',
      size_content: [],
      size: '',
    },
  });
  const getData = async () => {
    const [getDetail, getDetailError] = await mainApi.product(id);
    console.log(getDetailError);
    setDetail({
      loading: false,
      result: {
        ...getDetail,
        images: getDetail.images,
        _id: getDetail._id,
        title: getDetail.title,
        brand_name: getDetail.brand_name,
        preice: getDetail.preice,
        kind: getDetail.kind,
        content: getDetail.content,
        size_content: getDetail.size_content,
        size: getDetail.size,
      },
    });
  };

  /*  useEffect(() => {
    getData();
  }, [id]); */
  return <ProductPresenter />;
};
