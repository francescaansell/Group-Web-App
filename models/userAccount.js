// Class 26 Video
const mongoose = require("../db");
const schema = new mongoose.Schema(
    {
    username: {
        desc: "The account username.",
        trim: true,
        type: String,
        unique: true,
        index: true,
        required: true,

    },
    password: {
        desc: "The account password.",
        trim: true,
        type: String,
        unique: true,
        required: true,
    }  
}
);

module.exports = mongoose.model("account", schema);


//Zy books //Class 25 Video
// var db = require("../db");

// var Account = db.model("Account", {
//     username: { type: String, min: 4, max: 8 },
//     password: { type: String, min: 4, max: 16},
  
// });

// module.exports = Account;

