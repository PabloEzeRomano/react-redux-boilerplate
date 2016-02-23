var
  Sequelize = require('sequelize'),
  sequelize = require('../database/database-connection');

var Movie = sequelize.define('Movie', {
  title : Sequelize.STRING,
  director : Sequelize.STRING,
  cast : Sequelize.STRING,
  duration : Sequelize.INTEGER,
  year : Sequelize.INTEGER
}, {
  timestamps : true
});

module.exports = Movie;

