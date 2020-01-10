import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ParticipantList } from "../ParticipantList";
import {
  getParticipants,
  addParticipant
} from "../../redux/actions/participants";
import Loader from "../Loader/index";
import { filterParticipantList } from "../../redux/actions/updateParticipantListDisplay";
import StudentForm from "../StudentForm";

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
        { field: "name", value: "a" },
        { field: "city", value: this.props.city || "" }
      ]
    };
  }

  componentDidMount() {
    const { getParticipants } = this.props;
    getParticipants();
  }

  componentDidUpdate(oldProps) {
    console.log("did update", oldProps.city, this.props.city);
    if (oldProps.city !== this.props.city) {
      console.log("update city", this.state.filterConditions);
      this.props.filterParticipantList(
        this.props.user,
        this.props.participants,
        [
          { field: "name", value: "a" },
          { field: "city", value: this.props.city || "" }
        ]
      );
    }
  }

  static getDerivedStateFromProps(props, state) {
    //order re-filtering of the list of participants to display if the index is likely to be out-of-date
    if (props.displayIndexStale) {
      props.filterParticipantList(
        props.user,
        props.participants,
        state.filterConditions
      );
    }
    return null;
  }

  render() {
    const { participants, user, isLoading, addParticipant } = this.props;
    const userId = user.uuid;

    console.log("participants picking view props", this.props);

    return (
      <div style={{ width: "100%" }}>
        <div>
          {user.name
            ? `You're logged in as "${user.name}"`
            : `You're not logged in`}
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <ParticipantList
            participants={this.props.displayIndex
              .filter(({ groupUuid }) => user.uuid !== groupUuid)
              .map(uuid => participants[uuid])}
            city={this.props.city}
            onAddParticipant={id => {
              addParticipant(id, userId);
            }}
          />
        )}
        <div>
          <StudentForm />
        </div>
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
    displayIndexStale: state.participantListDisplay.stale
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getParticipants: userId => getParticipants(dispatch, userId),
    addParticipant: (participantId, userId) =>
      addParticipant(dispatch, participantId, userId),
    filterParticipantList: (user, participants, filterConditions) =>
      dispatch(filterParticipantList(user, participants, filterConditions))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ParticipantPickingView));
