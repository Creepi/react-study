import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.name = "tito"
  }
  render(){
    return (
      <h1>It's working {this.name}</h1>
    );
  }
}

export default App;
