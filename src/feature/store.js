import { configureStore } from '@reduxjs/toolkit'
import { registerUserDataReducer } from '../feature/Slices/RegisterSlices'


export const store = configureStore({
  reducer: {
    registerUserData: registerUserDataReducer
  },
})