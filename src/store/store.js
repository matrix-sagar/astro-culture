import { configureStore } from '@reduxjs/toolkit';
import signReducer from './signSlice';

const store = configureStore({
  reducer: {
    sign: signReducer,
  },
});

export default store;
