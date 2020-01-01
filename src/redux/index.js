import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

//Import reducers
import userAuth from "./reducers/userAuth";
import participants from "./reducers/participants";

//Set up combined reducer
const rootReducer = combineReducers({
  userAuth,
  participants
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;