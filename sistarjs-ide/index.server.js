'use strict';

var
  path          = require('path'),
  express       = require('express'),
  app           = express(),
  http          = require('http').Server(app),
  favicon       = require('serve-favicon'),
  cookieParser  = require('cookie-parser'),
  bodyParser    = require('body-parser'),
// Routers
  routerLogin = require('./aserver/routes/login'),
  routerBooks = require('./aserver/routes/books'),
// Middlewares
  middlewareJWT = require('./aserver/middleware/jwt');

/**
 * Models
 */

require('./aserver/model/init');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routerLogin);
app.use('/api', routerBooks);
app.use('/api', middlewareJWT);
// Add all your protected routes after the JWT middleware

app.all('/*', function(req, res) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});