'use strict';

import {combineReducers} from 'redux';
import booksReducer from './books_reducer';
import selectedBookReducer from './selected-book-reducer';

const combinedReducers = combineReducers({
  books : booksReducer,
  selectedBook : selectedBookReducer
});

export default combinedReducers;