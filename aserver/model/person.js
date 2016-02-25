var
  Sequelize = require('sequelize'),
  sequelize = require('../database/database-connection');

var Person = sequelize.define('Person', {
  name : Sequelize.STRING,
  lastname : Sequelize.STRING
}, {
  timestamps : true
});

module.exports = Person;