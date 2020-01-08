import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

//Import reducers
import userAuth from "./reducers/userAuth";
import participants from "./reducers/participants";
import participantListDisplay from "./reducers/participantListDisplay";
import addStudent from "./reducers/addStudent";
import fetchStudent from "./reducers/fetchStudent";
import mentorGroup from "./reducers/mentorGroup";
// import removeGroupMember from "./reducers/removeGroupMember";

//Set up combined reducer
const rootReducer = combineReducers({
  userAuth,
  participants,
  participantListDisplay,
  fetchStudent,
  mentorGroup,
  addStudent
  // removeGroupMember,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
