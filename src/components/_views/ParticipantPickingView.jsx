import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ParticipantList } from "../ParticipantList";
import {
  getParticipants,
  addParticipant
} from "../../redux/actions/participants";
import { showOnlyParticipantsWithoutGroup } from "../../redux/actions/filters";
import Loader from "../Loader/index";
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
      filterConditions: [
        { field: "city", value: props.city || "" },
        { field: "withoutGroup", value: props.showOnlyWithoutGroup }
      ]
    };
  }

  componentDidMount() {
    const { user } = this.props;
    const userId = user.uuid;
    const { getParticipants } = this.props;
    getParticipants(userId);
  }

  componentDidUpdate(oldProps) {
    if (
      oldProps.city !== this.props.city ||
      oldProps.showOnlyWithoutGroup !== this.props.showOnlyWithoutGroup
    ) {
      this.props.filterParticipantList(this.props.participants, [
        { field: "name", value: "a" },
        { field: "city", value: this.props.city || "" },
        { field: "withoutGroup", value: this.props.showOnlyWithoutGroup }
      ]);
    }
  }

  static getDerivedStateFromProps(props, state) {
    //order re-filtering of the list of participants to display if the index is likely to be out-of-date
    if (props.displayIndexStale) {
      props.filterParticipantList(props.participants, state.filterConditions);
    }
    return null;
  }

  render() {
    const {
      participants,
      user,
      isLoading,
      addParticipant,
      showOnlyWithoutGroup,
      setShowOnlyWithoutGroup
    } = this.props;
    const userId = user.uuid;

    return (
      <div style={{ width: "100%" }}>
        {isLoading ? (
          <Loader />
        ) : (
          <ParticipantList
            participants={this.props.displayIndex.map(
              uuid => participants[uuid]
            )}
            city={this.props.city}
            onAddParticipant={id => {
              addParticipant(id, userId);
            }}
            showOnlyWithoutGroup={showOnlyWithoutGroup}
            setShowOnlyWithoutGroup={setShowOnlyWithoutGroup}
            userId={user.uuid}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userAuth,
    participants: state.participants.data,
    isLoading: state.participants.loading,
    displayIndex: state.participantListDisplay.uuidList,
    displayIndexStale: state.participantListDisplay.stale,
    city: state.participantFilters.currentCity,
    showOnlyWithoutGroup: state.participantFilters.withoutGroupsAssignedOnly
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getParticipants: userId => getParticipants(dispatch, userId),
    addParticipant: (participantId, userId) =>
      addParticipant(dispatch, participantId, userId),
    filterParticipantList: (participants, filterConditions) =>
      dispatch(filterParticipantList(participants, filterConditions)),
    setShowOnlyWithoutGroup: show =>
      dispatch(showOnlyParticipantsWithoutGroup(show))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ParticipantPickingView));
