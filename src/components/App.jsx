import "antd/dist/antd.css";
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu } from "antd";
import LoginView from "./_views/LoginView";
import MentorManagementView from "./_views/MentorManagementView";
import ParticipantsManagementView from "./_views/ParticipantsManagementView";
import MenuBar from "./MenuBar";

/**
 * A simple router - not much to navigate as the work on the app has barely even started.
 * But when some views are really created, we'll be using this more
 */
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
        <div>
          <MenuBar listOfCities={App.listOfCities}>
            <Menu.Item>
              <Link to="/">HOME</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/mentors">Mentor management</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/participants">Participants</Link>
            </Menu.Item>
          </MenuBar>
        </div>

        <Switch>
          <Route path="/participants">
            {this._authProtect(<ParticipantsManagementView />)}
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

  _authProtect(view) {
    if (this.props.logInStatus && this.props.logInStatus === "success") {
      return view;
    } else return <LoginView />;
  }
}

const mapStateToProps = state => {
  return {
    logInStatus: state.userAuth.status
  };
};

export default connect(mapStateToProps)(App);
