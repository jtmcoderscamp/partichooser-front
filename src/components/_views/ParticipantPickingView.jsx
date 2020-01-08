import React from "react";
import { connect } from "react-redux";
import SampleComponent from "../SampleComponent";
import { withRouter } from "react-router";
import { ParticipantList } from "../ParticipantList";
import {
  getParticipants,
  addParticipant
} from "../../redux/actions/participants";
import Loader from "../Loader/index";

/**
 * A relatively simple functional component,
 * it's only real purpose is to show that redux works and there's a username that ends up in the store
 */
class ParticipantPickingView extends React.PureComponent {
  componentDidMount() {
    const { user } = this.props;
    const userId = user.uuid;
    const { getParticipants } = this.props;
    getParticipants(userId);
  }

  render() {
    const { participants, user, addParticipant } = this.props;
    const userId = user.uuid;

    return (
      <SampleComponent>
        <div>
          {user.name
            ? `You're logged in as "${user.name}"`
            : `You're not logged in`}
        </div>
        {participants.loading ? (
          <Loader />
        ) : (
          <ParticipantList
            city="Wroclaw"
            participants={participants}
            onAddParticipant={id => {
              addParticipant(id, userId);
            }}
          />
        )}
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
    getParticipants: userId => getParticipants(dispatch, userId),
    addParticipant: (userId, participantId) =>
      addParticipant(dispatch, userId, participantId)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ParticipantPickingView));
