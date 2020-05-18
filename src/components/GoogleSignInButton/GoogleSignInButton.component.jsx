import React from 'react';
import Button from '../Button/Button.component';
import './GoogleSignInButton.styles.scss';

const GoogleSignInButton = (props) => (
  <Button additionalClassNames='google-sign-in-button' { ...props }>SIGN IN WITH GOOGLE</Button>
);

export default GoogleSignInButton;
