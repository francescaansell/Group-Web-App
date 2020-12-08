var express = require('express');
var router = express.Router();

console.log("api.js");


router.get('/', function(req, res, next) {
  res.send('get endpoint hit!');
});

router.get("/userData", function(req, res, next){
  res.send("get userData endpoint hit");
});

router.post('/userData' , function(req, res, next) {
    console.log(req.body);
    //res.send("posted");
    res.redirect("/survey1.html");
});

module.exports = router;

