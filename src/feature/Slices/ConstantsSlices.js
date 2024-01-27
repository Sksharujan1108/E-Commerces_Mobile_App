import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
    credentials: undefined,
};
  
  const INITIAL_STATE = {
    ...DEFAULT_STATE,
  };
  
const ConstantsSlice = createSlice({
    name: "constantsForm",
    initialState: INITIAL_STATE,
    reducers: {
        resetConstants: () => {
            return DEFAULT_STATE;
        },
      
        setCredentials: (state, action) => {
            return { ...state, credentials: action.payload };
        },
    },
})

export const selectCredentials = (state) => state.constantsForm.credentials;

export const { resetConstants, setCredentials } = ConstantsSlice.actions;

export default ConstantsSlice;