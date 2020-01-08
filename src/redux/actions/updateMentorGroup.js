export const UPDATE_MENTOR_GROUP = "UPDATE_MENTOR_GROUP";

export default function(mentor, students) {
  console.log("funkcja mentor");
  return {
    type: UPDATE_MENTOR_GROUP,
    payload: {
      mentor,
      students
    }
  };
}
