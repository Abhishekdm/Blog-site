//-------Root Reducer-----
// that combines all the reducers
import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";

// all the reducers that we create will be
// added to the object
export default combineReducers({
  alert,
  auth,
  profile
});
