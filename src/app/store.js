/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
// REDUCERS
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});
