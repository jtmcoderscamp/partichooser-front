import React from "react";
import { connect } from "react-redux";
import MentorList from "../SampleComponent";
import SampleComponent from "../SampleComponent";
import { withRouter } from "react-router";

/**
 * A relatively simple functional component,
 * it's only real purpose is to show that redux works and there's a username that ends up in the store
 */
function ParticipantPickingView(props) {
  return (
    <div className="container">
      <SampleComponent message="This is the view for choosing participants to groups ">
        <div>
          {props.user.name
            ? `You're logged in as "${props.user.name}"`
            : `You're not logged in`}
        </div>
      </SampleComponent>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ParticipantPickingView));
