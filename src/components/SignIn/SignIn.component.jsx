import React from 'react';
import FormInput from '../_forms/FormInput/FormInput.component';
import { ButtonContainer, ButtonStyles } from '../Button/Button.styles';
import { ButtonsContainer, SignInContainer, TitleContainer } from './SignIn.styles';
import { connect } from 'react-redux';
import { createEmailSignInStartedAction, createGoogleSignInStartedAction } from '../../redux/user/user-actions';

class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    const { signInWithGoogle } = this.props;
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
            <ButtonContainer type="button" buttonStyle={ ButtonStyles.GOOGLE_SIGN_IN } onClick={ signInWithGoogle }>SIGN
              IN WITH
              GOOGLE</ButtonContainer>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signInWithEmail } = this.props;
    const { email, password } = this.state;
    signInWithEmail(email, password);
  };

  clearForm = () => {
    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
}

const mapDispatchToProps = dispatch => ({
  signInWithGoogle: () => dispatch(createGoogleSignInStartedAction()),
  signInWithEmail: (email, password) => dispatch(createEmailSignInStartedAction({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
