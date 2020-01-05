import { REMOVE_GROUP_MEMBER } from "../actions/removeGroupMemberA";

const removeGroupMember = (listGroupMember = [], action) => {
  switch (action.type) {
    case REMOVE_GROUP_MEMBER:
      console.log("action:  " + action);
      return listGroupMember.filter(id => id !== action.payload.member.id);
    default:
      return listGroupMember;
  }
};
export default removeGroupMember;
