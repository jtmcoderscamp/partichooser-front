import React from "react";
import { connect } from "react-redux";
import "./menuBar.css";
import { Button, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import logOut from "../../redux/actions/logOut";
import { setCurrentCityFilter } from "../../redux/actions/filters";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    //this.state
  }

  handleCitySelect(e) {
    this.props.selectCity(e.key);
  }

  render() {
    //if you pass the current city it won't appear
    const list = this.props.listOfCities;
    return (
      <div className="menu">
        <div className="ikona">
          <img src={require("./cc.jpg")} alt="logo"></img>
        </div>
        <div className="buttons">
          <Menu mode="horizontal">
            {this.props.children}
            <SubMenu
              title="Change city"
              onClick={this.handleCitySelect.bind(this)}
            >
              <Menu.Item key="any">-ANY CITY-</Menu.Item>
              {list.map(cityName => {
                return <Menu.Item key={cityName}>{cityName}</Menu.Item>;
              })}
            </SubMenu>
            <Menu.Item onClick={this.props.logOut}>Log out</Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
    selectCity: cityName => dispatch(setCurrentCityFilter(cityName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
