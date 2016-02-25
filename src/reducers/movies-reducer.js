'use strict';

import {
  MOVIE_CREATE_SUCCESS,
  MOVIE_UPDATE_SUCCESS,
  MOVIE_DELETE_SUCCESS
} from '../actions/movies_actions';

const INITIAL_STATE = [];

function moviesReducer (state = INITIAL_STATE, action) {

  if (!action) {
    return state;
  }

  switch (action.type) {

    case MOVIE_CREATE_SUCCESS :
      var movies = state.slice();
      movies.push(action.payload.movie);
      return movies;
      break;

    case MOVIE_UPDATE_SUCCESS :
      return state.map(movie => {
        if (movie.id === action.payload.movie.id) {
          return action.payload.movie;
        } else {
          return movie;
        }
      });
      break;

    case MOVIE_DELETE_SUCCESS :
      return state.filter(movie => {
        return movie.id !== action.payload.id;
      });
      break;

    default :
      return state;
  }

}

export default moviesReducer;