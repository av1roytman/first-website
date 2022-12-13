import React from 'react';
import logo from './Photos/CharlieSanta.png';
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Happy Holidays Crackers!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=z8LmMtScH3g"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for some Holiday Music!!
        </a>
      </header>
    </div>
  );
}

export default App;
