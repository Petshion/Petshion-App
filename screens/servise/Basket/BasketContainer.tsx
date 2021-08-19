import React from 'react';
import {useSelector} from 'react-redux';
import {basketSelector} from '../../../modules/hooks';

import BasketPresenter from './BasketPresenter';

export default () => {
  const {baskets} = useSelector(basketSelector);

  return <BasketPresenter baskets={baskets} />;
};
