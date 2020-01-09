import React from "react";
import "./studentForm.css";
import { Button, Input, Select } from "antd";
import { connect } from "react-redux";
import addStudentAction from "../../redux/actions/addStudentAction";
import { withRouter } from "react-router";
import TextArea from "antd/lib/input/TextArea";
const { Option } = Select;

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      studentSurname: "",
      studentEmail: "",
      studentTestResult: "",
      studentCity: "",
      studentDescription: ["Without Description."],
      studentMentor: "Without mentor preference.",
      iconLoading: false,

      studentNameError: "",
      studentSurnameError: "",
      studentEmailError: "",
      studentTestResultError: "",
      studentCityError: "",
      error: ""
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
  addstudentCity(e) {
    this.setState({ studentCity: e });
    console.log(e);
  }
  addstudentTestResult(e) {
    this.setState({ studentTestResult: e.target.value });
  }
  addstudentDescription(e) {
    this.setState({ studentDescription: [e.target.value] });
  }
  addstudentMentor(e) {
    this.setState({ studentMentor: e.target.value });
  }
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  addstudentButtonClick() {
    this.enterIconLoading();
    if (this.validate()) {
      this.props.reduxStudentForm({
        name: this.state.studentName,
        surname: this.state.studentSurname,
        city: this.state.studentCity,
        email: this.state.studentEmail,
        qualifyingPoints: this.state.studentTestResult,
        description: this.state.studentDescription,
        mentorPreferences: this.state.studentMentor,
        iconLoading: this.state.iconLoading
      });
    } else this.setState({ iconLoading: false });
  }

  validate() {
    let studentNameError = "";
    let studentSurnameError = "";
    let studentEmailError = "";
    let studentTestResultError = "";
    let studentCityError = "";
    let errors = [];

    if (
      this.state.studentName.length < 1 &&
      this.state.studentName.indexOf(" ") === -1
    ) {
      studentNameError = "Student name is not correct!";
      errors.push(studentNameError);
    }
    if (
      this.state.studentSurname.length < 1 &&
      this.state.studentSurname.indexOf(" ") === -1
    ) {
      studentSurnameError = "Student surname is not correct!";
      errors.push(studentSurnameError);
    }
    if (
      this.state.studentEmail.length < 3 ||
      this.state.studentEmail.indexOf("@") === -1
    ) {
      studentEmailError = "Student email is not correct!";
      errors.push(studentEmailError);
    }

    if (this.state.studentTestResult <= 0) {
      studentTestResultError = "Add student test result!";
      errors.push(studentTestResultError);
    }
    /*
    if (this.state.studentCity.indexOf(" ") === -1) {
      studentCityError = "Add student city!";
      errors.push(studentCityError);
    }
     */
    this.setState({
      studentNameError: studentNameError,
      studentSurnameError: studentSurnameError,
      studentEmailError: studentEmailError,
      studentTestResultError: studentTestResultError,
      studentCityError: studentCityError
    });
    console.log(errors);
    return errors.length === 0;
  }

  render() {
    return (
      <div className="student-form">
        <h1>Add student</h1>
        <div className="inputBar">
          <h2>Name</h2>
          <Input
            className={
              this.state.studentNameError ? "inputWithE" : "inputWithoutE"
            }
            placeholder="Input name"
            val={this.state.studentName}
            onChange={this.addstudentName.bind(this)}
          ></Input>
          <div className="errors-form contact-form">
            {this.state.studentNameError}
          </div>
        </div>

        <div className="inputBar">
          <h2>Surname</h2>
          <Input
            className={
              this.state.studentNameError ? "inputWithE" : "inputWithoutE"
            }
            placeholder="Input surname"
            val={this.state.studentSurname}
            onChange={this.addstudentSurname.bind(this)}
          ></Input>
          <div className="errors-form contact-form">
            {this.state.studentSurnameError}
          </div>
        </div>

        <div className="inputBar">
          <h2>Email</h2>
          <Input
            className={
              this.state.studentNameError ? "inputWithE" : "inputWithoutE"
            }
            placeholder="Input email"
            val={this.state.studentEmail}
            onChange={this.addstudentEmail.bind(this)}
          ></Input>
          <div className="errors-form contact-form">
            {this.state.studentEmailError}
          </div>
        </div>

        <div className="inputBar">
          <div
            className={
              this.state.studentCityError ? "inputWithE" : "inputWithoutE"
            }
          >
            <h2>City</h2>
            <Select
              defaultValue=" "
              style={{ width: "100%" }}
              placeholder="Choose City"
              onChange={value => this.addstudentCity(value)}
            >
              <Option value=" "></Option>
              <Option value="Wroclaw">Wrocław</Option>
              <Option value="Warszawa">Warszawa</Option>
              <Option value="Zabrze">Zabrze</Option>
              <Option value="Krakow">Kraków</Option>
              <Option value="Poznan">Poznań</Option>
              <Option value="Gdansk">Gdańsk</Option>
              <Option value="Szczecin">Szczecin</Option>
            </Select>
          </div>
          <div className="errors-form contact-form">
            {this.state.studentCityError}
          </div>
        </div>

        <div className="inputBar">
          <h2>Description</h2>
          <TextArea
            className="inp"
            placeholder="Student description"
            onChange={this.addstudentDescription.bind(this)}
            autoSize
          ></TextArea>
        </div>

        <div className="inputBar">
          <h2>Qualifying test results</h2>
          <Input
            className="inp"
            className={
              this.state.studentNameError ? "inputWithE" : "inputWithoutE"
            }
            placeholder="Qualifying test results"
            val={this.state.studentTestResult}
            onChange={this.addstudentTestResult.bind(this)}
          ></Input>
          <div className="errors-form contact-form">
            {this.state.studentTestResultError}
          </div>
        </div>

        <div className="inputBar">
          <h2>Mentor preference</h2>
          <Input
            className="inp"
            placeholder="Input mentor name"
            val={this.state.studentMentor}
            onChange={this.addstudentMentor.bind(this)}
          ></Input>
        </div>

        <div className="btn">
          <Button
            className="addStudentBtn"
            type="default"
            shape="round"
            icon="plus"
            block={true}
            loading={this.state.iconLoading}
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
    check: state.studentCheck
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxStudentForm: studentData => dispatch(addStudentAction(studentData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StudentForm));
