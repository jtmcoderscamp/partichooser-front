import React from "react";
import SampleComponent from "./SampleComponent";
import LogIn from "./LogInForm/form";

export default class App extends React.Component {
  buttonHandle() {
    this.props.onPost("What", "HENLO");
  }
  render() {
    return (
      <>
        <SampleComponent message="Nothing to see here!"></SampleComponent>
        <LogIn />
      </>
    );
  }
}
