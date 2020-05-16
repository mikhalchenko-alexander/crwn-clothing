import React from 'react';
import './Button.styles.scss';

const Button = ({ children, ...otherProps }) => (
  <button className="button" { ...otherProps }>
    { children }
  </button>
);

export default Button;
