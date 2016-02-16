/*
  User model
 */

var
  Sequelize = require('sequelize'),
  sequelize = require('../database/database_connection'),
  bcrypt    = require('bcrypt');

var User = sequelize.define('User', {
  username  : { type : Sequelize.STRING, unique : true },
  name      : Sequelize.STRING,
  password  : Sequelize.STRING,
  token     : Sequelize.STRING
}, {
  timestamps : true,
  hooks : {
    beforeCreate : (user, options, cb) => {
      bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        return cb(null, options);
      });
    }
  },
  instanceMethods : {
    comparePassword : function (candidatePassword, cb) {
      bcrypt.compare(candidatePassword, this.getDataValue('password'), (err, isMatch) => {
        if (err) {
          cb(err);
        } else {
          cb(null, isMatch);
        }
      });
    }
  }
});

module.exports = User;

