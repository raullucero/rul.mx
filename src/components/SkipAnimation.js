import "../theme/components/skip-animation.css";
import React from "react";
import { SkipIcon } from "./SkipIcon";

export const SkipAnimation = ({ onClick }) => (
  <div className="skip-container" onClick={onClick}>
    Skip
    <SkipIcon />
  </div>
);
