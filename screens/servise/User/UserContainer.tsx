import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector} from '../../../modules/hooks';

import UserPresenter from './UserPresenter';

export default () => {
  const {AUTHItem} = useSelector(authSelector);

  return <UserPresenter AUTH={AUTHItem} />;
};
