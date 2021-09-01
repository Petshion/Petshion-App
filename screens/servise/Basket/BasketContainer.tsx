import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {insert} from '../../../modules/basket';
import {authSelector, basketSelector} from '../../../modules/hooks';
import {basketApi} from '../../../api';

import BasketPresenter from './BasketPresenter';
import {basketItemsDummy} from '../../../testItem/dummy';

export default () => {
  const {baskets} = useSelector(basketSelector);
  const {AUTHItem} = useSelector(authSelector);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const getData = async () => {
    // await console.log(basketApi.getBaskets());
    /* const [getListItems, getListItemsError] = await basketApi.getBaskets();
     */
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
