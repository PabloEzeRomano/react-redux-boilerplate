'use strict';

var
  jwt     = require('jsonwebtoken'),
  secret  = require('../config/passport').secret;

module.exports = (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          error : {
            message : 'Invalid Token'
          }
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });

  } else {
    return res.status(401).json({
      error : {
        message : 'No Token'
      }
    });
  }

};

