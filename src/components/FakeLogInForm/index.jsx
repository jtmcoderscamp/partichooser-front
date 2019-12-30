import React from "react";
import { connect } from "react-redux";
import { Button, Input } from "antd";
import logInButFake from "../../redux/actions/logInButFake";
import { withRouter } from "react-router";

/**
 * Fake form for signing in - no backend, not even a password field.
 * It does, however, use redux to put the name of "logged in" user into the store.
 */
class FakeLogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userSurname: "",
      userMail: ""
    };
  }

  onUserNameChange(e) {
    this.setState({ userName: e.target.value });
  }

  onUserSurnameChange(e) {
    this.setState({ userSurname: e.target.value });
  }

  onUserMailChange(e) {
    this.setState({ userMail: e.target.value });
  }

  onLogInButtonClick() {
    this.props.reduxLogIn({
      name: this.state.userName ? this.state.userName : "nameless"
    });
    this.props.history.push("/participants");
  }

  render() {
    return (
      <div className="inputscontainer">
        <Input
          className="input-hover"
          placeholder="Name:"
          onChange={this.onUserNameChange.bind(this)}
        />
        <Input
          className="input-hover"
          placeholder="Surname:"
          onChange={this.onUserSurnameChange.bind(this)}
        />
        <Input
          className="input-hover"
          placeholder="E-mail:"
          onChange={this.onUserMailChange.bind(this)}
        />
        <Button
          className="modified-item"
          shape="circle"
          icon="plus"
          size="large"
          onClick={this.onLogInButtonClick.bind(this)}
        ></Button>
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
    reduxLogIn: user => dispatch(logInButFake(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FakeLogInForm));
