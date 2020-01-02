import React from "react";
import { Icon } from "antd";

const Member = props => {
  const members = props.members.map(({ ID, name, surname }) => {
    return (
      <div className="member-component">
        <div id={ID}>
          {name} {surname}
        </div>
        <div>
          {" "}
          {/*onClick={this.onDivCLick}*/}
          <Icon type="minus-circle" style={{ color: " rgb(252, 212, 33)" }} />
        </div>
      </div>
    );
  });
  return <div>{members}</div>;
};
export default Member;

// export default class Member extends React.Component {
//   constructor(probs) {
//     super(probs);

//   }

//   componentDidMount() {
//    // this.setState({ name: "Imię", surname: "Nazwisko" });
//   }
//   componentDidUpdate(probs){

//   }

//   onDivCLick(e) {
//    //usunięcie Member
//    //usunięcie mentora z mentorowanego
//   }
//   render() {
//     return ( <div className="member-component">
//                   <div>
//                     {this.state.name} {this.state.surname}
//                   </div>
//                   <div onClick={this.onDivCLick}>
//                     <Icon type="minus-circle" style={{ color: " rgb(252, 212, 33)" }} />
//                   </div>
//               </div>
//     );
//   }
// }
