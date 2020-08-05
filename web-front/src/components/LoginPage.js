import React from 'react';

class LoginPage extends React.Component {
    // No need for constructor, but this should be a class based component, so that refs can be used
    // constructor(props){
    //     super(props);
    // }

    render()
    {
        // this is what the render function returns
        return(
            <div>
                <form id="login" onSubmit={this.props.handleLogin} method="POST">
                    <label htmlFor = "name">Enter your name:</label>
                    <input type="text" name="name" ref={this.props.usernameInput} placeholder="name" autoComplete="true" required/>
                    <label htmlFor="password">Enter your password:</label>
                    <input type="password" name="password" ref={this.props.passwordInput} placeholder="password" autoComplete="true" required/> 
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }

    
}

export default LoginPage;