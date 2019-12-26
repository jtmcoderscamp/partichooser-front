import React from "react";
import SampleComponent from "../SampleComponent";
import FakeLogInForm from "../FakeLogInForm";
import UserForm from "../UserForm";

/**
 * A very simple functional component - this one doesn't even connect to redux
 * the magic happens in its inner components - especially the FakeLogInForm
 * */
export default function LoginView() {
  return (
    <SampleComponent message="Login view here!">
      <div>Lookie here.</div>
      <FakeLogInForm />
      <UserForm />
    </SampleComponent>
  );
}
