import React from "react";
import { Icon } from "antd";
import "./style.css";

const Heading = ({ children }) => {
  return <h2 className="heading">{children}</h2>;
};
const ParticipantListItem = ({ participant, onAddParticipant }) => {
  return (
    <tr key={participant.id}>
      <td>{participant.name}</td>
      <td>{participant.surname}</td>
      <td>{participant.examPoints}</td>
      <td className="centered">
        <Icon
          onClick={() => onAddParticipant(participant.id)}
          type="plus"
          className="action"
        />
      </td>
    </tr>
  );
};

export const ParticipantList = ({ city, participants, onAddParticipant }) => {
  return (
    <>
      <div>
        <Heading>{`All Students (${city})`}</Heading>
      </div>
      {participants.length ? (
        <table className="list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Test result</th>
              <th width="150" className="centered">
                Add to my group
              </th>
            </tr>
          </thead>
          <tbody>
            {participants.map(participant => (
              <ParticipantListItem
                participant={participant}
                onAddParticipant={onAddParticipant}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <span>There is no participants which can be assigned in this city</span>
      )}
    </>
  );
};
