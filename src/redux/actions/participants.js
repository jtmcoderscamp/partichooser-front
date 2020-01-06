export const ADD_PARTICIPANT_TO_MENTOR = "ADD_PARTICIPANT_TO_MENTOR";
export const GET_PARTICIPANTS = "GET_PARTICIPANTS";

async function _getParticipants(userId) {
  const response = await fetch(
    `https://ptc-test-participants.herokuapp.com/api/participants?id=${userId}`,
    {
      method: "GET"
    }
  );

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }

  const data = await response.json();
  return data;
}

async function _addParticipant(userId, participantId) {
  const response = await fetch(
    `https://ptc-test-participants.herokuapp.com/api/participants?id=${userId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uuid: participantId
      })
    }
  );

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }

  const data = await response.json();
  return data;
}

export async function getParticipants(dispatch, userId) {
  _getParticipants(userId)
    .then(data => {
      dispatch({
        type: GET_PARTICIPANTS,
        payload: data
      });
    })
    .catch(error => {
      console.error("Could not fetch list of participants", error);
    });
}

export async function addParticipant(dispatch, userId, participantId) {
  _addParticipant(userId, participantId)
    .then(data => {
      dispatch({
        type: ADD_PARTICIPANT_TO_MENTOR,
        payload: data
      });
    })
    .catch(error => {
      console.error("Could not add participant to mentor", error);
    });
}
