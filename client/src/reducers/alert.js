//----------this is a reducer-------------
// type file will contain all the type which is used in the switch statement
import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
const initialState = [];

// action contains type,payload(data)
// type=what to evualuate
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
