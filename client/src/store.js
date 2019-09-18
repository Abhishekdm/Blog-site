import { createStore, applyMiddleware } from "redux";
//
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk, which is the middleware
import thunk from "redux-thunk";
// root reducer, multiple reducer will be combined in root-reducer
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

// creating the store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
