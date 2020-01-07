import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

//Import reducers
import userAuth from "./reducers/userAuth";
import fetchStudent from "./reducers/fetchStudent";
import listMentorGroup from "./reducers/listMentorGroup";
// import removeGroupMember from "./reducers/removeGroupMember";

//Set up combined reducer
const rootReducer = combineReducers({
  fetchStudent,
  listMentorGroup,
  // removeGroupMember,
  userAuth
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
