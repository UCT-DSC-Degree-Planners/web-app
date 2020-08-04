const mongoose = require('mongoose0')
mongoose.connect("mongodb+srv://everyone:everyone@degreeplanner.xvijs.gcp.mongodb.net/DegreePlanner?retryWrites=true&w=majority");

//once it has connected
mongoose.connection.once('open', ()=> {
    console.log("Connection to DB successful");
}).on('error', (error)=> console.log(`CONNECTION ERROR: ${error}`));

//I think one of the criteria for a successful login should be if the token is 0,
//then if it we allow login and change the value of the token
// so that there cannot be another login until the end of the session
if (userDetails.successfulLogin === true )
//since the before login value of the token is 0, after login we give it a random number to show that the user is logged in

Users.findOneAndUpdate({name: userDetails.name},{token: Math.random()*10000})//


router.get('/get_courses', function(req,res,next) {
  Users.findOne({name: userDetails.name}, (err, user)=>{

       if (user.token !== 0){
         render('courses')
       }
      else{
           render('You cannot be logged in twice')
         }
       })})
