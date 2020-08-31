import React from 'react';
import LoginPage from './components/LoginPage';
import './App.css';
import Registration from './components/Registration';

class App extends React.Component {
  constructor(props){
    super(props);

    // these two variables will be references to the inputs in the LoginPage form, so that it's text can be accessed from this component
    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();

    // It's better to use redux for managing the state of the app: who's logged in, what courses they have done...
    this.state = {
      user: null,
      token: null,
      loggedIn: false
    }
  }

  render(){
    return (
      <div className="App">

        <LoginPage 
          handleLogin ={ (e) => this.handleLogin(e) }
          usernameInput = {this.usernameInput}
          passwordInput = {this.passwordInput}
        />
        <Registration/>

      </div>
    );
  }

  handleLogin = (e) => {
    // preventing the page from refreshing after the form is submitted
    e.preventDefault();

    // Using the refs created in the constructor to access the value of the inputs from the LoginPage form
    var name = this.usernameInput.current.value;
    var password = this.passwordInput.current.value;

    // the data to be sent to the server for authentication 
    var loginDetails = {
            name: name,
            password: password,
            token: this.state.token
        } 

    // Sending the login details to the DB so they can be analysed. Currently sending the request to the localhost or WLAN, but this will be removed 
    fetch("http://localhost:80"+"/api/auth", {
        method: "POST",
        // the "Origin" field is just for now, and it is to allow this url (port 3000) to make requests to port 80
        headers: {"Content-Type": "application/json",
                  "Origin": `${window.location.protocol}://${window.location.hostname}:${window.location.port}`
                  },
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

export default App;
