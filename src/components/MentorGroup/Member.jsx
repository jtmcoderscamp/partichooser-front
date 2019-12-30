import React from "react";
import { Icon } from "antd";

export default class Member extends React.Component {
  constructor(probs) {
    super(probs);
    this.state = { name: "Imię" };
  }

  componentDidMount() {
    this.setState({ name: "Imię", surname: "Nazwisko" });
  }

  onDivCLick(e) {
    this.setState({ name: "Imię", surname: "Nazwisko" });
  }
  render() {
    return (
      <div>
        <div className="member-component">
          <div>
            {" "}
            {this.state.name} {this.state.surname}{" "}
          </div>
          <div onClick={this.onDivCLick}>
            {" "}
            <Icon type="minus-circle" style={{ color: " rgb(252, 212, 33)" }} />
          </div>
        </div>
      </div>
    );
  }
}
