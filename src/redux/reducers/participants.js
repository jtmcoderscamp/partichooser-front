import {
  GET_PARTICIPANTS,
  ADD_PARTICIPANT_TO_MENTOR,
  LOAD_NEW_PARTICIPANTS
} from "../actions/participants";

const defaultParticipants = { data: [], loading: false };

export default function participantsReducer(
  state = defaultParticipants,
  action
) {
  let newState = state;
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
      //reduce the payload array of participant into a new object with ids as keys for easy direct access
      newState = action.payload.reduce(function(aggregator, participant) {
        aggregator[participant.uuid] = participant;
        return aggregator;
      }, {});
      return newState;
    case ADD_PARTICIPANT_TO_MENTOR:
      console.log("User after attempt at adding to group:", action.payload);
      //create new state (identical to old) so that the change isn't falsely interpreted as unchanging
      newState = { ...state };
      //update the changed user in state
      newState[action.payload.uuid] = action.payload;
      return newState;
    default:
      return state;
  }
}
