import React from "react";
import LogInForm from "../LogInForm";

/**
 * A very simple functional component - this one doesn't even connect to redux
 * the magic happens in its inner components - especially the FakeLogInForm
 * */
export default function LoginView() {
  return <LogInForm />;
}
