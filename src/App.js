import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage.component';
import { auth } from './firebase/firebase-utils';
import { saveUser } from './firebase/user-repo';
import { connect } from 'react-redux';
import { createSetCurrentUserAction } from './redux/user/user-actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.component';
import { AppGlobalStyles } from './App.styles';

class App extends React.Component {

  unsubscribeFromAuthFunction = null;
  unsubscribeFromSnapshotFunction = null;

  componentDidMount() {
    this.unsubscribeFromAuthFunction = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await saveUser(userAuth);
        this.unsubscribeFromSnapshotFunction = userRef.onSnapshot(this.setUserFromSnapshot);
      } else {
        this.clearUser();
      }
    });
  }

  clearUser = () => {
    this.props.setCurrentUser(null);
  };

  setUserFromSnapshot = (userSnapshot) => {
    this.props.setCurrentUser({
      id: userSnapshot.id,
      ...userSnapshot.data()
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapshot();
  }

  unsubscribeFromSnapshot = () => {
    if (this.unsubscribeFromSnapshotFunction) {
      this.unsubscribeFromSnapshotFunction();
      this.unsubscribeFromSnapshotFunction = null;
    }
  };

  unsubscribeFromAuth = () => {
    if (this.unsubscribeFromAuthFunction) {
      this.unsubscribeFromAuthFunction();
      this.unsubscribeFromAuthFunction = null;
    }
  };

  render() {
    return (
      <div>
        <AppGlobalStyles />
        <Header />
        <Switch>
          <Route exact={ true } path="/" component={ HomePage } />
          <Route path="/shop" component={ ShopPage } />
          <Route exact={ true } path="/checkout" component={ CheckoutPage } />
          <Route exact={ true }
                 path="/sign-in"
                 render={ () =>
                   this.props.currentUser ?
                     (<Redirect to="/" />) :
                     (<SignInSignUpPage />)
                 } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(createSetCurrentUserAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
