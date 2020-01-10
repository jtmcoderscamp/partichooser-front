export const SET_SHOW_BY_GROUP = "SET_SHOW_BY_GROUP";

export const showOnlyParticipantsWithoutGroup = show => {
  return {
    type: SET_SHOW_BY_GROUP,
    payload: show
  };
};
