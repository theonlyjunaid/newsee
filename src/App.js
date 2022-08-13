
import './App.css';

import React, { useState } from 'react';
import Navbar from './componenets/Navbar';
import News from './componenets/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





const App = () => {
  const apikey = "a2c7a5fb20f749e08f16f846eb639220"
  // const[progress, setProgress] = useState(0)
  const [progress, setProgress] = useState(0)



  const [pageSize, setPageSize] = useState(8);
  // const PostNum = () => {
  //   <li class="nav-item dropdown">
  //     <Link class="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //       Posts Per Page
  //     </Link>
  //     <ul class="dropdown-menu bg-dark text-center">
  //       <li><Link class="dropdown-item  text-white" to="#" onClick={() => setPageSize(4)}>4</Link></li>
  //       <li><Link class="dropdown-item text-white " to="#" onClick={() => setPageSize(8)}>8</Link></li>
  //       <li><Link class="dropdown-item text-white" to="#" onClick={() => setPageSize(16)}>16</Link></li>
  //     </ul>
  //   </li>
  // }

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
