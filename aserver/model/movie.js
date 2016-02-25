var
  Sequelize = require('sequelize'),
  sequelize = require('../database/database-connection'),
  Person    = require('./person.js');

var Movie = sequelize.define('Movie', {
  title : Sequelize.STRING,
  duration : Sequelize.INTEGER,
  year : Sequelize.INTEGER
}, {
  timestamps : true,
});

Movie.belongsTo(Person, {trough : 'director'});
Movie.belongsToMany(Person, {trough : 'cast'});


module.exports = Movie;