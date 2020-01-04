import React from "react";
import "./logInForm.css";
import LogInFormContents from "./form";

export default class LogInForm extends React.Component {
  render() {
    return (
      <div className="wrapper-image image-cover">
        <div className="wrapper-text">
          <div className="row">
            <div className="col-xs-12 col-sm-5 logo"></div>

            <div className="col-xs-12 col-sm-7 login-main">
              <LogInFormContents />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
