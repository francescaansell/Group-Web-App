var express = require('express');
var router = express.Router();

console.log("api.js");


router.get('/', function(req, res, next) {
  res.send('get endpoint hit!');
});

router.get("/userData", function(req, res, next){
  res.send("get userData endpoint hit");
});

router.post('/userData', function(req, res, next) {
    console.log(req.body.firstName);
    //res.send("posted");
    res.redirect("/survey1.html");

    var firstName = req.body.firstName;

    var user = { "firstName" : firstName, "lastName": req.body.lastName };
    console.log(user);

    //res.send(user);

});

module.exports = router;

