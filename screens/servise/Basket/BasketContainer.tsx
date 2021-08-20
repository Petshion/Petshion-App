import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {insert} from '../../../modules/basket';
import {basketSelector} from '../../../modules/hooks';

import BasketPresenter from './BasketPresenter';
import {basketItemsDummy} from '../../../testItem/dummy';

export default () => {
  const {baskets} = useSelector(basketSelector);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const getData = () => {
    dispatch(insert(basketItemsDummy));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BasketPresenter refreshFn={getData} baskets={baskets} loading={loading} />
  );
};
