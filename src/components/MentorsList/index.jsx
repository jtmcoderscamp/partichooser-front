import axios from "axios";
import React, { Component } from "react";
import "./MentorsList.css";
import { Spin } from "antd";

class MentorsView extends Component {
  state = {
    mentors: [],
    isLoading: true
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
      })
      .then(() => {
        this.setState({ isLoading: false });
      });
  }

  onUserRemove(num) {
    let ment = this.state.mentors.find(obj => obj.uuid === num);
    let mentIndex = this.state.mentors.indexOf(ment);

    let newState = [...this.state.mentors];

    newState.splice(mentIndex, 1);
    let mentors = newState;
    this.setState({ mentors });
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
            <div className="actions">Remove mentor</div>
          </div>
          {this.state.isLoading ? (
            <Spin
              size="large"
              style={{
                width: "100%",
                padding: "10%",
                color: "black"
              }}
              tip="Loading..."
            />
          ) : null}

          {this.state.mentors.map(mentor => {
            return (
              <li className="mentorcontainer" key={mentor.uuid}>
                <div>{mentor.name}</div>
                <div>{mentor.surname}</div>
                <div>{mentor.email}</div>

                <p
                  onClick={this.onUserRemove.bind(this, mentor.uuid)}
                  className="actions"
                >
                  <b>-</b>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );

    //TODO

    // return (
    //   <>
    //     <MentorsListPeople
    //       mentorsArray={this.state.mentors}
    //       mentorUuid={num => {
    //         return num;
    //       }}
    //       userRemoving={this.onUserRemove.bind(this, num)}
    //       loading={this.state.isLoading}
    //     />
    //   </>
    // );
  }
}

export default MentorsView;
