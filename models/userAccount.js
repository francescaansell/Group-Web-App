//Zy books //Class 25 Video

var db = require("../db");

var Account = db.model("Account", {
    username: { type: String, min: 4, max: 8 },
    password: { type: String, min: 4, max: 16},
  
});

module.exports = Account;

