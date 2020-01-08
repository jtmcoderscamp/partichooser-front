import {
  GET_PARTICIPANTS,
  ADD_PARTICIPANT_TO_MENTOR,
  LOAD_NEW_PARTICIPANTS
} from "../actions/participants";

const defaultParticipants = { data: [], loading: false };

export default function participantsReducer(
  participants = defaultParticipants,
  action
) {
  switch (action.type) {
    case GET_PARTICIPANTS:
      console.log("get participants", action.payload);
      return {
        data: [...participants.data, ...action.payload],
        loading: false
      };
    case ADD_PARTICIPANT_TO_MENTOR:
      console.log("add participant in reducer with id" + action.payload);
      return { data: [...participants.data], loading: false };
    case LOAD_NEW_PARTICIPANTS:
      return { data: [], loading: true };
    default:
      return participants;
  }
}
