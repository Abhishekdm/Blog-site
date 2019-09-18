//-------Root Reducer-----
// that combines all the reducers
import { combineReducers } from "redux";
import alert from "./alert";

// all the reducers that we create will be
// added to the object
export default combineReducers({
  alert
});
