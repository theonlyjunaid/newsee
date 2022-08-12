
import './App.css';
import React, { Component } from 'react';
import Navbar from './componenets/Navbar';
import News from './componenets/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



class App extends Component {
  pageSize = 8;
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
            <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country='in' catogary='general' />} />
            <Route exact path='/business' element={<News key="business" pageSize={this.pageSize} country='in' catogary='business' />} />
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country='in' catogary='entertainment' />} />
            <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} country='in' catogary='health' />} />
            <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} country='in' catogary='science' />} />
            <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} country='in' catogary='sports' />} />
            <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} country='in' catogary='technology' />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
