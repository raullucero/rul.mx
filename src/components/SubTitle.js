import '../theme/components/subtitle.css';
import React from "react";

export const SubTitle = ({ children, ...rest }) => (
  <h3 className="subtitle" {...rest}>{children}</h3>
);
