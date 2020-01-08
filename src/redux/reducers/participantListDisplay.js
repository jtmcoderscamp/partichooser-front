import { UPDATE_PARTICIPANT_LIST_DISPLAY } from "../actions/updateParticipantListDisplay";
import { GET_PARTICIPANTS } from "../actions/participants";

const defaultState = { stale: false, uuidList: [] };

export default function participantListDisplay(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_PARTICIPANT_LIST_DISPLAY:
      //when updated, the list of participants to display is up to date with current list of participants
      return { stale: false, uuidList: [...action.payload] };
    case GET_PARTICIPANTS:
      //when participants are retrieved (or re-retrieved), the list might be out of date
      return { stale: true, uuidList: [...state.uuidList] };
    default:
      return state;
  }
}
