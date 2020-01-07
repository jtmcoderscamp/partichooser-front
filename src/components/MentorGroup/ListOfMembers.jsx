import React from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import "./mentorGroup.css";
import { fetchStudentA } from "../../redux/actions/fetchStudent";
import mentorGroup from "../../redux/actions/mentorGroup";
// import removeGroupMemberA from "../../redux/actions/removeGroupMemberA";

import { withRouter } from "react-router";

class ListOfMembers extends React.Component {
  componentDidMount() {
    this.props.fetchStudentA();
    //this.props.mentorGroup('aaaa');
    this.setState({
      members: this.props.members.data
    });
    console.log("set state", this.props);
  }

  renderList() {
    return this.props.members.map(member => {
      return (
        <div className="member-component" key={member.uuid}>
          <div>
            {member.name} {member.surname}
          </div>
          <div>
            {/*onClick={this.onDivCLick}*/}
            <Icon type="minus-circle" style={{ color: " rgb(252, 212, 33)" }} />
          </div>
        </div>
      );
    });
  }

  render() {
    console.log("props   !!!!!!!!!!    ", this.props);
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
    students: state.listMentorGroup,
    members: state.fetchStudent
  };
};

const mapDispatchToProps = {
  fetchStudentA,
  mentorGroup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListOfMembers));
