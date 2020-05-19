import React from 'react';
import './SignUp.styles.scss'

import FormInput from '../_forms/FormInput/FormInput.component';
import Button from '../Button/Button.component';
import { saveUser } from '../../firebase/user-repo'
import { auth } from '../../firebase/firebase.utils';

class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  render() {
    return (
      <div className='sign-up'>
        <h2>I do not have an account</h2>
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
              <span className='error'>{this.state.error}</span> :
              null
          }

          <div className="buttons">
            <Button type="submit">Sign Up</Button>
          </div>
        </form>

      </div>
    );
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({error: 'Passwords do not match'})
      return
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await saveUser(user, {displayName})
      this.clearForm();
    } catch (error) {
      console.error('Error creating user: ', error)
    }

  };

  clearForm = () => {
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

}

export default SignUp;
