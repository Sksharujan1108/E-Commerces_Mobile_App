import { combineReducers } from '@reduxjs/toolkit';
import CartSlice from './Slices/CardSlices';
import AuthSlice from './Slices/AuthSlices';
import ConstantsSlice from './Slices/ConstantsSlices';


const rootReducer = combineReducers({
  cartForm: CartSlice.reducer,
  authForm: AuthSlice.reducer,
  constantsForm: ConstantsSlice.reducer,
});

export default rootReducer;
