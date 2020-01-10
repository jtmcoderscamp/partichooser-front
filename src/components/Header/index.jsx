import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className="navbar">
        <div>
          <img className="logo" src={Logo}></img>
        </div>
        <div className="nav">
          <Link to="/addmentor">Add mentor</Link>
          <br />
          <Link to="/">Add student</Link>
          <Link to="/">Change city</Link>
          <Link to="/">Log out</Link>
        </div>
      </header>
    );
  }
}
