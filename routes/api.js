// Updated api route to include new const
const express = require("express");
const router = express.Router();
const userCnt1 = require("../controllers/accountController.js");

// Updated api route to include methods
router.get("/", userCnt1.findAll);
router.post("/", userCnt1.create);
router.put("/", userCnt1.update);
router.delete("/", userCnt1.delete);

module.exports = router;

// var express = require('express');
// var router = express.Router();


// router.get('/', function(req, res, next) {
//   res.send('get endpoint hit!');
// });

// router.post('/userData', function(req, res, next) {
//     console.log(req.body);
//     userData = req.body; 
//     // cant do this document.getElementByID("results").innerText = req.body;
//     res.status(200).redirect('/account.html');

// });


// module.exports = router;

