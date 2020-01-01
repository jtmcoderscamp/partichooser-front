import React from "react";
import { Icon } from "antd";
import "./style.css";

const Heading = ({ children }) => {
  return <h2 className="heading">{children}</h2>;
};
const ParticipantListItem = ({ participant, onAddParticipant }) => {
  return (
    <tr key={participant.id}>
      <td className="dark">{participant.name}</td>
      <td className="dark">{participant.surname}</td>
      <td className="dark right">{participant.examPoints}</td>
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

export class ParticipantList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      offsetTop: 0
    };
  }

  componentDidMount() {
    const container = this.containerRef && this.containerRef.current;
    const offsetTop = container.offsetTop;
    this.setState({
      offsetTop
    });
  }

  render() {
    const { city, participants, onAddParticipant } = this.props;
    return (
      <div
        className="container"
        ref={this.containerRef}
        style={{ minHeight: `calc(100vh - ${this.state.offsetTop}px)` }}
      >
        <div>
          <Heading>{`All Students (${city})`}</Heading>
        </div>
        {participants.length ? (
          <table className="list">
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th className="right">Test result</th>
                <th width="150" className="centered">
                  Add to my group
                </th>
              </tr>
            </thead>
            <tbody>
              {participants.map(participant => (
                <ParticipantListItem
                  key={participant.id}
                  participant={participant}
                  onAddParticipant={onAddParticipant}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <span>
            There is no participants which can be assigned in this city
          </span>
        )}
      </div>
    );
  }
}
