export const ADD_STUDENT = "ADD_STUDENT";

export default function(student) {
  return {
    type: ADD_STUDENT,
    payload: {
      name: student.name,
      surname: student.surname,
      email: student.email,
      testResult: student.testResult
    }
  };
}
