'use strict';

var
  express = require('express'),
  Book = require('../model/book');

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

    Book.findAll(criteria)
      .then(books => {
        res.json(books);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post('/books', (req, res) => {

    Book.create(req.body)
      .then(book => {
        res.json(book);
      })
      .catch(err => {
        res.status(500).json(err);
      });

  })
  .put('/books/:id', (req, res) => {

    Book.update(req.body,{
        where : {
          id : req.params.id
        }
      })
      .then(rows => {
        Book.find({ where : { id : req.params.id }})
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
    Book.destroy({
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
