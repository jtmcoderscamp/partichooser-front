import "antd/dist/antd.css";
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginView from "./_views/LoginView";
import ParticipantPickingView from "./_views/ParticipantPickingView";
import MentorManagementView from "./_views/MentorManagementView";
import MentorGroupView from "./MentorGroup";

/**
 * A simple router - not much to navigate as the work on the app has barely even started.
 * But when some views are really created, we'll be using this more
 */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          See how this part doesn't change at all
          <br />
          <Link to="/">HOME</Link>
          <br />
          <Link to="/mentors">Mentor management</Link>
        </div>

        <Switch>
          <Route path="/participants">
            {this._authProtect(<ParticipantPickingView />)}
          </Route>
          <Route path="/mentors">
            {this._authProtect(<MentorManagementView />)}
          </Route>
          <Route path="/">
            {this._authProtect(
              <div style={{ display: "flex" }}>
                <MentorGroupView />
                <ParticipantPickingView />
              </div>
            )}
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
