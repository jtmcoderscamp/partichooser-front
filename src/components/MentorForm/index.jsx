import React from "react";
import { Alert } from "reactstrap";
import { Button, Input } from "antd";

const MentorForm = props => {
  return (
    <div className="inputscontainer">
      <Input
        className="input-hover"
        placeholder="Name:"
        onChange={props.onNameChange}
      />
      <Input
        className="input-hover"
        placeholder="Surname:"
        onChange={props.onSurnameChange}
      />
      <Input
        className="input-hover"
        placeholder="E-mail:"
        onChange={props.onMailChange}
      />
      <Button
        className="modified-item"
        shape="circle"
        icon="plus"
        size="large"
        onClick={props.onButtonClick}
      ></Button>
      {props.onShouldAlert ? (
        <Alert color="warning">You have to fill the data!</Alert>
      ) : null}
    </div>
  );
};

export default MentorForm;
