import '../theme/components/paragraph.css';
import React from 'react';

export const Paragraph = ({children, ...rest}) => (
  <p className="paragraph" {...rest}>
    {children}
  </p>
);
