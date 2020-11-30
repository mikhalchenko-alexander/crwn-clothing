import React, { useState } from 'react';

import FormInput from '../_forms/FormInput/FormInput.component';
import { ButtonContainer } from '../Button/Button.styles';
import { ErrorContainer, SignUpContainer, TitleContainer } from './SignUp.styles';
import { createSignUpStartAction } from '../../redux/user/user-actions';
import { connect } from 'react-redux';

const SignUp = ({ signupStart }) => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState(null);

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    signupStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleContainer>I do not have an account</TitleContainer>
      <span>Sign up with your email and password</span>

      <form onSubmit={ handleSubmit }>

        <FormInput handleChange={ handleChange }
                   label="Display name"
                   type="text"
                   name="displayName"
                   value={ displayName }
                   required />

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

        <FormInput handleChange={ handleChange }
                   label="Confirm password"
                   type="password"
                   name="confirmPassword"
                   value={ confirmPassword }
                   required />

        {
          error ?
            <ErrorContainer>{ error }</ErrorContainer> :
            null
        }

        <ButtonContainer type="submit">Sign Up</ButtonContainer>
      </form>

    </SignUpContainer>
  );

};

const mapDispatchToProps = dispatch => ({
  signupStart: credentials => dispatch(createSignUpStartAction(credentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
