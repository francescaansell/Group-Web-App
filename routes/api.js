var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('get endpoint hit!');
});

router.post('/userData', function(req, res, next) {
    console.log(req.body);
    userData = req.body; 
    console.log(userData);
    // cant do this document.getElementByID("results").innerText = req.body;
    //res.status(200).redirect('/account.html');

});


module.exports = router;

