import React from 'react';
import LoginPage from './components/LoginPage';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    // It's better to use redux for managing the state of the app: who's logged in, what courses they have done...
    this.state = {
      user: null,
      loggedIn: false
    }
  }
  render(){
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
  
}

export default App;
