import { MENTOR_GROUP } from "../actions/mentorGroup";

const listMentorGroup = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_GROUP:
      console.log("mentor:  " + action.payload.name);
      console.log("list przed:    " + state);
      const a = {
        list: [
          { ID: 11, name: "JoeR", surname: "Smith" },
          { ID: 12, name: "AlexR", surname: "Power" },
          { ID: 13, name: "JohnR", surname: "Jones" },
          { ID: 14, name: "SueR", surname: "Smithy" },
          { ID: 15, name: "EveR", surname: "Nowak" },
          { ID: 16, name: "JoyR", surname: "Abc" }
        ]
      };
      console.log("aaaa" + a);
      return { a };
    default:
      return state;
  }
};
export default listMentorGroup;
