import { combineReducers } from "redux";
import { registerUserData } from "./Slices/RegisterSlices";

const rootReducer = combineReducers ({
    UserData: registerUserData.reducer
})

export default rootReducer;