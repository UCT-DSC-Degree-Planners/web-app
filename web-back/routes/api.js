//this file is for handling http requests
//routes are used for that

const express = require('express');
const Users = require("../models/user");

var router = express.Router();


//add a new user to the db, and log them in automatically
router.post("/createProfile", (req, res, next)=>{
    //creates and saves a user to the db, according to the User model
    var user = req.body;
    // assigning a token to this user
    user.token = Math.random();
    // logging in
    user.successfullLogin = true;

    Users.create(req.body).then(newUser=>{
        res.send(newUser);  //something needs to be sent
    }).catch(next);  //to move to the next middleware, which is the error handler
});


//update info of an existing user in the db. 
// router.put("/editProfile/:id", (req, res, next)=>{
// });

// authorizing the user
router.post("/auth", (req, res)=>{
    // Trying to find a user with the given name
    Users.findOne({name: req.body.name}, (err, user)=>{
        var userDetails; // this cariable will be sent to the client
        if(user){ // if a user with that username was found in the Users collection
            // if the user is already logged in (token = 0), this message will be sent, and that's the end of the request
            if(req.body.token !== 0){
                res.send("Already logged in");
            }

            // if the password of the retrieved user is the same as the one posted on the frontend
            if (req.body.password === user.password){
                userDetails = {
                    name: user.name, 
                    successfullLogin: true,
                    token: Math.random()  // the token will be this random number
                }
            }    
            else {
                userDetails = {
                    name: user.name, 
                    successfullLogin: false
                }
            }
        }
        // if the user is not found in the users collection
        else{
            userDetails = {
                name: null, 
                successfullLogin: false,
            }
        }
        // notice that the password is not sent to the client
        res.send(JSON.stringify(userDetails));  
    });

});


module.exports = router;