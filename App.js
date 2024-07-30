import React from 'react';
// import video from '../public/video/2559159-hd_1920_1080_30fps.mp4'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is Content Media Player using Video React</h1>
        <video width="750" height="500" controls><source src='../188861-883827797_tiny.mp4' ></source></video>

      </header>
    </div>
  );
}

export default App;
