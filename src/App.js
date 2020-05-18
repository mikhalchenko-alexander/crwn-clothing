import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInPage from './pages/SignInPage/SignInPage.component';
import { auth } from './firebase/firebase.utils';
import { saveUser } from './firebase/user-repo';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({ currentUser: user });
      if (user) {
        await saveUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact={ true } path="/" component={ HomePage } />
          <Route exact={ true } path="/shop" component={ ShopPage } />
          <Route exact={ true } path="/sign-in" component={ SignInPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
