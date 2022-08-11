
import './App.css';
import React, { Component } from 'react';
import Navbar from './componenets/Navbar';
import News from './componenets/News';


class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <News />

      </div>
    );
  }
}

export default App;
