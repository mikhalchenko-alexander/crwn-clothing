import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <ReduxProvider store={ store }>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={ persistor }>
          <App />
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById('root')
);
