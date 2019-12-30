import React from "react";
import "./userForm.css";
import { Button, Input } from "antd";
import { connect } from "react-redux";
import addUserAction from "../../redux/actions/addUserAction";
import { withRouter } from "react-router";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userSurname: "",
      userEmail: "",
      userTestResult: ""
    };
  }

  addUserName(e) {
    this.setState({ userName: e.target.value });
  }
  addUserSurname(e) {
    this.setState({ userSurname: e.target.value });
  }
  addUserEmail(e) {
    this.setState({ userEmail: e.target.value });
  }
  addUserTestResult(e) {
    this.setState({ userTestResult: e.target.value });
  }

  addUserButtonClick() {
    this.props.reduxLogIn({
      name: this.state.userName ? this.state.userName : "nameless",
      surname: this.state.userSurname ? this.state.userSurname : "nameless",
      email: this.state.userEmail ? this.state.userEmail : "nameless@email.com",
      testResult: this.state.userTestResult ? this.state.userTestResult : "100"
    });
    this.props.history.push("/participants");
  }

  render() {
    return (
      <div className="user-form">
        <h1>Add user</h1>
        <div className="inputBar">
          <h2>Name</h2>
          <Input
            className="inp"
            placeholder="Input name"
            onChange={this.addUserName.bind(this)}
          ></Input>
        </div>

        <div className="inputBar">
          <h2>Surname</h2>
          <Input
            className="inp"
            placeholder="Input surname"
            onChange={this.addUserSurname.bind(this)}
          ></Input>
        </div>

        <div className="inputBar">
          <h2>Email</h2>
          <Input
            className="inp"
            placeholder="Input email"
            onChange={this.addUserEmail.bind(this)}
          ></Input>
        </div>

        <div className="inputBar">
          <h2>Test results</h2>
          <Input
            className="inp"
            placeholder="Test results"
            onChange={this.addUserTestResult.bind(this)}
          ></Input>
        </div>

        <div className="btn">
          <Button
            className="addUserBtn"
            type="default"
            shape="round"
            icon="plus"
            block={true}
            onClick={this.addUserButtonClick.bind(this)}
          >
            Add user
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userAuth,
    name: state.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxLogIn: user => dispatch(addUserAction(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserForm));
