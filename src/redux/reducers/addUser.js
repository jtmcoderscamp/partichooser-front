import { ADD_USER } from "../actions/addUserAction";

export default function addUser(state = {}, action) {
  switch (action.type) {
    case ADD_USER:
      console.log("Name: " + action.payload.name);
      console.log("Surname: " + action.payload.surname);
      console.log("Email: " + action.payload.email);
      console.log("Test Result: " + action.payload.testResult);
      return { ...action.payload };
    default:
      return state;
  }
}
