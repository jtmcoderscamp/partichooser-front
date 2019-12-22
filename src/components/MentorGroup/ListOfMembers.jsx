import React from "react";
import Member from "./Member";

export default class ListOfMembers extends React.Component {
  constructor(probs) {
    super(probs);
  }

  render() {
    return (
      <div>
        <div> Imię i nazwisko Mentora</div>
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
    );
  }
}
