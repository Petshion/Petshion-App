import React, {useState} from 'react';

import RandomPresenter from './RandomPresenter';

import test from '../../../testItem/test.json';

export default () => {
  return <RandomPresenter randomItems={test} />;
};
