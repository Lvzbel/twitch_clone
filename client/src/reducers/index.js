import { combineReducers } from "redux";
import { reducer as formReduser } from "redux-form";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: formReduser
});
