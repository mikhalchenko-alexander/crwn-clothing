import React from 'react';

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
          <input onChange={ this.handleChange } type="email" name="email" value={ this.state.email } required />
          <label>Email</label>
          <input onChange={ this.handleChange } type="password" name="password" value={ this.state.password } required />
          <label>Password</label>
          <input type="submit" value="Submit Form"/>
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
