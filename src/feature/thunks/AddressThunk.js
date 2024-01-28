import { createAsyncThunk } from "@reduxjs/toolkit";
import { addressRequestService } from "../Service/api_calls/Address-Service";


// Post Register
export const addressRequest = createAsyncThunk(
  "addressForm/addressRequest",
  async (body, { rejectWithValue }) => {
    console.log("address********", body)
    try {
      const response = await addressRequestService(body);
      console.log('==addressRequestService=======addressRequestService=========', response);
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