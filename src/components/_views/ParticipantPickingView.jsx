import React from "react";
import { connect } from "react-redux";
import SampleComponent from "../SampleComponent";
import { withRouter } from "react-router";
import { ParticipantList } from "../ParticipantList";

/**
 * A relatively simple functional component,
 * it's only real purpose is to show that redux works and there's a username that ends up in the store
 */
function ParticipantPickingView(props) {
  return (
    <SampleComponent message="This is the view for choosing participants to groups ">
      <div>
        {props.user.name
          ? `You're logged in as "${props.user.name}"`
          : `You're not logged in`}
      </div>
      <ParticipantList
        city="Wroclaw"
        participants={[
          {
            id: 1,
            name: "Marek",
            surname: "Kowalski",
            examPoints: 80
          },
          {
            id: 2,
            name: "Adam",
            surname: "Nowak",
            examPoints: 55
          }
        ]}
        onAddParticipant={id => {
          console.log(`On add participant ${id}`);
        }}
      />
    </SampleComponent>
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
