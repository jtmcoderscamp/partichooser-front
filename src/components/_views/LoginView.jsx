import React from "react";
import SampleComponent from "../SampleComponent";
import AddMentor from "../AddMentor";

import "./LoginView.css";

export default function LoginView() {
  return (
    <div className="main">
      <div className="container">
        <SampleComponent message="Add Mentor">
          <AddMentor />
        </SampleComponent>
      </div>
    </div>
  );
}
