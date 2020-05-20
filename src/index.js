import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <ReduxProvider store={ store }>
    <React.StrictMode>
      <HashRouter basename={ process.env.PUBLIC_URL }>
        <App />
      </HashRouter>
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById('root')
);
