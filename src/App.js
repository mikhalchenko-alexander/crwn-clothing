import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';

function App() {
  return (
    <div>
      <Route exact={ true } path="/" component={ HomePage } />
      <Route exact={ true } path="/shop" component={ ShopPage } />
    </div>
  );
}

export default App;
