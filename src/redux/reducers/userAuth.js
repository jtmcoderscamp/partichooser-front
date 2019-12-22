import { LOG_IN_BUT_FAKE } from "../actions/logInButFake";

export default function userAuth(state = {}, action) {
  switch (action.type) {
    case LOG_IN_BUT_FAKE:
      console.log("Fake logged as " + action.payload.name);
      return { ...action.payload };
    default:
      return state;
  }
}
