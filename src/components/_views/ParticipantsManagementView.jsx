import React from "react";
import MentorGroupView from "../MentorGroup";
import ParticipantPickingView from "./ParticipantPickingView";

export default class extends React.PureComponent {
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <MentorGroupView />
          <ParticipantPickingView />
        </div>
      </div>
    );
  }
}
