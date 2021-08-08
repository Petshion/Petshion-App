import React, {useEffect, useState} from 'react';

import MainPresenter from './MainPresenter';

import {items} from '../../../testItem/dummy';
import {mainApi} from '../../../api';

export interface Item {
  product_id: string;
  image: string;
}

export default () => {
  const [shows, setShows] = useState({
    loading: true,
    lately: [],
    latelyError: null,
  });
  const getData = async () => {
    const [lately, latelyError] = await mainApi.lately();
    setShows({
      loading: false,
      lately,
      latelyError,
    });
  };
  useEffect(() => {
    getData();
    console.log(shows);
  }, []);
  return <MainPresenter items={items} />;
};
