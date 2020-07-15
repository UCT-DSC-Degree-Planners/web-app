import React from 'react';
import LoginPage from './components/LoginPage';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      user: null,
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
