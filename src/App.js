import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInPage from './pages/SignInPage/SignInPage.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={ true } path="/" component={ HomePage } />
        <Route exact={ true } path="/shop" component={ ShopPage } />
        <Route exact={ true } path="/sign-in" component={ SignInPage } />
      </Switch>
    </div>
  );
}

export default App;
