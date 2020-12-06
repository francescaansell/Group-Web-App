//Zy Books  // Class Video 25
var mongoose = require("mongoose");

//change so that is points to the cluster
//mongoose.connect("mongodb://localhost/mydb");

mongoose.connect("mongodb+srv://fla5029:Febuary2819@etherapy.t8qcl.mongodb.net/mydb?retryWrites=true&w=majority");

module.exports = mongoose;

