import { REMOVE_GROUP_MEMBER } from "../actions/removeGroupMemberA";

const removeGroupMember = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_GROUP_MEMBER:
      console.log("action grupy:  " + action);
      return state.listGroupMember.filter(
        id => id !== action.payload.member.id
      );
    //wysyła żadanie set mentor = null?
    default:
      return state;
  }
};
export default removeGroupMember;
