import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerRequestAuthenticateService } from "../Service/api_calls/Auth-Service";

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
