import {configureStore} from '@reduxjs/toolkit';
import filter from './filter';
import basket from './basket';

export default configureStore({
  reducer: {
    filter,
    basket,
  },
});
