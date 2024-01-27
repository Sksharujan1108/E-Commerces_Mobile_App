import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Service/status_constant";
import { registerRequestAuthenticate } from "../thunks/AuthThunk";

const DEFAULT_STATE = {
  authSliceStatus: undefined,
  registerAuthenticateData: undefined,
  registerAuthenticateDataStatus: undefined,
};

const INITIAL_STATE = {
  ...DEFAULT_STATE,
};

const AuthSlice = createSlice({
  name: "authForm",
  initialState: INITIAL_STATE,
  reducers: {
    resetAuth: () => DEFAULT_STATE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerRequestAuthenticate.pending, (state) => {
        state.authSliceStatus = STATUS.LOADING;
        state.registerAuthenticateDataStatus = STATUS.LOADING;
      })
      .addCase(registerRequestAuthenticate.fulfilled, (state, action) => {
        state.registerAuthenticateData = action.payload;
        state.authSliceStatus = STATUS.SUCCEEDED;
        state.registerAuthenticateDataStatus = STATUS.SUCCEEDED;
      })
      .addCase(registerRequestAuthenticate.rejected, (state) => {
        state.authSliceStatus = STATUS.FAILED;
        state.registerAuthenticateDataStatus = STATUS.FAILED;
      });
  },
});

export const { resetAuth } = AuthSlice.actions;

// Selectors
// Post Register
export const selectAuthSliceStatus = (state) => state.auth.authSliceStatus;
export const selectRegisterAuthenticateData = (state) => state.auth.registerAuthenticateData;
export const selectRegisterAuthenticateStatus = (state) => state.auth.registerAuthenticateDataStatus;
// End ************

export default AuthSlice;
