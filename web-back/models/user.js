//this file is for setting up the structure of a user

const mongoose = require('mongoose');

//creating a developer schema
var UserSchema = new mongoose.Schema({
    //if {} is added to the property, it can have more options
    name: {
        type: String,
        required: [true, "The name is required"]
    },

    password: {
        type: String,
        required: true
    },

    // the token that will be used for authenthication and security
    token: {
        type: Number,
        required: true, 
        default: 0,
    }

});

var User = mongoose.model('user', UserSchema);

module.exports = User;