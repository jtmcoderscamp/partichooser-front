import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className="navbar">
        <div className="logo">
          <img src={Logo}></img>
        </div>
        <Link to="/">HOME</Link>
        <br />
        <Link to="/mentors">MENTORS</Link>
      </header>
    );
  }
}
