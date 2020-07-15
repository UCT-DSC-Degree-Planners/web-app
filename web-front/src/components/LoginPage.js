import React from 'react';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
    }

    render()
    {
        // this is what the render function returns
        return(
            <div>
                <form id="login" onSubmit={this.handleLogin} method="POST">
                    {/* ref is a property that will help react find the input field later. This is deprecated */}
                    <label htmlFor = "name">Enter your name:</label>
                    <input type="text" name="name" ref="name" placeholder="name" required/>
                    <label htmlFor="password">Enter your password:</label>
                    <input type="password" name="password" ref="password" placeholder="password" required/> 
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }

    handleLogin = (e)=>{
        e.preventDefault();
        //make sure to use refs and not just ref
        var name = this.refs.name.value;
        var password = this.refs.password.value;

        // the data to be sent to the server for authentication 
        var loginDetails = {
                name: name,
                password: password,
            } 

        // Sending the login details to the DB so they can be analysed
        fetch("/api/auth", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginDetails)
        }) 
        .then(res => res.json()) //only works if there's a response
        .then(json => {
            if(json.name){ // if the name was found in the DB
                if (json.successfullLogin){ // if the login was successfull (according to the response from the server)
                    // set the state of the app
                    this.setState(json);
                    console.log("successful login")
                }
                else{ // the password was wrong
                    console.log("Wrong password");
                }
            }
            else{
                console.log("Username not found");
            }
        })
        .catch(err => console.log("Error: ", err));     
    }
}

export default LoginPage;