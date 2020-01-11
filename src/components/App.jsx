import "antd/dist/antd.css";
import "./main.css";

import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu } from "antd";
import LoginView from "./_views/LoginView";
import MentorManagementView from "./_views/MentorManagementView";
import ParticipantsManagementView from "./_views/ParticipantsManagementView";
import MenuBar from "./MenuBar";
import ParticipantAddingView from "./_views/ParticipantAddingView";
import MentorAddingView from "./_views/MentorAddingView";

class App extends React.Component {
  static get listOfCities() {
    return [
      "Kraków",
      "Warszawa",
      "Wrocław",
      "Gdańsk",
      "Zabrze",
      "Szczecin",
      "Poznań"
    ];
  }

  render() {
    return (
      <Router>
        {this._checkUserAuth() && (
          <div>
            <MenuBar listOfCities={App.listOfCities} hideLogo={true}>
              {this._checkUserAuth("admin") && (
                <Menu.Item>
                  <Link to="/mentors">Mentor list</Link>
                </Menu.Item>
              )}
              {this._checkUserAuth("admin") && (
                <Menu.Item>
                  <Link to="/mentors/add">Add mentor</Link>
                </Menu.Item>
              )}
              <Menu.Item>
                <Link to="/participants">Participants</Link>
              </Menu.Item>
              {this._checkUserAuth("admin") && (
                <Menu.Item>
                  <Link to="/participants/add">Add Participant</Link>
                </Menu.Item>
              )}
            </MenuBar>
          </div>
        )}

        <Switch>
          <Route path="/participants/add">
            {this._authProtect(
              <ParticipantAddingView listOfCities={App.listOfCities} />
            )}
          </Route>
          <Route path="/participants">
            {this._authProtect(<ParticipantsManagementView />)}
          </Route>
          <Route path="/mentors/add">
            {this._authProtect(<MentorAddingView />)}
          </Route>
          <Route path="/mentors">
            {this._authProtect(<MentorManagementView />)}
          </Route>
          <Route path="/">
            {this._authProtect(<ParticipantsManagementView />)}
          </Route>
        </Switch>
      </Router>
    );
  }

  /**
   * Checks if user is logged in and has specific role (if any required - with no argument, method checks only if someone is logged in)
   * @param {string} requiredRole - the optional role to be checked for
   */
  _checkUserAuth(requiredRole) {
    return (
      this.props.logInStatus &&
      this.props.logInStatus === "success" &&
      (!requiredRole ||
        (this.props.userRoles &&
          this.props.userRoles.indexOf(requiredRole) >= 0))
    );
  }

  _authProtect(view) {
    if (this.props.logInStatus && this.props.logInStatus === "success") {
      return view;
    } else return <LoginView />;
  }
}

const mapStateToProps = state => {
  return {
    logInStatus: state.userAuth.status,
    userRoles: state.userAuth.roles
  };
};

export default connect(mapStateToProps)(App);
