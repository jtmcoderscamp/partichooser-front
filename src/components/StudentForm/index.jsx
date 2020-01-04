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
      //default Values
      studentName: "Name",
      studentSurname: "Surname",
      studentEmail: "example@gmail.com",
      studentTestResult: 100,
      studentCity: "Wroclaw",
      studentDescription: ["Description"],
      studentMentor: "Mentor",
      loading: false,
      iconLoading: false
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
  enterLoading = () => {
    this.setState({ loading: true });
  };
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  addstudentButtonClick() {
    this.enterIconLoading();
    /* this.props.reduxStudentForm({
      name: this.state.studentName ? this.state.studentName : "nameless",
      surname: this.state.studentSurname
        ? this.state.studentSurname
        : "nameless",
      email: this.state.studentEmail
        ? this.state.studentEmail
        : "nameless@email.com",
      testResult: this.state.studentTestResult
        ? this.state.studentTestResult
        : "100",
      city: this.state.studentCity ? this.state.studentCity : "Wroclaw",
      mentor: this.state.studentMentor ? this.state.studentMentor : "Mentor",
      description: this.state.studentDescription
        ? this.state.studentDescription
        : "Description"
    });
    this.props.history.push("/participants");
*/
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
      .then(response => {
        console.log(response);
        alert("Student added to database");
        this.setState({
          loading: false,
          iconLoading: false
        });
      })
      .catch(error => {
        alert(error.response.data);
        this.setState({
          loading: false,
          iconLoading: false
        });
      });
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
          <h2>City</h2>
          <Select
            defaultValue="Wroclaw"
            style={{ width: "100%" }}
            onChange={value => this.addstudentCity(value)}
          >
            <Option value="Wroclaw">Wrocław</Option>
            <Option value="Warszawa">Warszawa</Option>
            <Option value="Zabrze">Zabrze</Option>
            <Option value="Krakow">Kraków</Option>
            <Option value="Poznan">Poznań</Option>
            <Option value="Gdansk">Gdańsk</Option>
            <Option value="Szczecin">Szczecin</Option>
          </Select>
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
            placeholder="Qualifying test results"
            onChange={this.addstudentTestResult.bind(this)}
          ></Input>
        </div>

        <div className="inputBar">
          <h2>Mentor preference</h2>
          <Input
            className="inp"
            placeholder="Input mentor name"
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
    name: state.studentName,
    studentname: state.studentSurname,
    email: state.studentEmail,
    testResult: state.studentTestResult,
    city: state.studentCity,
    mentor: state.studentMentor,
    description: state.studentDescription
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxStudentForm: student => dispatch(addStudentAction(student))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StudentForm));
