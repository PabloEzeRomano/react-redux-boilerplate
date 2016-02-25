/*
 User model
 */

var
  Sequelize = require('sequelize'),
  sequelize = require('../database/database-connection');

var Book = sequelize.define('Book', {
  title : Sequelize.STRING,
  author : Sequelize.STRING,
  pages : Sequelize.INTEGER
}, {
  timestamps : true
});

module.exports = Book;