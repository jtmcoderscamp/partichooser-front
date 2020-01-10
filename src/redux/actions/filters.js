export const SET_ONLY_GROUPLESS_FILTER = "SET_ONLY_GROUPLESS_FILTER";
export const SET_CURRENT_CITY_FILTER = "SET_CURRENT_CITY_FILTER";

export const showOnlyParticipantsWithoutGroup = show => {
  return {
    type: SET_ONLY_GROUPLESS_FILTER,
    payload: show
  };
};

export const setCurrentCityFilter = cityName => {
  const city = typeof cityName === "string" ? cityName : "";
  return {
    type: SET_CURRENT_CITY_FILTER,
    payload: city
  };
};
