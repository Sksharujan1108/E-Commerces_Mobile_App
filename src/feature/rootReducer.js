import { combineReducers } from '@reduxjs/toolkit';
import CartSlice from './Slices/CardSlices';

const rootReducer = combineReducers({
  cart: CartSlice?.reducer
});

export default rootReducer;
export const RootState = rootReducer();
