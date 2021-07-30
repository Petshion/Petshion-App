import React, {useEffect, useState} from 'react';

import PickUpPresenter from './PickUpPresenter';

import {items} from '../../../testItem/dummy';
import {mainApi} from '../../../api';

export default () => {
  return <PickUpPresenter items={items} />;
};
