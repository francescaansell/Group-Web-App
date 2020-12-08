var express = require('express');
var router = express.Router();


router.get('/api/userData', function(req, res, next) {
  res.send('get endpoint hit!');
});

router.post('/api/userData', function(req, res, next) {
    userData = req.body;
    if (err) {
      res.status(400).send(err);
      console.log("Error");
    } 
    else {
      res.send("Data was posted");
      console.log(req.body);
    }
    
    //res.status(200).redirect('/account.html');

});


module.exports = router;

