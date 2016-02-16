'use strict';

var
  BaseController  = require('./base_controller'),
  User            = require('../model/user');

class UsersController extends BaseController {

  constructor () {
    super(BaseController);
  }

  static authenticate (username, password, cb) {

    return User.authenticate(username, password, cb);
  }

  static getAll (criteria) {

    criteria = criteria ? criteria : {};

    return User.find({
      where : criteria
    });
  }

  static getOne (criteria) {

    criteria = criteria ? criteria : {};

    return User.findOne({
      where : criteria
    });
  }

  static getById (id) {
    return User.findById(id);
  }

}

module.exports = UsersController;