'use strict';

var
  express = require('express'),
  BooksController = require('../controller/books-controller');

var router = express.Router();

/* GET books. */
router
  .get('/books', (req, res) => {

    var criteria = null;

    if (req.query.title) {
      criteria = {
        where : {
          title : {
            $like : '%' + req.query.title + '%'
          }
        }
      }
    } else {
      criteria = {};
    }

    BooksController.findAll(criteria)
      .then(books => {
        res.json(books);
      })
      .catch(err => {
        res.status(500).json(err);
      });

  })
  .post('/books', (req, res) => {

    BooksController.create(req.body)
      .then(book => {
        res.json(book);
      })
      .catch(err => {
        res.status(500).json(err);
      });

  })
  .put('/books/:id', (req, res) => {

    BooksController.update(req.body, {
      where : {
        id : req.params.id
      }
    })
      .then(rows => {
        BooksController.findById(req.params.id)
          .then(book => {
            res.json(book);
          })
          .catch(err => {
            res.status(500).json(err);
          });
      })
      .catch(err => {
        res.status(500).json(err);
      });

  })
  .delete('/books/:id', (req, res) => {
    BooksController.destroy({
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
