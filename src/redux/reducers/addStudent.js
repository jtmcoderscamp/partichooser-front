import {
  ATTEMPT_ADD_STUDENT,
  FAIL_ADD_STUDENT,
  COMPLETE_ADD_STUDENT
} from "../actions/addStudentAction";
//Similar to the user auth
export default function addStudent(state = {}, action) {
  switch (action.type) {
    case ATTEMPT_ADD_STUDENT:
      console.log("attempting add-student");
      return { status: "pending" };
    case FAIL_ADD_STUDENT:
      console.log("add-student failed: ", action.payload);
      return { status: "failed" };
    case COMPLETE_ADD_STUDENT:
      console.log("add-student successful");
      return { status: "success", ...action.payload };
    default:
      return state;
  }
}
