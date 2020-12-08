var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Zy Books //Class 25 Video
var bodyParser = require("body-parser");
var Account = require("./models/userAccount");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api'); 

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Zy Books //Class 25 Video
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public'), {extensions: 'html'}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

//Zy Books //Class 25 Video 

//Working 


app.post("/account", function(req, res) {
    // Create a user from the submitted form data

    var account = new Account({
      username: req.body.username,
      password: req.body.password,
      
     
   });
  
   account.save(function(err, account) {
      if (err) {
         res.status(400).send(err);
      
      } 
      else {
         res.send("Account was saved.");

        
      }
   });

   res.status(200).redirect('/account.html');

  });

//https://learn.zybooks.com/zybook/PSUIST256Fall2020/chapter/11/section/8?content_resource_id=41953012

//No errors but doesn't delete anything 
app.delete("/account", function(req, res) {
    console.log("Delete");
    console.log("");
     
    
    Account.remove( {username: req.body.username, password: req.body.password} , function(err) {
        if (err) {
            res.status(400).send(err);
        } 
        else {
           res.send("Account was deleted");
        }
    }); 

    res.status(200).redirect("/account.html")
});

//No errors but doesnt update anything
app.put("/account", function(req, res){

    Account.update( {username: req.body.username, password: req.body.oldPassword},  {username: req.body.username, password: req.body.newPassword } , function(err) {
        if (err) {
            res.status(400).send(err);
        } 
        else {
           res.send("Account was updated");
        }
    }); 

    //res.status(200).redirect("/account.html")
});




module.exports = app;




