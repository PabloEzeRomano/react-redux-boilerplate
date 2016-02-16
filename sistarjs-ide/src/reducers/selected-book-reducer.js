'use strict';

import {SELECT_BOOK, BOOK_DELETE_SUCCESS} from '../actions/books_actions';

const INITIAL_STATE = null;

function selectedBookReducer (state = INITIAL_STATE, action) {

  if (!action) {
    return state;
  }

  switch (action.type) {

    case BOOK_DELETE_SUCCESS :
      if (action.payload.id === state.id)
        return null;
      else
        return state;
      break;

    case SELECT_BOOK :
      return action.payload.book;
      break;

    default :
      return state;
  }

}

export default selectedBookReducer;