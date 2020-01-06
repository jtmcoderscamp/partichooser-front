import {
  GET_PARTICIPANTS,
  ADD_PARTICIPANT_TO_MENTOR
} from "../actions/participants";

const defaultParticipants = [];

export default function participantsReducer(
  participants = defaultParticipants,
  action
) {
  switch (action.type) {
    case GET_PARTICIPANTS:
      console.log("get participants", action.payload);
      return [...participants, ...action.payload];
    case ADD_PARTICIPANT_TO_MENTOR:
      console.log("add participant in reducer with id" + action.payload);
      return [...participants];
    default:
      return participants;
  }
}
