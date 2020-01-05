export const ATTEMPT_LOG_IN = "ATTEMPT_LOG_IN";
export const COMPLETE_LOG_IN = "COMPLETE_LOG_IN";
export const FAIL_LOG_IN = "FAIL_LOG_IN";

/**
 * Asynchronous action that handles API request.
 * Note lack of type - this is a meta-action handled by thunk middleware
 * to asynchronously dispatch correct actions depending on fetch results
 * @param {Object} authData
 * @param {string} authData.email
 * @param {string} authData.password
 */
export default function logIn({ email, password }) {
  return function(dispatch) {
    //dispatch the action signaling that log-in process has started
    dispatch(attemptLogIn());

    _makeLogInCall({
      email: email,
      password: password
    })
      .then(userDetails => {
        //if successful, complete the log-in process
        dispatch(completeLogIn(userDetails));
      })
      .catch(error => {
        //process login failure
        dispatch(failLogIn(error.message));
      });
  };
}

async function _makeLogInCall(logInData) {
  const response = await fetch(
    "https://ptc-test-users.herokuapp.com/users/auth",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(logInData)
    }
  );

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }

  const data = await response.json();

  return {
    token: response.headers.get("x-auth-token"),
    email: data.email,
    name: data.name,
    surname: data.surname,
    roles: data.roles
  };
}

/**
 * Action dispatched when a log-in attempt is started
 */
export function attemptLogIn() {
  return {
    type: ATTEMPT_LOG_IN
  };
}

/**
 * Action dispatched on successful log-in
 * @param {string} token
 * @param {string} email
 * @param {string} name
 * @param {string} surname
 * @param {string[]} roles
 */
export function completeLogIn(token, email, name, surname, roles) {
  return {
    type: COMPLETE_LOG_IN,
    payload: { token, email, name, surname, roles }
  };
}

/**
 * Action dispatched on log-in failure
 * @param {string} errorMessage
 */
export function failLogIn(errorMessage) {
  return {
    type: FAIL_LOG_IN,
    payload: errorMessage
  };
}
