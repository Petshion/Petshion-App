import React from 'react';
import {useSelector} from 'react-redux';
import {authSelector} from '../../../modules/hooks';

import UserPresenter from './UserPresenter';

export default () => {
  const {AUTHItem} = useSelector(authSelector);

  return <UserPresenter AUTH={AUTHItem} />;
};
