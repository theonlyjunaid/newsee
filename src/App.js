
import './App.css';
import React, { useState } from 'react';
import Navbar from './componenets/Navbar';
import News from './componenets/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




const App = () => {
  const apikey = "dbe57b028aeb41e285a226a94865f7a7"
  // const[progress, setProgress] = useState(0)
  const [progress, setProgress] = useState(0)


  const pageSize = 8;

  console.log(process.env)

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
          <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country='in' catogary='General' />} />
          <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country='in' catogary='Business' />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country='in' catogary='Entertainment' />} />
          <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country='in' catogary='Health' />} />
          <Route exact path='/science' element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country='in' catogary='Science' />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country='in' catogary='Sports' />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country='in' catogary='Technology' />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
