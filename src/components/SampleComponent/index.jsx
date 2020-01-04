import React from "react";
import "./sampleComponent.css";

export default class SampleComponent extends React.Component {
  render() {
    return (
      <div className="sample-component">
        <h1>{this.props.message}</h1>
        {this.props.children}
      </div>
    );
  }
}
