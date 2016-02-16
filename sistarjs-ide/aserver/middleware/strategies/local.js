'use strict';

var
  passport      = require('passport'),
  LocalStrategy = require('passport-local'),
  User          = require('../../model/user');

module.exports = () => {
  passport.use('local', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password'
  },
    (username, password, done) => {

      User.findOne({
          where : {
            username : username
          }
        })
        .then((user) => {

          if (!user) {
            return done(null, null);
          }

          user.comparePassword(password, (err, isMatch) => {

            if (err) {
              return done(err, null);
            } else {

              if (isMatch) {

                user.password = null;
                user.token    = null;

                return done(null, user);
              } else {
                return done({
                  message : 'Invalid Credentials'
                }, null);
              }

            }
          });

        })
        .catch((err) => {
          return done(err);
        });
    }
  ));
};
