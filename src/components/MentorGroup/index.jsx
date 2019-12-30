import React from "react";
import Logo from "./Logo";
import ListOfMembers from "./ListOfMembers";
import "./mentorGroup.css";

export default class MentorGroupView extends React.Component {
  constructor(probs) {
    super(probs);
  }

  render() {
    return (
      <div className="mentorGroup-component">
        <Logo />
        <ListOfMembers />

        {/*
         */}
      </div>
    );
  }
}
