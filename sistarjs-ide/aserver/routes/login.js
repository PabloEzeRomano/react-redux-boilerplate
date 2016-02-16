'use strict';

var
  express         = require('express'),
  jwt             = require('jsonwebtoken'),
  secret          = require('../config/passport').secret,
  passport        = require('passport'),
  local           = require('../middleware/strategies/local')();

var router = express.Router();

/* GET users. */
router
  .post('/authenticate', (req, res, next) => {

    passport.authenticate('local', function (err, user) {

      if (err) {
        return res.status(500).json({
          error : {
            message : err
          }
        });
      }

      if (!user) {
        return res.status(404).json({
          error : {
            message : 'User Not found'
          }
        });
      }

      let token = jwt.sign(user.dataValues, secret, {
        expiresInMinutes : 1440 // 24 hours
      });

      return res.json({
        user,
        token
      });

    })(req, res, next);
  });

module.exports = router;
