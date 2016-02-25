'use strict';

import {combineReducers} from 'redux';
import booksReducer from './books_reducer';
import selectedBookReducer from './selected-book-reducer';
import selectedMovieReducer from './selected-movie-reducer';
import moviesReducer from './movies-reducer'

const combinedReducers = combineReducers({
  books : booksReducer,
  selectedBook : selectedBookReducer,
  movies : moviesReducer,
  selectedMovie : selectedMovieReducer
});

export default combinedReducers;