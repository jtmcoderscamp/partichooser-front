import React, { Component } from "react";
import "./MentorsList.css";

class MentorsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: [
        { name: "Patryk", surname: "Kowalski", email: "ok@gmail.com", id: 1 },
        { name: "Jan", surname: "Kowal", email: "nice@gmail.com", id: 2 },
        { name: "Jan", surname: "Kowal", email: "nice@gmail.com", id: 3 }
      ]
    };
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
              <li className="mentorcontainer" key={mentor.id}>
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
