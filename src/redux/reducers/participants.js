import { ADD_PARTICIPANT, GET_PARTICIPANTS } from "../actions/participants";

const defaultParticipants = [
  {
    id: 1,
    name: "Marek",
    surname: "Kowalski",
    examPoints: 80
  },
  {
    id: 2,
    name: "Adam",
    surname: "Nowak",
    examPoints: 55
  }
];

export default function participantsReducer(
  participants = defaultParticipants,
  action
) {
  switch (action.type) {
    case GET_PARTICIPANTS:
      return [...participants];
    case ADD_PARTICIPANT:
      console.log("add participant in reducer with id" + action.payload);
      return [...participants];
    default:
      return participants;
  }
}
