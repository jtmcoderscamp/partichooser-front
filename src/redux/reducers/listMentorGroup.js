import { MENTOR_GROUP } from "../actions/mentorGroup";

const listMentorGroup = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_GROUP:
      return [
        ...action.payload.students.filter(
          student => student.city === action.payload.mentor.name
        )
      ];
    default:
      return state;
  }
};
export default listMentorGroup;
