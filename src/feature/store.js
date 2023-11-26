// Assuming this is in your store setup file

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import registerUserDataReducer from '../feature/Slices/RegisterSlices'; // Correct the import path accordingly

// Combine reducers (if you have multiple reducers)
const rootReducer = combineReducers({
  userData: registerUserDataReducer,
  // ...other reducers if available
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
