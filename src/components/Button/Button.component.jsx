import React from 'react';
import './Button.styles.scss';

const Button = ({ children, additionalClassNames, ...otherProps }) => (
  <button className={`${additionalClassNames || ''} button `} { ...otherProps }>
    { children }
  </button>
);

export default Button;
