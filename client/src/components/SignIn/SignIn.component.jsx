import React, { useState } from 'react';
import FormInput from '../_forms/FormInput/FormInput.component';
import { ButtonContainer, ButtonStyles } from '../Button/Button.styles';
import { ButtonsContainer, SignInContainer, TitleContainer } from './SignIn.styles';
import { connect } from 'react-redux';
import { createEmailSignInStartedAction, createGoogleSignInStartedAction } from '../../redux/user/user-actions';

const SignIn = ({ signInWithGoogle, signInWithEmail }) => {

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInWithEmail(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <span>Sign in with your email and password</span>
      <form onSubmit={ handleSubmit }>

        <FormInput handleChange={ handleChange }
                   label="Email"
                   type="email"
                   name="email"
                   value={ email }
                   required />

        <FormInput handleChange={ handleChange }
                   label="Password"
                   type="password"
                   name="password"
                   value={ password }
                   required />

        <ButtonsContainer>
          <ButtonContainer type="submit">Sign In</ButtonContainer>
          <ButtonContainer type="button" buttonStyle={ ButtonStyles.GOOGLE_SIGN_IN } onClick={ signInWithGoogle }>SIGN
            IN WITH
            GOOGLE</ButtonContainer>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signInWithGoogle: () => dispatch(createGoogleSignInStartedAction()),
  signInWithEmail: (email, password) => dispatch(createEmailSignInStartedAction({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
