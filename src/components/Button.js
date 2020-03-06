import "../theme/components/button.css";
import React from "react";

export const Button = ({ children, ...rest }) => (
  <button className="button" {...rest}>
    {children}
  </button>
);
