//TODO

// import React, { Component } from "react";
// import { Spin } from "antd";
// import "../MentorsList/MentorsList.css";

// const MentorsListPeople = props => {
//   return (
//     <div>
//       <div>
//         <h1>Mentors</h1>
//       </div>
//       <ul>
//         <div className="mentorcontainer">
//           <div>Name</div>
//           <div>Surname</div>
//           <div>E-mail</div>
//           <div className="actions">Remove mentor</div>
//         </div>
//         {props.loading ? (
//           <Spin
//             size="large"
//             style={{
//               width: "100%",
//               padding: "10%",
//               color: "black"
//             }}
//             tip="Loading..."
//           />
//         ) : null}

//         {props.mentorsArray.map(mentor => {
//           {
//             props.mentorUuid(mentor.uuid);
//           }
//           return (
//             <li className="mentorcontainer" key={mentor.uuid}>
//               <div>{mentor.name}</div>
//               <div>{mentor.surname}</div>
//               <div>{mentor.email}</div>

//               <p onClick={props.userRemoving} className="actions">
//                 <b>-</b>
//               </p>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default MentorsListPeople;
