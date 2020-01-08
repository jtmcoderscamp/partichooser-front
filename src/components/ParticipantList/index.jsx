import React from "react";
import { Icon } from "antd";
import classnames from "classnames";
import "./style.css";

const Heading = ({ children }) => {
  return <h2 className="heading">{children}</h2>;
};
class ParticipantListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }
  render() {
    const { participant, onAddParticipant, listConfig } = this.props;
    return (
      <>
        <div className="list-row">
          <div
            className={classnames("dark", "toggle-details-container")}
            style={{ width: listConfig.name.width }}
          >
            <Icon
              onClick={() =>
                this.setState({ showDetails: !this.state.showDetails })
              }
              type={!this.state.showDetails ? "plus-circle" : "minus-circle"}
              className={classnames("action", "toggle-details")}
              title={`show details of user ${participant.name} ${participant.surname}`}
            />
            {participant.name}
          </div>
          <div className="dark" style={{ width: listConfig.surname.width }}>
            {participant.surname}
          </div>
          <div className="dark" style={{ width: listConfig.city.width }}>
            {participant.city}
          </div>
          <div
            className="dark right"
            style={{ width: listConfig.testResults.width }}
          >
            {participant.qualifyingPoints}
          </div>
          <div
            className="centered"
            style={{ width: listConfig.addToGroup.width }}
          >
            <Icon
              onClick={() => onAddParticipant(participant.uuid)}
              type="plus"
              className="action"
            />
          </div>
        </div>
        {this.state.showDetails ? (
          <div className={classnames("details", "dark")}>
            <div>
              Additional information of {participant.name} {participant.surname}
            </div>
            <div>
              email: {participant.email ? participant.email : "not specified"}
            </div>
            <div>
              mentor preferences:{" "}
              {participant.mentorPreferences
                ? participant.mentorPreferences
                : "not specified"}
            </div>
            <div>
              description:{" "}
              {participant.description && participant.description.length
                ? participant.description.join(",")
                : "not specified"}
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export class ParticipantList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      offsetTop: 0
    };
    this.listConfig = {
      name: { width: "20%", label: "Name" },
      surname: { width: "20%", label: "Surname" },
      city: { width: "15%", label: "City" },
      testResults: { width: "20%", label: "Test result" },
      addToGroup: { width: "25%", label: "Add to my group" }
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
          <Heading>{`All Students ${city ? `(${city})` : ""}`}</Heading>
        </div>
        {participants && participants.length ? (
          <div className="list">
            <div className={classnames("list-row", "list-row-titles")}>
              <div style={{ width: this.listConfig.name.width }}>
                {this.listConfig.name.label}
              </div>
              <div style={{ width: this.listConfig.surname.width }}>
                {this.listConfig.surname.label}
              </div>
              <div style={{ width: this.listConfig.city.width }}>
                {this.listConfig.city.label}
              </div>
              <div
                className="right"
                style={{ width: this.listConfig.testResults.width }}
              >
                {this.listConfig.testResults.label}
              </div>
              <div
                className="centered"
                style={{ width: this.listConfig.addToGroup.width }}
              >
                {this.listConfig.addToGroup.label}
              </div>
            </div>
            {participants.map(participant => (
              <ParticipantListItem
                key={participant.uuid}
                participant={participant}
                onAddParticipant={onAddParticipant}
                listConfig={this.listConfig}
              />
            ))}
          </div>
        ) : (
          <span>
            There is no participants which can be assigned in this city
          </span>
        )}
      </div>
    );
  }
}
