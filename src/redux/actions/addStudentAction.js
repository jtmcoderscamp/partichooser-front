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
 * @param {string} studentData.qualyfyingPoints
 * @param {string} studentData.description
 * @param {string} studentData.mentorPreferences
 */

export default function addStudent(student) {
  return {
    type: ATTEMPT_ADD_STUDENT,
    payload: {
      name: student.name,
      surname: student.surname,
      email: student.email,
      testResult: student.testResult,
      city: student.city,
      description: student.description,
      mentor: student.mentor
    }
  };
}
