import cartReducer from "./cartReducer";
// import userSlice from "/slices/userSlice";
import LoginSlice from "slices/loginSlice";
import { combineReducers } from "redux";

import { api } from "api";
const rootReducer = combineReducers({
  cart: cartReducer,
  // user: userSlice,
  LoginSlice,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
