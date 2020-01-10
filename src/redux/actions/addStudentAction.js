import axios from "axios";
export const ATTEMPT_ADD_STUDENT = "ATTEMPT_ADD_STUDENT";
export const COMPLETE_ADD_STUDENT = "COMPLETE_ADD_STUDENT";
export const FAIL_ADD_STUDENT = "FAIL_ADD_STUDENT";

/**
 * Asynchronous action that handles API request.
 * Note lack of type - this is a meta-action handled by thunk middleware
 * to asynchronously dispatch correct actions depending on axio results
 * @param {Object} studentData
 * @param {string} studentData.name
 * @param {string} studentData.surname
 * @param {string} studentData.email
 * @param {string} studentData.city
 * @param {string} studentData.qualifyingPoints
 * @param {string} studentData.description
 * @param {string} studentData.mentorPreferences
 */

export default function AddStudent({
  name,
  surname,
  email,
  city,
  qualifyingPoints,
  description,
  mentorPreferences
}) {
  return function(dispatch) {
    //dispatch the action signaling that log-in process has started
    dispatch(attemptAddStudent());

    axios
      .post("https://ptc-test-participants.herokuapp.com/api/participants", {
        name: name,
        surname: surname,
        city: city,
        email: email,
        qualifyingPoints: qualifyingPoints,
        description: description,
        mentorPreferences: mentorPreferences
      })
      .then(response => {
        //succes Student added
        dispatch(completeAddstudent(response));
      })
      .catch(error => {
        //process AddStudent failure
        dispatch(failAddStudent(error));
      });
  };
}

/**
 * Action dispatched when a Add student attempt is started
 */
export function attemptAddStudent() {
  return {
    type: ATTEMPT_ADD_STUDENT
  };
}

export function completeAddstudent(success) {
  return {
    type: COMPLETE_ADD_STUDENT,
    payload: { success }
  };
}

/**
 * Action dispatched on Add student failure
 * @param {string} errorMessage
 */
export function failAddStudent(errorMessage) {
  return {
    type: FAIL_ADD_STUDENT,
    payload: { errorMessage }
  };
}
