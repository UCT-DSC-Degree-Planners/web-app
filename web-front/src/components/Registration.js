import React,{ Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';



export class Registration extends Component {
  constructor(){
    super()
    this.state = {
        email: "",
        password: "",
        confirmPassword: ""
    }
  }

  handleTextChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  
  handleRegisterChange = (e) => {

    e.preventDefault();

    const registrationDetails = {
            email: this.email,
            password: this.password
        } 
    fetch("http://localhost:80"+"/api/createProfile", {
        method: "POST",

        headers: {"Content-Type": "application/json",
                  "Origin": `${window.location.protocol}://${window.location.hostname}:${window.location.port}`
                  },
        body: JSON.stringify(registrationDetails)
    }) 
    .then(res => res.json()) 
  }

  

  render() {
    return (
      <div>
        <form>
          <TextField 
              label="Email" 
              variant="outlined"
              name = "email"  
              value = {this.state.email}
              onChange={this.handleTextChange}
              style={{margin: "10px"}}
          /> 
          <br/>  
          <TextField 
              label="Password" 
              variant="outlined" 
              name = "password"
              type="password"
              value = {this.state.password}
              onChange={this.handleTextChange}
              style={{margin: "10px"}}
          />
           <br/>
          <TextField 
              label="Confirm Password" 
              variant="outlined" 
              name = "confirmPassword"
              type="password"
              value = {this.state.confirmPassword}
              onChange={this.handleTextChange}
              style={{margin: "10px"}}
          />
          <br/>
          <Button 
              variant="contained" 
              color="primary" 
              onClick = {this.handleRegisterChange}
          >
           register
          </Button>
        </form>
      </div>
    )
  }

  
}

export default Registration