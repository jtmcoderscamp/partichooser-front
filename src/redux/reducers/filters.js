import { SET_SHOW_BY_GROUP } from "../actions/filters";

const defaultState = { withoutGroupsAssignedOnly: false };
export default function participantsFiltersReducer(
  state = defaultState,
  action
) {
  let newState = { ...state };
  switch (action.type) {
    case SET_SHOW_BY_GROUP:
      console.log("SET_SHOW_BY_GROUP", action.payload);
      newState.withoutGroupsAssignedOnly = action.payload;
      return newState;
    default:
      return state;
  }
}
