import React from "react";
import { connect } from "react-redux";
import SampleComponent from "../SampleComponent";
import MentorGroupView from "../MentorGroup";
import { withRouter } from "react-router";
import { ParticipantList } from "../ParticipantList";
import {
  getParticipants,
  addParticipant
} from "../../redux/actions/participants";
import { filterParticipantList } from "../../redux/actions/updateParticipantListDisplay";

/**
 * A relatively simple functional component,
 * it's only real purpose is to show that redux works and there's a username that ends up in the store
 */
class ParticipantPickingView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      /**@type {{field: string, value: string}[]} - this table represents the filter conditions as {field: value} pairs */
      filterConditions: [{ field: "name", value: "a" }]
    };
  }

  componentDidMount() {
    const { getParticipants } = this.props;
    getParticipants();
  }

  static getDerivedStateFromProps(props, state) {
    //order re-filtering of the list of participants to display if the index is likely to be out-of-date
    if (props.displayIndexStale)
      props.filterParticipantList(props.participants, state.conditions);
    return null;
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
        <ParticipantList
          city="Wroclaw"
          participants={this.props.displayIndex.map(uuid => participants[uuid])}
          onAddParticipant={id => {
            addParticipant(id, userId);
          }}
        />
      </SampleComponent>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userAuth,
    participants: state.participants,
    displayIndex: state.participantListDisplay.uuidList,
    displayIndexStale: state.participantListDisplay.stale
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getParticipants: userId => getParticipants(dispatch, userId),
    addParticipant: (participantId, userId) =>
      addParticipant(dispatch, participantId, userId),
    filterParticipantList: (participants, conditions) =>
      dispatch(filterParticipantList(participants, conditions))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ParticipantPickingView));
