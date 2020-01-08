import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginView from "./_views/LoginView";
import ParticipantPickingView from "./_views/ParticipantPickingView";
import MentorManagementView from "./_views/MentorManagementView";
import Header from "./Header";

/**
 * A simple router - not much to navigate as the work on the app has barely even started.
 * But when some views are really created, we'll be using this more
 */
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MentorManagementView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/participants">
            <ParticipantPickingView />
          </Route>
          <Route path="/addmentor">
            <LoginView />
          </Route>
        </Switch>
      </Router>
    );
  }
}
