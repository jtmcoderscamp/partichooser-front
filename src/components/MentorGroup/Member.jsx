import React from "react";

class Member extends React.Component {
  constructor(probs) {
    super(probs);
  }

  render() {
    return (
      <div>
        <div>
          {" "}
          {this.state.name} {this.state.surname}
        </div>
        <Icon type="minus-circle" />
      </div>
    );
  }
}
