'use strict';

var
  BaseController = require('./base-controller'),
  Movie = require('../model/movie');

class MovieController extends BaseController {

  constructor () {
    super(BaseController);
  }

  static findAll (searchCrit) {

    searchCrit = searchCrit ? searchCrit : {};

    return Movie.findAll(searchCrit);

  }

  static findOne (searchCrit) {

    searchCrit = searchCrit ? searchCrit : {};

    return Movie.findOne(searchCrit);

  }

  static findById (id) {

    return Movie.findById(id);


  }

  static create (movie) {

    return Movie.create(movie);

  }

  static update (movie, searchCrit) {

    searchCrit = searchCrit ? searchCrit : {};

    return Movie.update(movie, searchCrit);

  }

  static destroy (searchCrit) {

    searchCrit = searchCrit ? searchCrit : {};

    return Movie.destroy(searchCrit);

  }

}

module.exports = MovieController;