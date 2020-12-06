var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api'); 

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {extensions: 'html'}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

//from mongo assignments
app.post("/create", function(req, res) {
    // Create a user from the submitted form data
    var aco = new Account({
      username: req.body.username,
      password: req.body.password,
     
   });
  
   stu.save(function(err, stu) {
      if (err) {
         res.status(400).send(err);
      } 
      else {
         res.send("Account was saved.");
      }
   });
  });
  module.exports = app;
  
module.exports = app;




