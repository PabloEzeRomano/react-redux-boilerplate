'use strict';

import {
  READING_BOOKS,
  BOOK_CREATE_SUCCESS,
  BOOKS_READ_SUCCESS,
  BOOK_UPDATE_SUCCESS,
  BOOK_DELETE_SUCCESS
} from '../actions/books_actions';

const INITIAL_STATE = [];

function booksReducer (state = INITIAL_STATE, action) {

  if (!action) {
    return state;
  }

  switch (action.type) {

    case BOOK_CREATE_SUCCESS :
      var books = state.slice();
      books.push(action.payload.book);
      return books;
      break;

    case BOOKS_READ_SUCCESS :
      return action.payload.books;
      break;

    case BOOK_UPDATE_SUCCESS :
      return state.map(book => {
        if (book.id === action.payload.book.id) {
          return action.payload.book;
        } else {
          return book;
        }
      });
      break;

    case BOOK_DELETE_SUCCESS :
      return state.filter(book => {
        return book.id !== action.payload.id;
      });
      break;

    default :
      return state;
  }

}

export default booksReducer;