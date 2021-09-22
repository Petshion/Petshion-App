import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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

  const navigation = useNavigation<any>();

  const pleaseLogin = () => {
    Alert.alert('팻션', '로그인이 필요한 서비스입니다.', [
      {text: '확인', onPress: () => navigation.navigate('User')},
    ]);
  };

  const getData = async () => {
    if (!AUTHItem) {
      setLoading(false);
      pleaseLogin();
      return;
    }
    const [getListItems, getListItemsError] = await basketApi.getBaskets(
      AUTHItem.token,
    );

    dispatch(insert(getListItems.basket));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BasketPresenter refreshFn={getData} baskets={baskets} loading={loading} />
  );
};
