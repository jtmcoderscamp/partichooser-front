import { FETCH_STUDENT } from "../actions/fetchStudent";

export default function fetchStudent(state = [], action) {
  switch (action.type) {
    case FETCH_STUDENT:
      console.log("wywołanie studenta");
      return [...action.payload];

    default:
      return state;
  }
}
