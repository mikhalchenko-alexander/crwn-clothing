import React from 'react';

import FormInput from '../_forms/FormInput/FormInput.component';
import { ButtonContainer } from '../Button/Button.styles';
import { ErrorContainer, SignUpContainer, TitleContainer } from './SignUp.styles';
import { createSignUpStartAction } from '../../redux/user/user-actions';
import { connect } from 'react-redux';

class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  render() {
    return (
      <SignUpContainer>
        <TitleContainer>I do not have an account</TitleContainer>
        <span>Sign up with your email and password</span>

        <form onSubmit={ this.handleSubmit }>

          <FormInput handleChange={ this.handleChange }
                     label="Display name"
                     type="text"
                     name="displayName"
                     value={ this.state.displayName }
                     required />

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

          <FormInput handleChange={ this.handleChange }
                     label="Confirm password"
                     type="password"
                     name="confirmPassword"
                     value={ this.state.confirmPassword }
                     required />

          {
            this.state.error ?
              <ErrorContainer>{ this.state.error }</ErrorContainer> :
              null
          }

          <ButtonContainer type="submit">Sign Up</ButtonContainer>
        </form>

      </SignUpContainer>
    );
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signupStart } = this.props;

    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
      return;
    }

    signupStart({ email, password, displayName });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

}

const mapDispatchToProps = dispatch => ({
  signupStart: credentials => dispatch(createSignUpStartAction(credentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
