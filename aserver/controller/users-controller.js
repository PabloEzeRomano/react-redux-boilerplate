'use strict';

var
  BaseController = require('./base-controller'),
  User = require('../model/user');

class UsersController extends BaseController {

  constructor () {
    super(BaseController);
  }

  static authenticate (username, password, cb) {

    return User.authenticate(username, password, cb);
  }

  static findAll (criteria) {

    criteria = criteria ? criteria : {};

    return User.find(criteria);
  }

  static findOne (criteria) {

    criteria = criteria ? criteria : {};

    return User.findOne(criteria);
  }

  static findById (id) {
    return User.findById(id);
  }

}

module.exports = UsersController;