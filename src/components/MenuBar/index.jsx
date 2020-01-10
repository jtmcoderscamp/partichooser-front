import React from "react";
import { connect } from "react-redux";
import "./menuBar.css";
import { Button, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import logOut from "../../redux/actions/logOut";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    //this.state
  }

  createListOfCities(currentcity = "X") {
    const list = [
      "Kraków",
      "Warszawa",
      "Wrocław",
      "Gdańsk",
      "Zabrze",
      "Szczecin",
      "Poznań"
    ];
    return list.filter(element => element != currentcity);
  }

  render() {
    //if you pass the current city it won't appear
    const list = this.createListOfCities();
    return (
      <div className="menu">
        <div className="ikona">
          <img src={require("./cc.jpg")} alt="logo"></img>
        </div>
        <div className="buttons">
          <Menu mode="horizontal">
            {this.props.children}
            <SubMenu title="Change city">
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
    logOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
