import jsonStudent from "../../apis/jsonStudent";
export const FETCH_STUDENT = "FETCH_STUDENT";

export const fetchStudentA = () => async dispatch => {
  const response = await jsonStudent.get("/participants");
  dispatch({ type: FETCH_STUDENT, payload: response.data });
};
