//this file is for handling http requests
//routes are used for that

const express = require('express');
const Users = require("../models/user");

var router = express.Router();


//add a new developer to the db
router.post("/createProfile", (req, res, next)=>{
    //creates and saves a user to the db
    Users.create(req.body).then(newUser=>{
        res.send(newUser);//something needs to be sent
    }).catch(next);//to move to the next middleware, which is the error handler
});


//update info of an existing developer in the db. 
// router.put("/editProfile/:id", (req, res, next)=>{
// });

// authorizing the user
router.post("/auth", (req, res)=>{
    Users.findOne({name: req.body.name}, (err, user)=>{
        var userDetails; // this will be sent to the client
        if(user){ // if a user with that username was found in the Users collection
            // if the password of the retrieved user is the same as the one posted on the frontend
            if (req.body.password === user.password){
                userDetails = {
                    name: user.name, 
                    successfullLogin: true
                }
            }    
            else {
                userDetails = {
                    name: user.name, 
                    successfullLogin: false
                }
            }
        }
        // if the user is not found in the Admins collection
        else{
            userDetails = {
                name: null, 
                successfullLogin: false
            }
        }
        // notice that the password is not sent to the client
        res.send(JSON.stringify(userDetails));  
    });

});


module.exports = router;