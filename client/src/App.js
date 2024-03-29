import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user-selectors';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.component';
import { StyledApp } from './App.styles';
import { createCheckUserSessionAction } from './redux/user/user-actions';

const App = () => {

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createCheckUserSessionAction());
  }, [dispatch]);

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
                 currentUser ?
                   (<Redirect to="/" />) :
                   (<SignInSignUpPage />)
               } />
      </Switch>
    </StyledApp>
  );
};

export default App;
