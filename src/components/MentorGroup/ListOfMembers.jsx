import React from "react";
import { connect } from "react-redux";
// import Member from "./Member";
import "./mentorGroup.css";
import mentorGroup from "../../redux/actions/mentorGroup";
import removeGroupMemberA from "../../redux/actions/removeGroupMemberA";
import { withRouter } from "react-router";

class ListOfMembers extends React.Component {
  constructor(probs) {
    super(probs);
    this.state = { members: [] };
  }

  componentDidMount() {
    // this.props.mentorGroup();
    // this.setState({
    //   members: [
    //     { ID: 1, name: "Joe", surname: "Smith" },
    //     { ID: 2, name: "Alex", surname: "Power" },
    //     { ID: 3, name: "John", surname: "Jones" },
    //     { ID: 4, name: "Sue", surname: "Smithy" },
    //     { ID: 5, name: "Eve", surname: "Nowak" },
    //     { ID: 6, name: "Joy", surname: "Abc" }
    //   ]
    // });
  }

  render() {
    return (
      <div>
        <div className="listOfMembers-component"> My Group </div>
        {/* <Member members={this.state.members} /> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    mentor: state.mentor

    // name: state.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //  {mentorGroup,removeGroupMemberA}
    // reduxLogIn: user => dispatch(logInButFake(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListOfMembers));

// const mapStateToProps = state => {
//   return {
//      mentor: state.mentor

//     // name: state.userName
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//    // reduxLogIn: user => dispatch(logInButFake(user))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(MentorGroupView));
