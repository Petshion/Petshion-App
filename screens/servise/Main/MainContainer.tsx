import React, {useEffect, useState} from 'react';

import MainPresenter from './MainPresenter';
import {useDispatch, useSelector} from 'react-redux';
import {removeColor} from '../../../modules/filter';
import {filterSelector} from '../../../modules/hooks';

import {mainApi} from '../../../api';
import {ListItem} from '../../../assets/types';

interface ListItemState {
  loading: boolean;
  getListItems: ListItem[];
  getListItemsError?: any;
}

export default () => {
  const {filter} = useSelector(filterSelector);
  const [listItems, setListItems] = useState<ListItemState>({
    loading: true,
    getListItems: [],
    getListItemsError: null,
  });
  const getData = async () => {
    const [getListItems, getListItemsError] = await mainApi.listItems();
    setListItems({
      loading: false,
      getListItems,
      getListItemsError,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  if (listItems.loading === true) {
    return null;
  } else {
    return <MainPresenter items={listItems.getListItems} />;
  }
};
