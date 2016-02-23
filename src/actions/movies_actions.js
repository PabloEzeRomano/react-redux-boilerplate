'use strict';

import axios from 'axios';

const moviesUrl = '/api/movies';

export const SELECT_MOVIE = 'SELECT_MOVIE';
export const CREATING_MOVIE = 'CREATING_MOVIE';
export const MOVIE_CREATE_SUCCESS = 'MOVIE_CREATE_SUCCESS';
export const MOVIE_CREATE_ERROR = 'MOVIE_CREATE_ERROR';
export const UPDATING_MOVIE = 'UPDATING_MOVIE';
export const MOVIE_UPDATE_SUCCESS = 'MOVIE_UPDATE_SUCCESS';
export const MOVIE_UPDATE_ERROR = 'MOVIE_UPDATE_ERROR';
export const DELETING_MOVIE = 'DELETING_MOVIE';
export const MOVIE_DELETE_SUCCESS = 'MOVIE_DELETE_SUCCESS';
export const MOVIE_DELETE_ERROR = 'MOVIE_DELETE_ERROR';

export function selectMovie (movie) {
  return {
    type : SELECT_MOVIE,
    payload : {
      movie
    }
  }
}

export function _creatingMovie () {
  return {
    type : CREATING_MOVIE,
    payload : null
  }
}

export function movieCreateSuccess (movie) {
  return {
    type : MOVIE_CREATE_SUCCESS,
    payload : {
      movie
    }
  }
}

export function moviesCreateError (err) {
  return {
    type : MOVIE_CREATE_ERROR,
    payload : {
      err
    }
  }
}

export function _updatingMovie () {
  return {
    type : UPDATING_MOVIE,
    payload :null
  }
}

export function movieUpdateSuccess (movie) {
  return {
    type : MOVIE_UPDATE_SUCCESS,
    payload : {
      movie
    }
  }
}

export function movieUpdateError (err) {
  return {
    type : MOVIE_UPDATE_ERROR,
    payload : {
      err
    }
  }
}

export function _deletingMovie () {
  return {
    type : DELETING_MOVIE,
    payload :null
  }
}

export function movieDeleteSuccess (id) {
  return {
    type : MOVIE_DELETE_SUCCESS,
    payload : {
      id
    }
  }
}

export function movieDeleteError (err) {
  return {
    type : MOVIE_DELETE_ERROR,
    payload : {
      err
    }
  }
}

function _createMovie (movie) {
  return axios.post(moviesUrl, {
    title  : movie.title,
    author : movie.author,
    pages : movie.pages
  });
}

function _updateMovie (movie) {
  return axios.put(moviesUrl + '/' + movie.id, {
    title : movie.title,
    author : movie.author,
    pages : movie.pages
  });
}

function _deleteMovie (id) {
  return axios.delete(moviesUrl + '/' + id);
}

export function createMovie (movie) {
  return dispatch => {

    dispatch(_creatingMovie());

    return _createMovie(movie)
      .then(response => {
        dispatch(movieCreateSuccess(response.data));
      })
      .catch(err => {
        dispatch(moviesCreateError(err));
      });
  }
}

export function updateMovie (movie) {
  return dispatch => {

    dispatch(_updatingMovie());

    return _updateMovie(movie)
      .then(response => {
        dispatch(movieUpdateSuccess(response.data));
      })
      .catch(err => {
        dispatch(movieUpdateError(err));
      });
  }
}

export function deleteMovie (id) {
  return dispatch => {

    dispatch(_deletingMovie());

    return _deleteMovie(id)
      .then(response => {
        dispatch(movieDeleteSuccess(id));
      })
      .catch(err => {
        dispatch(movieDeleteError(err));
      });
  }
}