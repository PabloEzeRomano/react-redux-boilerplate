'use strict';

var
  BaseController = require('./base-controller'),
  Book = require('../model/book');

class BooksController extends BaseController {

  constructor () {
    super(BaseController);
  }

  static findAll (criteria) {

    criteria = criteria ? criteria : {};

    return Book.findAll(criteria);

  }

  static findOne (criteria) {

    criteria = criteria ? criteria : {};

    return Book.findOne(criteria);

  }

  static findById (id) {

    return Book.findById(id);


  }

  static create (book) {

    return Book.create(book);

  }

  static update (book, criteria) {

    criteria = criteria ? criteria : {};

    return Book.update(book, criteria);

  }

  static destroy (criteria) {

    criteria = criteria ? criteria : {};

    return Book.destroy(criteria);

  }

}

module.exports = BooksController;