import { combineReducers } from '@reduxjs/toolkit';
import CartSlice from './Slices/CardSlices';
import AuthSlice from './Slices/AuthSlices';
import ConstantsSlice from './Slices/ConstantsSlices';
import AddressSlice from './Slices/AddressSlices';


const rootReducer = combineReducers({
  cartForm: CartSlice.reducer,
  authForm: AuthSlice.reducer,
  constantsForm: ConstantsSlice.reducer,
  addressForm: AddressSlice.reducer,
});

export default rootReducer;
