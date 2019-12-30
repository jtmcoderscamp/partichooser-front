// import React from "react";
// import SampleComponent from "../SampleComponent";

// export default function MentorManagementView() {
//   return (
//     <div>
//       <SampleComponent message="This is where the admin manages mentors and groups."></SampleComponent>
//     </div>
//   );
// }

import React from "react";
import MentorsList from "../MentorsList";

const MentorManagementView = () => {
  return (
    <div>
      <MentorsList></MentorsList>
    </div>
  );
};

export default MentorManagementView;
