import React from "react";
import "./userForm.css";

export default class UserForm extends React.Component {
    render() {
      return (
        <div className="user-form">
          <h1>{this.props.message}</h1>
          {this.props.children}
        </div>
      );
    }
  }

  //copied and changed from SampleComponent