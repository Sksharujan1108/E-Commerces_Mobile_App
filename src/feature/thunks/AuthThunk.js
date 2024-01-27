import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequestAuthenticateService, registerRequestAuthenticateService } from "../Service/api_calls/Auth-Service";


// Post Register
export const registerRequestAuthenticate = createAsyncThunk(
  "auth/register",
  async (body, { rejectWithValue }) => {
    console.log("Register********")
    try {
      const response = await registerRequestAuthenticateService(body);
      console.log('==registerRequestAuthenticate=======registerRequestAuthenticate=========', response);
      return response.data;
    } catch (err) {
      const error = err;
      if (!error) {
        throw err;
      }
      return rejectWithValue(error);
    }
  }
);

// End

// Post Login
export const loginRequestAuthenticate = createAsyncThunk(
  "auth/register",
  async (body, { rejectWithValue }) => {
    console.log("login********")
    try {
      const response = await loginRequestAuthenticateService(body);
      console.log('==loginRequestAuthenticate=======loginRequestAuthenticate=========', response);
      return response.data;
    } catch (err) {
      const error = err;
      if (!error) {
        throw err;
      }
      return rejectWithValue(error);
    }
  }
);
// End