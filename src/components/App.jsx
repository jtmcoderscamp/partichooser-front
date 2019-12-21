import React from "react";
import SampleComponent from "./SampleComponent";
import LogComponent from "./SampleComponent/log";

export default class App extends React.Component {
  buttonHandle() {
    this.props.onPost("What", "HENLO");
  }
  render() {
    return (
      <>
        <SampleComponent message="Nothing to see here!"></SampleComponent>
        <LogComponent />
      </>
    );
  }
}
