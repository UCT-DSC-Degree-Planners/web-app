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

  handleTextChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleRegisterChange(){
    // after the user clicks this button  should be taken to another page
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
              onChange={this.handleTextChange.bind(this)}
              style={{margin: "10px"}}
          /> 
          <br/>  
          <TextField 
              label="Password" 
              variant="outlined" 
              name = "password"
              type="password"
              value = {this.state.password}
              onChange={this.handleTextChange.bind(this)}
              style={{margin: "10px"}}
          />
           <br/>
          <TextField 
              label="Confirm Password" 
              variant="outlined" 
              name = "confirmPassword"
              type="password"
              value = {this.state.confirmPassword}
              onChange={this.handleTextChange.bind(this)}
              style={{margin: "10px"}}
          />
          <br/>
          <Button 
              variant="contained" 
              color="primary" 
              onClick = {this.handleRegisterChange.bind(this)}
          >
           register
          </Button>
        </form>
      </div>
    )
  }

  
}

export default Registration
