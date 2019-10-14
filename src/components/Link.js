import React from 'react';

export const Link = ({ children, href, ...rest }) => (
  <a href={href} {...rest}>
    {children}
  </a>
);
