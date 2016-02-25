'use strict';

import {SELECT_MOVIE, MOVIE_DELETE_SUCCESS} from '../actions/movies_actions';

const INITIAL_STATE = null;

function selectedMovieReducer (state = INITIAL_STATE, action) {

  if (!action) {
    return state;
  }

  switch (action.type) {

    case MOVIE_DELETE_SUCCESS :
      if (action.payload.id === state.id)
        return null;
      else
        return state;
      break;

    case SELECT_MOVIE :
      return action.payload.movie;
      break;

    default :
      return state;
  }

}

export default selectedMovieReducer;