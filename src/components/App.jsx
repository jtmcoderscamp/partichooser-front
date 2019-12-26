import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginView from "./_views/LoginView";
import ParticipantPickingView from "./_views/ParticipantPickingView";
import MentorManagementView from "./_views/MentorManagementView";

/**
 * A simple router - not much to navigate as the work on the app has barely even started.
 * But when some views are really created, we'll be using this more
 */
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/participants">
            <ParticipantPickingView />
          </Route>
          <Route path="/mentors">
            <MentorManagementView />
          </Route>
        </Switch>
      </Router>
    );
  }
}
