'use strict';

var
  User = require('./user'),
  Movie = require('./movie'),
  Book = require('./book'),
  Person = require('./person');

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
          .then(bookCount);
        Movie.sync()
          .then(movieCount);
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

function movieCount () {
  Movie.count()
    .then(seedMovies);
}

function seedMovies () {
  Movie.bulkCreate([
    {
      title: 'La droga es buena',
      director: {
        name: 'Quentin',
        firstname: 'Tarantino'
      },
      cast: [
        {
          name: 'Leonardo',
          lastname: 'Di Caprio'
        },
        {
          name: 'Jhonny',
          lastname: 'Knoxville'
        },
        {
          name: 'Jessica',
          lastname: 'Alba'
        }
      ],
      duration : 120,
      year : 2013
    },
    {
      title: 'Vamoooo REACT!!!!',
      director: {
        name: 'Gabriel',
        firstname: 'Matusevich'
      },
      cast: [
        {
          name: 'Pablo',
          lastname: 'Romano'
        }
      ],
      duration : 98,
      year : 2016
    },
    {
      title: 'Saca tu papa',
      director: {
        name: 'Antonio',
        firstname: 'Gasalla'
      },
      cast: [
        {
          name: 'Ashton',
          lastname: 'Kutcher'
        },
        {
          name: 'Dandy',
          lastname: 'Leviere'
        },
        {
          name: 'Franco',
          lastname: 'Di Luca'
        }
      ],
      duration : 100,
      year : 2014
    }
  ], {
    include: [ Person ]
  });
}

module.exports = {
  User,
  Book,
  Movie,
  Person
};