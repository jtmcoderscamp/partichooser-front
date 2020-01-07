import { MENTOR_GROUP } from "../actions/mentorGroup";

const listMentorGroup = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_GROUP:
      console.log("mentor:  " + action.payload.name);

      return state.response.filter(id => id === action.payload.member.mentor);
    default:
      return state;
  }
};
export default listMentorGroup;

// const GroupMembersList=(state={},action)=>{
//   switch (action.type) {
//     case MENTOR_GROUP:

//       return  state.mentor.name//state.response.filter(id => id === action.payload.member.mentor);
//     default:
//       return mentor;
//   }
// };
