import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    UserDetail: undefined,
    status: undefined,
    Error: undefined,
}


const BASE_URL = ("http://localhost:8000/register")

export const postRegister = createAsyncThunk ("@/api/register", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.post(BASE_URL);
        console.log('====================================', response);
        return response.data;
      } catch (err) {
        const error = err;
        // We got validation errors, let's return those so we can reference in our component and set form errors
        return rejectWithValue(err.response.data);
      }
})

export const registerUserData = createSlice ({
    name: 'userData',    //reducer name
    initialState,
    reducers: {},
                     // bulider object 
    extraReducers : (bulider) => {
        bulider.addCase(postRegister.pending, (state) => {
            state.status = "Loading";
        })
        bulider.addCase(postRegister.fulfilled, (state, action) => {
            state.status = "Success";
            state.UserDetail = action.payload;
            console.log('====================================');
            console.log(status);
            console.log('====================================');
        })
        bulider.addCase(postRegister.rejected, (state, action) => {
            state.status = "Falied";
            state.Error =  action.payload ? action.payload.message : action.error.message;
        })
    } 
})

export const registerDataDetails = (state) => state.userData.UserDetail;
export const registerDataStatus = (state) => state.userData.status;

export default registerUserData.reducer; // Ensure you export the reducer correctly
