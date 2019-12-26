import React from "react";
import SampleComponent from "../SampleComponent";
import FakeLogInForm from "../FakeLogInForm";
import "./LoginView.css";

/**
 * A very simple functional component - this one doesn't even connect to redux
 * the magic happens in its inner components - especially the FakeLogInForm
 * */
export default function LoginView() {
  return (
    <div className="container">
      <SampleComponent message="Add Mentor">
        <FakeLogInForm />
      </SampleComponent>
    </div>
  );
}
