import { combineReducers } from '@reduxjs/toolkit';
import CartSlice from './Slices/CardSlices';
import AuthSlice from './Slices/AuthSlices';

const rootReducer = combineReducers({
  cartForm: CartSlice.reducer,
  authForm: AuthSlice.reducer,
});

export default rootReducer;
