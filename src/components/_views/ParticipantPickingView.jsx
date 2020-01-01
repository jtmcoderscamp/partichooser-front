import React from "react";
import { connect } from "react-redux";
import SampleComponent from "../SampleComponent";
import { withRouter } from "react-router";
import { ParticipantList } from "../ParticipantList";
import {
  ADD_PARTICIPANT,
  GET_PARTICIPANTS
} from "../../redux/actions/participants";

/**
 * A relatively simple functional component,
 * it's only real purpose is to show that redux works and there's a username that ends up in the store
 */
class ParticipantPickingView extends React.PureComponent {
  componentDidMount() {
    const { getParticipants } = this.props;
    getParticipants();
  }

  render() {
    const { participants, user, addParticipant } = this.props;

    return (
      <SampleComponent message="This is the view for choosing participants to groups ">
        <div>
          {user.name
            ? `You're logged in as "${user.name}"`
            : `You're not logged in`}
        </div>
        <ParticipantList
          city="Wroclaw"
          participants={participants}
          onAddParticipant={id => {
            addParticipant(id);
          }}
        />
      </SampleComponent>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userAuth,
    participants: state.participants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getParticipants: () => {
      dispatch({
        type: GET_PARTICIPANTS
      });
    },
    addParticipant: id => {
      dispatch({
        type: ADD_PARTICIPANT,
        payload: id
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ParticipantPickingView));
