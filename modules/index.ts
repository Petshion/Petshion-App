import {configureStore} from '@reduxjs/toolkit';
import filter from './filter';
import basket from './basket';
import auth from './auth';

export default configureStore({
  reducer: {
    filter,
    basket,
    auth,
  },
});
