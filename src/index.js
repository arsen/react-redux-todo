import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';


const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    });
    throw err;
  }
};


import App from './components/App';
import todoApp from './reducers';

import styles from './index.css';

let store = createStore(todoApp, applyMiddleware(thunkMiddleware, createLogger(), crashReporter));

injectTapEventPlugin();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);