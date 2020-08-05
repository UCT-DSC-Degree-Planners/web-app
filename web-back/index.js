//this file is for connecting to db, adding middleware and connecting to a port
//this is the entry point for the web app

const express = require("express");
const mongoose = require('mongoose');
const path = require("path");

//taking care of all deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


// mongoose.connect("mongodb://localhost/DegreePlanner");

//making a connection to an online db
mongoose.connect("mongodb+srv://everyone:everyone@degreeplanner.xvijs.gcp.mongodb.net/DegreePlanner?retryWrites=true&w=majority");

//once it has connected
mongoose.connection.once('open', ()=> {
    console.log("Connection to DB successful");
}).on('error', (error)=> console.log(`CONNECTION ERROR: ${error}`));


//setting up express app
const app = express();

// Allowing requests from other locations (not just localhost:80). This iwill be removed in production
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


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


//#region ignore this for now 
if (process.env.NODE_ENV === 'production') {
    //middleware to serve static files (html, css, images)
    //this has to come first
    app.use(express.static("../web-front/public"));

    // sending the default html file if in production
    app.use((req, res)=>{
        res.sendFile(path.resolve(__dirname, '..', 'web-front', 'build', 'index.html'));
    })
}
//#endregion

const port = 80;
// const hostname = "localhost";

// listening to a port
// the first option is in case we're not using the localhost
app.listen(process.env.PORT || port, ()=>{
    console.log('Now listening to requests port', port);
});