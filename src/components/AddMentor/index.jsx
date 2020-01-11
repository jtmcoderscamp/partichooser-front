import React from "react";
import { connect } from "react-redux";
import logInButFake from "../../redux/actions/logInButFake";
import { withRouter } from "react-router";
import TitledContainer from "../TitledContainer";

import axios from "axios";
import MentorForm from "../MentorForm";

import "./addMentor.css";

class FakeLogInForm extends React.Component {
  state = {
    userUuid: "",
    userName: "",
    userSurname: "",
    userMail: "",
    userRole: "",
    shouldAlert: false
  };

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
    if (
      this.state.userName !== "" &&
      this.state.userSurname !== "" &&
      this.state.userMail !== ""
    ) {
      axios
        .post(`https://ptc-test-users.herokuapp.com/users`, {
          name: this.state.userName,
          surname: this.state.userSurname,
          email: this.state.userMail
        })

        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(error => {
          console.log("Can't post");
          console.log(error);
        });

      this.props.history.push("/");
    } else {
      return this.setState({ shouldAlert: true });
    }
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  render() {
    return (
      <div className="mentor-form-wrapper">
        <TitledContainer message="Add Mentor" className="titled-form">
          <MentorForm
            onNameChange={this.onUserNameChange.bind(this)}
            onSurnameChange={this.onUserSurnameChange.bind(this)}
            onMailChange={this.onUserMailChange.bind(this)}
            onButtonClick={this.onLogInButtonClick.bind(this)}
            onShouldAlert={this.state.shouldAlert}
          />
        </TitledContainer>
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
