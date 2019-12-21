import React from "react";
import "./logInForm.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      nameError: "",
      emailError: "",
      send: false,
      errors: []
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
      this.setState({ send: true });
    }
  }

  validate() {
    let nameError = "";
    let emailError = "";
    let errors = [];

    if (this.state.name.length < 2 && this.state.name.indexOf(" ") === -1) {
      nameError = "Your login is not correct!";
      errors.push(nameError);
    }
    if (this.state.email.length < 3 && this.state.email.indexOf("@") === -1) {
      emailError = "Your email is not correct!";
      errors.push(emailError);
    }
    this.setState({ nameError, emailError });
    console.log(errors);
    return errors.length === 0;
  }

  render() {
    const form = (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <div className="login-form">
            <div className="name">
              <label>
                <span>Your login</span>
                <br />
                <input
                  className={
                    this.state.nameError
                      ? "inputWithError"
                      : "inputWithoutError"
                  }
                  type="text"
                  placeholder="Teresa"
                  name="name"
                  value={this.state.name}
                  onChange={e => this.handleChange(e)}
                />
                <br />
              </label>
              <div className="errors-form contact-form">
                {this.state.nameError}
              </div>
            </div>

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
                  placeholder="teresa@coderscamp.pl"
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
          </div>

          <div>
            <button className="btn" type="submit">
              Log in
            </button>
          </div>
        </div>
      </form>
    );

    return <>{this.state.send ? <>Welcome User :)</> : form}</>;
  }
}
