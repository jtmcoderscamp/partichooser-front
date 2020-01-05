import React from "react";
import "./menuBar.css";
import { Button, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    //this.state
  }

  createListOfCities(currentcity = "Wrocław") {
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
    const list = this.createListOfCities();
    return (
      <div className="menu">
        <div className="ikona">
          {" "}
          <img src="/src/components/MenuBar/cc.jpg" alt="logo"></img>{" "}
        </div>
        <div className="buttons">
          <Menu mode="horizontal">
            {this.props.children}
            <SubMenu title="Change city">
              <Menu.Item>{list[0]}</Menu.Item>
              <Menu.Item>{list[1]}</Menu.Item>
              <Menu.Item>{list[2]}</Menu.Item>
              <Menu.Item>{list[3]}</Menu.Item>
              <Menu.Item>{list[4]}</Menu.Item>
              <Menu.Item>{list[5]}</Menu.Item>
            </SubMenu>
            <Menu.Item>Log out</Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
