import React from "react";

import Logo from "./Logo";
import ListOfMembers from "./ListOfMembers";

export default class MentorGroupView extends React.Component {
  render() {
    return (
      <div className="mentorGroup-component">
        <Logo />
        <ListOfMembers />
      </div>
    );
  }
}
