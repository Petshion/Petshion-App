import React, {useEffect, useState} from 'react';

import MainPresenter from './MainPresenter';

import {mainApi} from '../../../api';
import {ListItem} from '../../../assets/types';

interface ListItemState {
  loading: boolean;
  getListItems: ListItem[];
  getListItemsError?: any;
}

export default () => {
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

  if (listItems.loading === true) {
    return null;
  } else {
    return <MainPresenter items={listItems.getListItems} />;
  }
};
