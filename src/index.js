import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App7 from './App7';
import App8 from './App8';
import App9 from './App9';
import App10 from './App10';
import App11 from './App11';
import App12 from './App12';
import App13 from './App13';
import App14 from './App14';
import Appi from './Appi';
import App20 from './App20'
import ErrorBoundary from './ErrorBoundary';
import { Provider } from 'react-redux';
import store from './store'
import Commerce from './Commerce';
import App25 from './App25';
import App6 from './App6';
import App30 from './App30'
import Main from './Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Main />
    </Provider>
  </ErrorBoundary>
);


