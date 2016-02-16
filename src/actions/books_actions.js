'use strict';

import axios from 'axios';

const booksUrl = '/api/books';

export const SELECT_BOOK = 'SELECT_BOOK';
export const READING_BOOKS = 'READING_BOOKS';
export const BOOKS_READ_SUCCESS = 'BOOKS_READ_SUCCESS';
export const BOOKS_READ_ERROR = 'BOOKS_READ_ERROR';
export const CREATING_BOOK = 'CREATING_BOOK';
export const BOOK_CREATE_SUCCESS = 'BOOK_CREATE_SUCCESS';
export const BOOK_CREATE_ERROR = 'BOOK_CREATE_ERROR';
export const UPDATING_BOOK = 'UPDATING_BOOK';
export const BOOK_UPDATE_SUCCESS = 'BOOK_UPDATE_SUCCESS';
export const BOOK_UPDATE_ERROR = 'BOOK_UPDATE_ERROR';
export const DELETING_BOOK = 'DELETING_BOOK';
export const BOOK_DELETE_SUCCESS = 'BOOK_DELETE_SUCCESS';
export const BOOK_DELETE_ERROR = 'BOOK_DELETE_ERROR';

export function selectBook (book) {
  return {
    type : SELECT_BOOK,
    payload : {
      book
    }
  }
}

export function _creatingBook () {
  return {
    type : CREATING_BOOK,
    payload : null
  }
}

export function bookCreateSuccess (book) {
  return {
    type : BOOK_CREATE_SUCCESS,
    payload : {
      book
    }
  }
}

export function booksCreateError (err) {
  return {
    type : BOOK_CREATE_ERROR,
    payload : {
      err
    }
  }
}

export function _readingBooks () {
  return {
    type : READING_BOOKS,
    payload : null
  }
}

export function booksReadSuccess (books) {
  return {
    type : BOOKS_READ_SUCCESS,
    payload : {
      books
    }
  }
}

export function booksReadError (err) {
  return {
    type : BOOKS_READ_ERROR,
    payload : {
      err
    }
  }
}

export function _updatingBook () {
  return {
    type : UPDATING_BOOK,
    payload :null
  }
}

export function bookUpdateSuccess (book) {
  return {
    type : BOOK_UPDATE_SUCCESS,
    payload : {
      book
    }
  }
}

export function bookUpdateError (err) {
  return {
    type : BOOK_UPDATE_ERROR,
    payload : {
      err
    }
  }
}

export function _deletingBook () {
  return {
    type : DELETING_BOOK,
    payload :null
  }
}

export function bookDeleteSuccess (id) {
  return {
    type : BOOK_DELETE_SUCCESS,
    payload : {
      id
    }
  }
}

export function bookDeleteError (err) {
  return {
    type : BOOK_DELETE_ERROR,
    payload : {
      err
    }
  }
}

function _createBook (book) {
  return axios.post(booksUrl, {
    title  : book.title,
    author : book.author,
    pages : book.pages
  });
}

function _readBooks (title) {
  return axios.get(booksUrl, {
    params : {
      title : title
    }
  });
}

function _updateBook (book) {
  return axios.put(booksUrl + '/' + book.id, {
    title : book.title,
    author : book.author,
    pages : book.pages
  });
}

function _deleteBook (id) {
  return axios.delete(booksUrl + '/' + id);
}

export function createBook (book) {
  return dispatch => {

    dispatch(_creatingBook());

    return _createBook(book)
      .then(response => {
        dispatch(bookCreateSuccess(response.data));
      })
      .catch(err => {
        dispatch(booksCreateError(err));
      });
  }
}

export function readBooks (title) {
  return dispatch => {

    dispatch(_readingBooks('READ'));

    return _readBooks(title)
      .then(response => {
        dispatch(booksReadSuccess(response.data));
      })
      .catch(err => {
        dispatch(booksReadError(err));
      });
  }
}

export function updateBook (book) {
  return dispatch => {

    dispatch(_updatingBook());

    return _updateBook(book)
      .then(response => {
        dispatch(bookUpdateSuccess(response.data));
      })
      .catch(err => {
        dispatch(bookUpdateError(err));
      });
  }
}

export function deleteBook (id) {
  return dispatch => {

    dispatch(_deletingBook());

    return _deleteBook(id)
      .then(response => {
        dispatch(bookDeleteSuccess(id));
      })
      .catch(err => {
        dispatch(bookDeleteError(err));
      });
  }
}