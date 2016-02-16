'use strict';

var
  User = require('./user'),
  Book = require('./book');

var
  user    = null;

User.sync()
  .then(userCount);

function userCount () {
  User.count().then(seedUser);
}

function seedUser (count) {
  if (count === 0) {
    User.create({
        name      : 'Administrator',
        username  : 'admin',
        password  : 'admin'
      })
      .then(function (u) {
        user = u;
        Book.sync()
          .then(bookCount)
      });
  }
}

function bookCount () {
  Book.count()
    .then(seedBooks);
}

function seedBooks () {
  Book.bulkCreate([
    {
      title : 'Derp in Derpingtown',
      author : 'Derpina Derp',
      pages : 200
    },
    {
      title : 'Otter Folksy Tale',
      author : 'Otter Blackwater',
      pages : 553
    },
    {
      title : 'Le new adventures of le wild',
      author : 'Le Wild Author',
      pages : 333
    }
  ]);
}

module.exports = {
  User,
  Book
};