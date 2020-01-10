import React from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import "./mentorGroup.css";
import { fetchStudentA } from "../../redux/actions/fetchStudent";
import updateMentorGroup from "../../redux/actions/updateMentorGroup";
// import removeGroupMemberA from "../../redux/actions/removeGroupMemberA";
import { removeParticipant } from "../../redux/actions/participants";

import { withRouter } from "react-router";

class ListOfMembers extends React.Component {
  componentDidMount() {
    this.props
      .fetchStudentA()
      .then(() =>
        this.props.updateMentorGroup(this.props.user, this.props.students)
      )
      .catch(err => console.log("Error", err));
  }

  renderList() {
    if (
      this.props.members.length === 0 ||
      (Object.keys(this.props.members).length === 0 &&
        this.props.members.constructor === Object)
    )
      return <div>You're not logged in</div>;
    else {
      return this.props.members.map(member => {
        return (
          <div className="member-component" key={member.uuid}>
            <div>
              {member.name} {member.surname}
            </div>
            <div>
              {/*onClick={this.onDivCLick}*/}
              <Icon
                type="minus-circle"
                style={{ color: " rgb(252, 212, 33)" }}
                onClick={() => {
                  removeParticipant(member.uuid);
                }}
              />
            </div>
          </div>
        );
      });
    }
  }

  render() {
    if (this.props.members === {}) console.log("obiekttttttt");
    console.log("props   !!!!!!!!!!    ", this.props);
    console.log("member ", this.props.members);
    return (
      <div>
        <div className="listOfMembers-component"> My Group </div>
        <div> {this.renderList()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userAuth,
    members: state.mentorGroup,
    students: state.fetchStudent
  };
};

const mapDispatchToProps = {
  fetchStudentA,
  updateMentorGroup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListOfMembers));
