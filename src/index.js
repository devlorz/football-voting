import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import configureStore from './store';
import { Provider } from 'react-redux';

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
