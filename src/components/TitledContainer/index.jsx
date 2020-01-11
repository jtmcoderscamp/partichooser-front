import React from "react";
import "./titledContainer.css";

export default class TitledContainer extends React.Component {
  render() {
    return (
      //"titled-container plus the class name(s) given as props string"
      <div
        className={
          "titled-container" +
          (this.props.className ? ` ${this.props.className}` : "")
        }
      >
        <h1 className="pagetitle">{this.props.message}</h1>
        {this.props.children}
      </div>
    );
  }
}
