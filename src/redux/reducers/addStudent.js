import { ADD_STUDENT } from "../actions/addStudentAction";

export default function addStudent(state = {}, action) {
  switch (action.type) {
    case ADD_STUDENT:
      console.log("Name: " + action.payload.name);
      console.log("Surname: " + action.payload.surname);
      console.log("Email: " + action.payload.email);
      console.log("Test Result: " + action.payload.testResult);
      console.log("City: " + action.payload.city);
      console.log("Description: " + action.payload.description);
      console.log("Mentor: " + action.payload.mentor);
      return { ...action.payload };
    default:
      return state;
  }
}
