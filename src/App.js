import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Components/Test/Test.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <p className="App-intro">
          <Test />
        </p>
      </div>
    );
  }
}

export default App;
