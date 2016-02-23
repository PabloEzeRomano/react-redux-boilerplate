'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Index from './components/index-route';
import Ace from './components/ace';

const Books = () => {
  return (
    <div>
      <h4>Some Books!</h4>
    </div>
  )
};

const Movies = () => {
  return (
    <div>
      <h4>Whatch Movies, Books Suck!!</h4>
    </div>
  )
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="books" components={Books} />
    <Route path="movies" components={Movies}/>
    <Route path="ace" components={Ace} />
  </Route>
);