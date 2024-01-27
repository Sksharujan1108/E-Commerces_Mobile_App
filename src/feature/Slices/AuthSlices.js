import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Service/status_constant";
import { loginRequestAuthenticate, registerRequestAuthenticate } from "../thunks/AuthThunk";

const DEFAULT_STATE = {
  authSliceStatus: undefined,

  // Post Register
  registerAuthenticateData: undefined,
  registerAuthenticateDataStatus: undefined,

  // Post Login
  loginAuthenticateData: undefined,
  loginAuthenticateDataStatus: undefined,
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
    // Post Register
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
    // End Register

    // Post Login
    builder
      .addCase(loginRequestAuthenticate.pending, (state) => {
        state.authSliceStatus = STATUS.LOADING;
        state.loginAuthenticateDataStatus = STATUS.LOADING;
      })
      .addCase(loginRequestAuthenticate.fulfilled, (state, action) => {
        state.loginAuthenticateData = action.payload;
        state.authSliceStatus = STATUS.SUCCEEDED;
        state.loginAuthenticateDataStatus = STATUS.SUCCEEDED;
      })
      .addCase(loginRequestAuthenticate.rejected, (state) => {
        state.authSliceStatus = STATUS.FAILED;
        state.loginAuthenticateDataStatus = STATUS.FAILED;
      });
    // End Login
  },
});

export const { resetAuth } = AuthSlice.actions;

// Selectors


export const selectAuthSliceStatus = (state) => state.auth.authSliceStatus;

// Post Register
export const selectRegisterAuthenticateData = (state) => state.auth.registerAuthenticateData;
export const selectRegisterAuthenticateStatus = (state) => state.auth.registerAuthenticateDataStatus;
// End ************

// Post login
export const selectLogInAuthenticateData = (state) => state.auth.loginAuthenticateData;
export const selectLogInAuthenticateStatus = (state) => state.auth.loginAuthenticateDataStatus;
// End ************

export default AuthSlice;
