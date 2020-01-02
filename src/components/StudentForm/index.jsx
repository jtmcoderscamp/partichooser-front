import React from "react";
import "./studentForm.css";
import { Button, Input } from "antd";
import { connect } from "react-redux";
import addStudentAction from "../../redux/actions/addStudentAction";
import { withRouter } from "react-router";

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      studentSurname: "",
      studentEmail: "",
      studentTestResult: ""
    };
  }

  addstudentName(e) {
    this.setState({ studentName: e.target.value });
  }
  addstudentSurname(e) {
    this.setState({ studentSurname: e.target.value });
  }
  addstudentEmail(e) {
    this.setState({ studentEmail: e.target.value });
  }
  addstudentTestResult(e) {
    this.setState({ studentTestResult: e.target.value });
  }

  addstudentButtonClick() {
    this.props.reduxLogIn({
      name: this.state.studentName ? this.state.studentName : "nameless",
      surname: this.state.studentSurname
        ? this.state.studentSurname
        : "nameless",
      email: this.state.studentEmail
        ? this.state.studentEmail
        : "nameless@email.com",
      testResult: this.state.studentTestResult
        ? this.state.studentTestResult
        : "100"
    });
    this.props.history.push("/participants");
  }

  render() {
    return (
      <div className="student-form">
        <h1>Add student</h1>
        <div className="inputBar">
          <h2>Name</h2>
          <Input
            className="inp"
            placeholder="Input name"
            onChange={this.addstudentName.bind(this)}
          ></Input>
        </div>

        <div className="inputBar">
          <h2>Surname</h2>
          <Input
            className="inp"
            placeholder="Input surname"
            onChange={this.addstudentSurname.bind(this)}
          ></Input>
        </div>

        <div className="inputBar">
          <h2>Email</h2>
          <Input
            className="inp"
            placeholder="Input email"
            onChange={this.addstudentEmail.bind(this)}
          ></Input>
        </div>

        <div className="inputBar">
          <h2>Test results</h2>
          <Input
            className="inp"
            placeholder="Test results"
            onChange={this.addstudentTestResult.bind(this)}
          ></Input>
        </div>

        <div className="btn">
          <Button
            className="addStudentBtn"
            type="default"
            shape="round"
            icon="plus"
            block={true}
            onClick={this.addstudentButtonClick.bind(this)}
          >
            Add student
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.studentName,
    studentname: state.studentSurname,
    email: state.studentEmail,
    testResult: state.studentTestResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxLogIn: student => dispatch(addStudentAction(student))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StudentForm));
