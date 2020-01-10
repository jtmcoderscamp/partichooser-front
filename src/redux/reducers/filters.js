import {
  SET_ONLY_GROUPLESS_FILTER,
  SET_CURRENT_CITY_FILTER
} from "../actions/filters";

const defaultState = { withoutGroupsAssignedOnly: false, currentCity: "" };
export default function participantsFiltersReducer(
  state = defaultState,
  action
) {
  let newState;
  switch (action.type) {
    case SET_ONLY_GROUPLESS_FILTER:
      newState = { ...state };
      newState.withoutGroupsAssignedOnly = action.payload;
      return newState;
    case SET_CURRENT_CITY_FILTER:
      newState = { ...state };
      newState.currentCity = action.payload;
      return newState;
    default:
      return state;
  }
}
