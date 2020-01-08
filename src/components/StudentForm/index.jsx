import React from "react";
import "./studentForm.css";
import { Button, Input, Select } from "antd";
import { connect } from "react-redux";
import addStudentAction from "../../redux/actions/addStudentAction";
import { withRouter } from "react-router";
import TextArea from "antd/lib/input/TextArea";
import axios from "axios";
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
      loading: false,
      iconLoading: false,

      studentNameError: "",
      studentSurnameError: "",
      studentEmailError: "",
      studentTestResultError: "",
      studentCityError: "",

      send: false,
      error: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.val
    });
  }

  addstudentCity(e) {
    this.setState({ studentCity: e });
  }

  enterLoading = () => {
    this.setState({ loading: true });
  };
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
        mentorPreferences: this.state.studentMentor
      });
    }
  }

  /*
  addstudentButtonClick()
  {
    axios
      .post("https://ptc-test-participants.herokuapp.com/api/participants", {
        name: this.state.studentName,
        surname: this.state.studentSurname,
        city: this.state.studentCity,
        email: this.state.studentEmail,
        qualifyingPoints: this.state.studentTestResult,
        description: this.state.studentDescription,
        mentorPreferences: this.state.studentMentor
      })
      .then(response =>
      {
        console.log(response);
        alert("Student added to database");
        this.setState({
          loading: false,
          iconLoading: false
        });
      })
      .catch(error =>
      {
        this.state.studentName
          ? alert(error.response.data)
          : alert("Please add student Name.");
        this.state.studentSurname
          ? alert(error.response.data)
          : alert("Please add student Surname.");
        this.state.studentEmail
          ? alert(error.response.data)
          : alert("Please add student Email.");
        this.state.studentCity
          ? alert(error.response.data)
          : alert("Please add student Name.");
        this.state.studentTestResult
          ? alert(error.response.data)
          : alert("Please add student qualifying test result.");
        this.setState({
          loading: false,
          iconLoading: false
        });
      });
  }
*/

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
      this.state.email.indexOf("@") === -1
    ) {
      studentEmailError = "Student email is not correct!";
      errors.push(studentEmailError);
    }
    if (this.state.studentTestResult.indexOf(" ") === -1) {
      studentTestResultError = "Add student test result!";
      errors.push(studentTestResultError);
    }
    if (this.state.studentCity.indexOf(" ") === -1) {
      studentCityError = "Add student city!";
      errors.push(studentCityError);
    }
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
            onChange={e => this.handleChange(e)}
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
            onChange={e => this.handleChange(e)}
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
            onChange={e => this.handleChange(e)}
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
            onChange={e => this.handleChange(e)}
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
            onChange={e => this.handleChange(e)}
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
            onChange={e => this.handleChange(e)}
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
