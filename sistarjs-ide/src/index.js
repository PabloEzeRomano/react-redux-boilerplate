/**
 * Set up project dependencies and redux store with middlewares
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import BootstrapCSS from '../node_modules/bootstrap/dist/js/bootstrap.min';
import BootstrapJS from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './components/app';
import reducers from './reducers';

// uncomment and create the stateTransformer if using ImmutableJS for better logging experience ;)
const logger = createLogger({
  level: 'info',
  collapsed: true
  // stateTransformer: stateTransformer
});

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>,
  document.getElementById('app')
);