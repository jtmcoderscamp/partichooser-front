import axios from "axios";
import React, { Component } from "react";
import "./MentorsList.css";

class MentorsView extends React.Component {
  state = {
    mentors: []
  };
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://ptc-test-users.herokuapp.com/users"
      )
      .then(res => {
        const mentors = res.data;
        this.setState({ mentors });
        console.log(mentors);
      });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Mentors</h1>
        </div>
        <ul>
          <div className="mentorcontainer">
            <div>Name</div>
            <div>Surname</div>
            <div>E-mail</div>
            <div className="actions">Add mentor</div>
          </div>
          {this.state.mentors.map(mentor => {
            return (
              <li className="mentorcontainer" key={mentor.uuid}>
                <div>{mentor.name}</div>
                <div>{mentor.surname}</div>
                <div>{mentor.email}</div>
                <p className="actions">+</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MentorsView;
