import { UPDATE_MENTOR_GROUP } from "../actions/updateMentorGroup";

const mentorGroup = (state = [], action) => {
  switch (action.type) {
    case UPDATE_MENTOR_GROUP:
      return [
        ...action.payload.students.filter(
          student => student.groupUuid === action.payload.mentor.uuid
        )
      ];
    default:
      return state;
  }
};
export default mentorGroup;
