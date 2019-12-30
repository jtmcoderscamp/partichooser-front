import React from "react";
import Member from "./Member";
import "./mentorGroup.css";

export default class ListOfMembers extends React.Component {
  constructor(probs) {
    super(probs);
  }

  render() {
    return (
      <div>
        <div className="listOfMembers-component"> My Group </div>
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
    );
  }
}
