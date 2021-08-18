import {configureStore} from '@reduxjs/toolkit';
import filter from './filter';

export default configureStore({
  reducer: {
    filter,
  },
});
