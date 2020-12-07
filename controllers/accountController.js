// Class 26 Video
// Created Controller Class
const userAccount = require("../models/userAccount");

// Create Function
exports.create = (req, res) => {
    console.log("Create was called");

    // validation request
    if(!req.body.username || !req.body.password){
        return res.status(400).send({
            message: "Required field. Enter Data"
        });
    }

    // Creates the new user
    const user = new userAccount({
        username: req.body.username,
        password: req.body.password,
    });

    console.log("New User Account: " + user);
    
    // Saves the user to the database
    user
        .save()
        .then((data) =>{
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error occurred while creating an account.",
            });
        });
};

exports.findAll = (req, res) => {
    userAccount.find()
        .then((user) =>{
            console.log("findAll called.");
            res.status(200).send(account);
        })
        .catch((err) =>{
            res.status(500).send({
                message: err.message || "Error Occurred",
            });
        });
};

// Update Function
exports.update = (req, res) => {
    userAccount.get();

};

// Delete Function
exports.delete = (req,res) => {
    userAccount.get();

};