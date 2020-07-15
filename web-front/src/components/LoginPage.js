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
                    {/* ref is a property that will help react find the input field later */}
                    <label for = "username">Enter your username:</label>
                    <input type="text" name="username" ref="username" placeholder="username" required/>
                    <label for="password">Enter your password:</label>
                    <input type="password" name="password" ref="password" placeholder="password" required/> 
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }

    handleLogin = (e)=>{
        e.preventDefault();
        //make sure to use refs and not just ref
        var username = this.refs.username.value;
        var password = this.refs.password.value;

        // the data to be sent to the server for authentication 
        var loginDetails = {
                username: username,
                password: password,
            } 
    }
}

export default LoginPage;