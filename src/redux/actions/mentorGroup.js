export const MENTOR_GROUP = "MENTOR_GROUP";

export default function(mentor) {
  return {
    type: MENTOR_GROUP,
    payload: mentor
  };
}
