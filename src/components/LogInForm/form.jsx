import React from "react";
import { connect } from "react-redux";
import logIn from "../../redux/actions/logIn";
import { withRouter } from "react-router";
import "./logInForm.css";

class LogInFormContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      passwordError: "",
      emailError: "",
      send: false,
      error: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validate()) {
      this.props.reduxLogIn({
        email: this.state.email,
        password: this.state.password
      });
    }
  }

  validate() {
    let passwordError = "";
    let emailError = "";
    let errors = [];

    if (
      this.state.password.length < 2 &&
      this.state.password.indexOf(" ") === -1
    ) {
      passwordError = "Your password is not correct!";
      errors.push(passwordError);
    }
    if (this.state.email.length < 3 || this.state.email.indexOf("@") === -1) {
      emailError = "Your email is not correct!";
      errors.push(emailError);
    }
    this.setState({ passwordError, emailError });
    console.log(errors);
    return errors.length === 0;
  }

  render() {
    const form = (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <div className="login-form">
            <div className="email">
              <label>
                <span>Your email</span>
                <br />
                <input
                  className={
                    this.state.emailError
                      ? "inputWithError"
                      : "inputWithoutError"
                  }
                  type="email"
                  placeholder="email@coderscamp.pl"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                />
                <br />
              </label>
              <div className="errors-form contact-form">
                {this.state.emailError}
              </div>
            </div>

            <div className="name">
              <label>
                <span>Your password</span>
                <br />
                <input
                  className={
                    this.state.passwordError
                      ? "inputWithError"
                      : "inputWithoutError"
                  }
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                />
                <br />
              </label>
              <div className="errors-form contact-form">
                {this.state.passwordError}
              </div>
            </div>
          </div>

          <div>
            <button
              className="btn"
              type="submit"
              disabled={this.props.auth.status === "pending"}
            >
              Log in
            </button>
          </div>
        </div>
      </form>
    );

    return (
      <>
        {this.props.auth.status === "success"
          ? JSON.stringify(this.props.auth, null, 2)
          : form}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.userAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxLogIn: authData => dispatch(logIn(authData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LogInFormContents));
