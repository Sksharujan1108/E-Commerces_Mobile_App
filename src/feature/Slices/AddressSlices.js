import { createSlice } from "@reduxjs/toolkit";
import { addressRequest } from "../thunks/AddressThunk";
import { STATUS } from "../../Utilis/Contants";
import { Alert } from "react-native";

const DEFAULT_STATE = {
  addressSliceStatus: undefined,

  addressData: undefined,
  addressDataStatus: undefined,
};

const INITIAL_STATE = {
  ...DEFAULT_STATE,
};

const AddressSlice = createSlice({
  name: "addressForm",
  initialState: INITIAL_STATE,
  reducers: {
    resetAddress: () => DEFAULT_STATE,
    // Add other reducers if needed
  },
  extraReducers: (builder) => {
    // Add extra reducers for thunks
    builder
      .addCase(addressRequest.pending, (state) => {
        state.addressSliceStatus = STATUS.LOADING;
        state.addressDataStatus = STATUS.LOADING;
      })
      .addCase(addressRequest.fulfilled, (state, action) => {
        state.addressData = action.payload;
        state.addressSliceStatus = STATUS.SUCCEEDED;
        state.addressDataStatus = STATUS.SUCCEEDED;
      })
      .addCase(addressRequest.rejected, (state, action) => {
        if (action?.payload?.state === 404) {
            Alert.alert(`${action?.payload?.errorDiscription[0]}`) 
        } else if (action?.error) {
            Alert.alert (action?.error?.message)
        }
        state.addressSliceStatus = STATUS.FAILED;
        state.addressDataStatus = STATUS.FAILED;
      })
  },
});

export const { resetAddress } = AddressSlice.actions;

// Selectors

export const selectAddressData = (state) => state.addressForm.addressData;
export const selectAddressStatus = (state) => state.addressForm.addressDataStatus;
// Add other selectors if needed

export default AddressSlice;
