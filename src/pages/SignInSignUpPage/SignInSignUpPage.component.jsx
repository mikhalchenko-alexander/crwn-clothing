import React from 'react';
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';
import { SignUpPageContainer } from './SignInSignUpPage.styles';

const SignInSignUpPage = () => (
  <SignUpPageContainer>
    <SignIn />
    <SignUp />
  </SignUpPageContainer>
);

export default SignInSignUpPage;
