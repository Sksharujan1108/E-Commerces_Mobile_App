import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    UserDetail: undefined,
    status: undefined,
    Error: undefined,
}


const BASE_URL = ("http://localhost:8000/register")

export const postRegister = createAsyncThunk ("@/api/register", async () => {
    try {
        const response = await axios.get(BASE_URL);
        console.log('====================================', response);
        return response.data;
      } catch (err) {
        const error = err;
        if (!error) {
          throw err;
        }
        // We got validation errors, let's return those so we can reference in our component and set form errors
        return error;
      }
})

export const registerUserData = createSlice ({
    name: 'registerUserData',    //reducer name
    initialState,
    reducers: {},
                     // bulider object 
    extraReducers : (bulider) => {
        bulider.addCase(getDetail.pending, (state) => {
            state.status = "Loading";
        })
        bulider.addCase(getDetail.fulfilled, (state, action) => {
            state.status = "Success";
            state.UserDetail = action.payload;
        })
        bulider.addCase(getDetail.rejected, (state, action) => {
            state.status = "Falied";
            state.Error = action.error.message
        })
    } 
})

export const registerDataDetails = (state) => state.UserData.UserDetail;
export const registerDataStatus = (state) => state.UserData.status;

export default registerUserData.reducer; // Ensure you export the reducer correctly
