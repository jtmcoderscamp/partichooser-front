import React from "react";
import Member from "./Member";
import "./mentorGroup.css";

export default class ListOfMembers extends React.Component {
  constructor(probs) {
    super(probs);
    this.state = { members: [] };
  }
  componentDidMount() {
    this.setState({
      members: [
        { ID: 1, name: "Joe", surname: "Smith" },
        { ID: 2, name: "Alex", surname: "Power" },
        { ID: 3, name: "John", surname: "Jones" },
        { ID: 4, name: "Sue", surname: "Smithy" },
        { ID: 5, name: "Eve", surname: "Nowak" },
        { ID: 6, name: "Joy", surname: "Abc" }
      ]
    });
  }

  render() {
    return (
      <div>
        <div className="listOfMembers-component"> My Group </div>
        <Member members={this.state.members} />
      </div>
    );
  }
}
