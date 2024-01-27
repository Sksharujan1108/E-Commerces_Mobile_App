import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Service/status_constant";
import { loginRequestAuthenticate, registerRequestAuthenticate } from "../thunks/AuthThunk";
import { Alert } from "react-native";
import { Constants } from "../../Utilis/Contants";

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
      .addCase(loginRequestAuthenticate.rejected, (state, action) => {
        if (action?.payload?.status === 401) {
          Alert.alert (action?.payload?.errorDiscription[0])
        } else if (action?.error) {
          Alert.alert (Constants.INVALID_CREDENTIALS)
        }

        state.authSliceStatus = STATUS.FAILED;
        state.loginAuthenticateDataStatus = STATUS.FAILED;
      });
    // End Login
  },
});

export const { resetAuth } = AuthSlice.actions;

// Selectors


export const selectAuthSliceStatus = (state) => state.authForm.authSliceStatus;

// Post Register
export const selectRegisterAuthenticateData = (state) => state.authForm.registerAuthenticateData;
export const selectRegisterAuthenticateStatus = (state) => state.authForm.registerAuthenticateDataStatus;
// End ************

// Post login
export const selectLogInAuthenticateData = (state) => state.authForm.loginAuthenticateData;
export const selectLogInAuthenticateStatus = (state) => state.authForm.loginAuthenticateDataStatus;
// End ************

export default AuthSlice;
