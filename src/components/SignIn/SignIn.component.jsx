import React from 'react';
import FormInput from '../_forms/FormInput/FormInput.component';
import { auth, signInWithGoogle } from '../../firebase/firebase-utils';
import { ButtonContainer, ButtonStyles } from '../Button/Button.styles';
import { ButtonsContainer, SignInContainer, TitleContainer } from './SignIn.styles';

class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>Sign in with your email and password</span>
        <form onSubmit={ this.handleSubmit }>

          <FormInput handleChange={ this.handleChange }
                     label="Email"
                     type="email"
                     name="email"
                     value={ this.state.email }
                     required />

          <FormInput handleChange={ this.handleChange }
                     label="Password"
                     type="password"
                     name="password"
                     value={ this.state.password }
                     required />

          <ButtonsContainer>
            <ButtonContainer type="submit">Sign In</ButtonContainer>
            <ButtonContainer buttonStyle={ ButtonStyles.GOOGLE_SIGN_IN } onClick={ signInWithGoogle }>SIGN IN WITH
              GOOGLE</ButtonContainer>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.clearForm();
    } catch (error) {
      console.error('Error logging in user: ', error)
    }
  };

  clearForm = () => {
    this.setState({
      email: '',
      password: ''
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
}

export default SignIn;
