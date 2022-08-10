
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  c = 'junaid malik';
  render() {
    return (
      <div>
        <h1>hello {this.c}</h1>
      </div>
    );
  }
}

export default App;
