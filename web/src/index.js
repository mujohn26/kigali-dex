import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import BigNumber from 'bignumber.js';

BigNumber.config({ EXPONENTIAL_AT: 1000 });

export const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
