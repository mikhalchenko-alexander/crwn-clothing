import React from 'react';
import FormInput from '../_forms/FormInput/FormInput.component';
import './SignIn.styles.scss';
import Button from '../Button/Button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import GoogleSignInButton from '../GoogleSignInButton/GoogleSignInButton.component';

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
      <div className="sign-in">
        <h2>I already have an account</h2>
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

          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <GoogleSignInButton onClick={ signInWithGoogle } />
          </div>
        </form>
      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

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

export default SignIn;
