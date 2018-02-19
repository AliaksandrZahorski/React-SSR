import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';
import App from './components/App';

import './browser.css';
import './components/Blog/Blog.css';
import './components/App.css';

const preloadedState = window.__APP_INITIAL_STATE__
delete window.__APP_INITIAL_STATE__
const store = createStore(reducer, preloadedState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
