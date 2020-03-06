import "../theme/components/skip-icon.css";
import React from "react";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFastForward } from "@fortawesome/free-solid-svg-icons";

export const SkipIcon = ({ ...rest }) => (
  <Button {...rest}>
    <FontAwesomeIcon className="skip-icon" icon={faFastForward} />
  </Button>
);
