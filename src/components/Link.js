import '../theme/components/link.css';
import React from 'react';

export const Link = ({ children, href, ...rest }) => (
  <a className="link" href={href} {...rest} >
    {children}
  </a>
);
