export const REMOVE_GROUP_MEMBER = "REMOVE_GROUP_MEMBER";

export default function(member, mentorGroup) {
  return {
    type: "REMOVE_GROUP_MEMBER",
    payload: {
      member: member,
      mentorGroup: mentorGroup
    }
  };
}
