export const UPDATE_PARTICIPANT_LIST_DISPLAY =
  "UPDATE_PARTICIPANT_LIST_DISPLAY";

/**
 * Action creator that filters the current participant list
 * and returns the list of filtered participant uuids.
 * @param {Object.<string, {
 *            uuid: string,
 *            name: string,
 *            surname: string,
 *            city: string,
 *            email: string,
 *            qualifyingPoints: number,
 *            description: string[],
 *            mentorPreferences: string,
 *            groupUuid?: string
 *        }>} participants - list of participants to be filtered
 * @param {{field: string, value: string}[]} conditions
 */
export function filterParticipantList(participants, conditions = []) {
  const filteredList = _filterParticipants(participants, conditions);
  return {
    type: UPDATE_PARTICIPANT_LIST_DISPLAY,
    payload: filteredList
  };
}

/**
 * Returns a list of ids that satisfy all the given conditions
 * Condition is satisfied if the filter value is contained within participant's value for appropriate field
 * Works properly only with string fields
 * This function is not case insensitive
 * @param {Object.<string, {
 *            uuid: string,
 *            name: string,
 *            surname: string,
 *            city: string,
 *            email: string,
 *            qualifyingPoints: number,
 *            description: string[],
 *            mentorPreferences: string,
 *            groupUuid?: string
 *        }>} participants
 * @param {{field: string, value: string}[]} conditions
 */
function _filterParticipants(participants, conditions) {
  const lowercaseConditions = conditions.map(condition => {
    return {
      field: condition.field,
      value:
        typeof condition.value === "string"
          ? condition.value.toLowerCase()
          : condition.value
    };
  });
  const filteredParticipantIdList = Object.keys(participants).filter(uuid =>
    _checkParticipantFilter(participants[uuid], lowercaseConditions)
  );
  return filteredParticipantIdList;
}

/**
 * Checks if a single participant satisfies all filter conditions.
 * Filter is satisfied if the condition value is contained within participant's field value
 * This function assumes that condition values to be lowercase
 * Note that this filter only works for string fields
 * @param {{
 *            uuid: string,
 *            name: string,
 *            surname: string,
 *            city: string,
 *            email: string,
 *            qualifyingPoints: number,
 *            description: string[],
 *            mentorPreferences: string,
 *            groupUuid?: string
 *        }} participant
 * @param {{field: string, value: string}[]} conditions - all value properties of each filter need to be lowercase
 */
function _checkParticipantFilter(participant, conditions) {
  for (const condition of conditions) {
    if (condition.field === "withoutGroup") {
      if (condition.value) {
        return !participant.groupUuid;
      }
      return true;
    } else if (
      participant[condition.field].toLowerCase().indexOf(condition.value) === -1
    ) {
      return false;
    }
  }
  return true;
}
