'use strict';

var
  express = require('express'),
  MoviesController = require('../controller/movies-controller');

var router = express.Router();

router
  .get('/movies', (req, res) => {

    var searchCrit = null;

    if (req.query.title) {
      searchCrit = {
        where : {
          title : {
            $like : '%' + req.query.title + '%'
          }
        }
      }
    } else {
      searchCrit = {};
    }

    MoviesController.findAll(searchCrit)
      .then(movies => {
        res.json(movies);
      })
      .catch(err => {
        res.status(500).json(err);
      });

  })
  .post('/movies', (req, res) => {

    MoviesController.create(req.body)
      .then(movie => {
        res.json(movie);
      })
      .catch(err => {
        res.status(500).json(err);
      });

  })
  .put('/movies/:id', (req, res) => {

    MoviesController.update(req.body, {
        where : {
          id : req.params.id
        }
      })
      .then(rows => {
        MoviesController.findById(req.params.id)
          .then(movie => {
            res.json(movie);
          })
          .catch(err => {
            res.status(500).json(err);
          });
      })
      .catch(err => {
        res.status(500).json(err);
      });

  })
  .delete('/movies/:id', (req, res) => {
    MoviesController.destroy({
        where : {
          id : req.params.id
        }
      })
      .then(rows => {
        res.json(rows);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;
