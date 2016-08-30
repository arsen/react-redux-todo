import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import todoApp from './reducers';

import styles from './index.css';

let store = createStore(todoApp);

injectTapEventPlugin();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);