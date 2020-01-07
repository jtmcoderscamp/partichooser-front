import { FETCH_STUDENT } from "../actions/fetchStudent";

export default function fetchStudent(state = [], action) {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;

    default:
      return state;
  }
}
