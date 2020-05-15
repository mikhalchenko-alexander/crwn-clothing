import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import HatsPage from './pages/HatsPage/HatsPage.component';

function App() {
  return (
    <div>
      <Route exact={ true } path="/" component={ HomePage } />
      <Route exact={ true } path="/shop/hats" component={ HatsPage } />
    </div>
  );
}

export default App;
