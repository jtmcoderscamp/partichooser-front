import { ATTEMPT_LOG_IN, FAIL_LOG_IN, COMPLETE_LOG_IN } from "../actions/logIn";
import { LOG_OUT } from "../actions/logOut";

export default function userAuth(state = {}, action) {
  switch (action.type) {
    case ATTEMPT_LOG_IN:
      console.log("attempting log-in");
      return { status: "pending" };
    case FAIL_LOG_IN:
      console.log("log-in failed: ");
      return { status: "failed" };
    case COMPLETE_LOG_IN:
      console.log("log-in successful");
      return {
        status: "success",
        ...action.payload
      };
    case LOG_OUT:
      console.log("logged out");
      return {};
    default:
      return state;
  }
}
