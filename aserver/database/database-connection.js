var
  Sequelize       = require('sequelize'),
  databaseConfig  = require('../config/database')

var sequelize = new Sequelize(databaseConfig.postgresConnectionString);

module.exports = sequelize;