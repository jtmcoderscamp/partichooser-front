import React from "react";
import Logo from "./Logo";
import ListOfMembers from "./ListOfMembers";

class MentorGroupView extends React.Component {
  constructor(probs) {
    super(probs);
  }

  render() {
    return (
      <div>
        <Logo />>
        <ListOfMembers />>
      </div>
    );
  }
}
