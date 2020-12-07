var express = require('express');
const app = require('../app');
var router = express.Router();

// var mySchema = mongoose.Schema({
//   username: String,
//   password: String
// });

// var userModel = mongoose.model('users', mySchema);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.put('update/:users', function(req,res){
//   var username = req.params.username;
//   userModel.findOne({_username: username}, function(err, foundObject){
//     if(err){
//       console.log(err);
//       res.status(500).send();
//     }
//     else{
//       if(!foundObject) {
//         res.send(404).send()
//       }
//       else{
//         if(req.body.username){
//           foundObject.username = req.body.username;
//         }

//         if(req.body.password)
//           foundObject.password = req.body.password;
//       }

//       foundObject.save(function(err, updatedObject){
//         if(err) {
//           console.log(err);
//           res.status(500).send();
//         }
//         else{
//           res.send(updatedObject);
//         }
//       });
//     }
//   });
  
// });

module.exports = router;
