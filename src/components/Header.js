import "../theme/components/header.css";

import React from "react";
import logo from "../assets/logo.png";

export const Header = () => (
  <header className="header">
    <img className="logo" src={logo} alt="Logo Raul Lucero" />
  </header>
);
