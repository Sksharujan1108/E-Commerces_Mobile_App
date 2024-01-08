import { combineReducers } from '@reduxjs/toolkit';
import CartSlice from './Slices/CardSlices';

const rootReducer = combineReducers({
  cartForm: CartSlice.reducer
});

export default rootReducer;
