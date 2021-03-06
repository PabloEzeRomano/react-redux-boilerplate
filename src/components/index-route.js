'use strict';

import React, {
  Component
} from 'react';

import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';
import SearchBar from './containers/search-bar';
import BookForm from './containers/book-form';
import MovieList from './containers/movie-list';
import MovieDetail from './containers/movie-detail';
import MovieForm from './containers/movie-form';

class IndexRoute extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Hot React Redux Boilerplate</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8">
            <SearchBar/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-4">
            <BookList/>
          </div>
          <div className="col-xs-8">
            <BookDetail/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <BookForm/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-4">
            <MovieList/>
          </div>
          <div className="col-xs-8">
            <MovieDetail/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <MovieForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexRoute;