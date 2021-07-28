import React, {useEffect, useState} from 'react';

import MainPresenter from './MainPresenter';

import {items} from '../../../testItem/dummy';
import {mainApi} from '../../../api';

export default () => {
  /* 서버 개발 후 연계
  const [shows, setShows] = useState({
    loading: true,
    banner: [],
    lately: [],
    bannerError: null,
    latelyError: null,
  });
  const getData = async () => {
    const [banner, bannerError] = await mainApi.banner();
    const [lately, latelyError] = await mainApi.lately();
    setShows({
      loading: false,
      banner,
      lately,
      bannerError,
      latelyError,
    });
  };
  useEffect(() => {
    getData();
  }, []); */
  return <MainPresenter items={items} />;
};
