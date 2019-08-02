import { combineReducers } from "redux";
import { reducer as formReduser } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReduser,
  streams: streamReducer
});
