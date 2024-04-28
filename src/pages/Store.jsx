import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Authentication/Redux/AuthSlice';

export const store = configureStore({
  reducer: {
    user: authReducer,
  },
});
