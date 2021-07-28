import React, {useState} from 'react';

import RandomPresenter from './RandomPresenter';

import {items} from '../../../testItem/dummy';

export default () => {
  return <RandomPresenter items={items} />;
};
