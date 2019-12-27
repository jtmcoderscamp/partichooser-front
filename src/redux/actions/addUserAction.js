export const ADD_USER = "ADD_USER ";

export default function(name, surname, email, testResult) {
  return {
    type: ADD_USER,
    payload: {
      name: name,
      surname: surname,
      email: email,
      testResult: testResult
    }
  };
}
