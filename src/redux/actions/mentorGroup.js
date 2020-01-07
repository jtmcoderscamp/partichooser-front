export const MENTOR_GROUP = "MENTOR_GROUP";

// export const MENTOR_GROUP = "MENTOR_GROUP";

export default function(mentor) {
  console.log("funkcja mentor");
  return {
    type: MENTOR_GROUP,
    payload: mentor
  };
}
