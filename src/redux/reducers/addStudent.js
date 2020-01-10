//import endLogin from "../../components/StudentForm/index.jsx";
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
      return { status: "studentAddPending" };
    case FAIL_ADD_STUDENT:
      console.log("add-student failed: ");
      return { status: "failedAddStudent", ...action.payload };
    case COMPLETE_ADD_STUDENT:
      console.log("add-student successful");
      alert("Student added to database");
      return { status: "studentAdded", ...action.payload };
    default:
      return state;
  }
}
