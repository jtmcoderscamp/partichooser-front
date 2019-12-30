export const ADD_USER = "ADD_USER ";

export default function(user) {
  return {
    type: ADD_USER,
    payload: {
      name: user.name,
      surname: user.surname,
      email: user.email,
      testResult: user.testResult
    }
  };
}
