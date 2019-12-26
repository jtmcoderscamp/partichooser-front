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
      <div>
        <Input
          placeholder="user name"
          onChange={this.onUserNameChange.bind(this)}
        />
        <Input
          placeholder="user surname"
          onChange={this.onUserSurnameChange.bind(this)}
        />
        <Input
          placeholder="user mail"
          onChange={this.onUserMailChange.bind(this)}
        />
        <Button
          type="primary"
          block={true}
          onClick={this.onLogInButtonClick.bind(this)}
        >
          Fake log in!
        </Button>
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
