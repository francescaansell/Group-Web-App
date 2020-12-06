// models/student.js
var db = require("../db");

var Student = db.model("Account", {
    username:       { type: String, min: 4, max: 8 },
    password: { type: password, min: 4, max: 16},
  
});

module.exports = Account;