import React from "react";
import MentorGroupView from "../MentorGroup";
import ParticipantPickingView from "./ParticipantPickingView";

function CitySelection({ setCity }) {
  const cities = [
    { label: "All", value: "" },
    { label: "Wrocław", value: "Wrocław" },
    { label: "Poznań", value: "Poznań" },
    { label: "Warszawa", value: "Warszawa" },
    { label: "Gdańsk", value: "Gdańsk" }
  ];
  return (
    <div>
      <label htmlFor="city">Choose city</label>
      <select id="city" onChange={e => setCity(e.target.value)}>
        {cities.map(city => (
          <option key={city.value} value={city.value}>
            {city.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }

  render() {
    return (
      <div>
        <CitySelection setCity={city => this.setState({ city })} />
        <div style={{ display: "flex" }}>
          <MentorGroupView />
          <ParticipantPickingView city={this.state.city} />
        </div>
      </div>
    );
  }
}
