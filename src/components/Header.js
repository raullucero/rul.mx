import "../theme/components/header.css";

import React from "react";
import logo from "../assets/logo.png";
import { SubTitle } from "./SubTitle";
import { Link } from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDropbox } from "@fortawesome/free-brands-svg-icons";

export const Header = () => (
  <header className="header">
    <img className="logo" src={logo} alt="Logo Raul Lucero" />
    <SubTitle>
      Full Stack Software Engineer @Dropbox <Dropbox />
    </SubTitle>
  </header>
);

export const Dropbox = () => (
  <Link href="https://dropbox.com" target="_blank">
    <FontAwesomeIcon className="dropbox-icon" icon={faDropbox} />
  </Link>
);
