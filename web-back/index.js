//this file is for connecting to db, adding middleware and connecting to a port
//this is the entry point for the web app

const express = require("express");
const mongoose = require('mongoose');

//taking care of all deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


// mongoose.connect("mongodb://localhost/DegreePlanner");

//making a connection to an online db
mongoose.connect("mongodb+srv://all:all@degreeplanner.xvijs.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority");


//setting up express app
const app = express();

//middleware to serve static files (html, css, images)
//this has to come first
app.use(express.static("public"));

//attaches the parser to the req object in the REQUESTS
//this can only handle json
app.use(express.json());

// the /api is to make sure all requests are preceded with /api/<whatever>
app.use('/api', require("./routes/api"));

//error handling middleware
//next is here in case we need to call the next middleware
app.use((err, req, res, next)=>{
    res.status(422).send(err.message);
});


//listening to a port
//the first option is in case we're not using the local host
app.listen(process.env.port || 4000, ()=>{
    console.log('Now listening to requests');
});