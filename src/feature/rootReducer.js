import { combineReducers } from '@reduxjs/toolkit';
import CartSlice from './Slices/CardSlices';
import authSlice from './Slices/AuthSlices';

const rootReducer = combineReducers({
  cartForm: CartSlice.reducer,
  auth: authSlice.reducer
});

export default rootReducer;
