import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.component';
import { StyledApp } from './App.styles';

class App extends React.Component {
  render() {
    return (
      <StyledApp>
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
      </StyledApp>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
