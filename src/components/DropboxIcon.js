import "../theme/components/dropbox-icon.css";
import React from "react";
import { Link } from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDropbox } from "@fortawesome/free-brands-svg-icons";

export const DropboxIcon = () => (
  <Link href="https://dropbox.com" target="_blank">
    <FontAwesomeIcon className="dropbox-icon" icon={faDropbox} />
  </Link>
);
