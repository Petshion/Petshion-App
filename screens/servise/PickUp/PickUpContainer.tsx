import React, {useEffect, useState} from 'react';

import {pawMarkApi} from '../../../api';
import {ListItem} from '../../../assets/types';
import {useSelector} from 'react-redux';
import {authSelector} from '../../../modules/hooks';

import PickUpPresenter from './PickUpPresenter';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface ListItemsState {
  loading: boolean;
  getListItems: ListItem[];
  getListItemsError?: any;
}

export default () => {
  const {AUTHItem} = useSelector(authSelector);
  const [listItems, setListItems] = useState<ListItemsState>({
    loading: true,
    getListItems: [],
    getListItemsError: null,
  });

  const navigation = useNavigation<any>();

  const pleaseLogin = () => {
    Alert.alert('팻션', '로그인이 필요한 서비스입니다.', [
      {text: '확인', onPress: () => navigation.navigate('User')},
    ]);
  };

  const getData = async () => {
    if (!AUTHItem) {
      setListItems({
        loading: false,
        getListItems: [],
        getListItemsError: null,
      });
      pleaseLogin();
      return;
    }
    const [getListItems, getListItemsError] = await pawMarkApi.getPawmarks(
      AUTHItem?.token,
    );
    setListItems({
      loading: false,
      getListItems: getListItems.pawmark,
      getListItemsError,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <PickUpPresenter refreshFn={getData} {...listItems} />;
};
