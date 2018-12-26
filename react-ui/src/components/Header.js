import React from "react";
import logo from "./../assets/logo.svg";
import "./../css/Header.css";

const Header = () => (
  <header className="Header-header">
    <img src={logo} className="Header-logo" alt="logo" />
    <h1 className="Home-title">Jc's Demo-Project</h1>
  </header>
);

export default Header;
