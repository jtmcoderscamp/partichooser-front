import React from "react";
import StudentForm from "../StudentForm";

/**
 * A very simple functional component
 * */
export default function ParticipantAddingView(props) {
  return <StudentForm listOfCities={props.listOfCities} />;
}
