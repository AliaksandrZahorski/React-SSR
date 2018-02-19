import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import reducer from './app/reducers';
import App from './app/App';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const store = createStore(reducer);
  const appString = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(store)
  }));
});

server.listen(8080);
console.log('listening');
