import React from 'react';
import {Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" width="50" />
          </header>
          <Link to="/document" style={{ padding: 5 }}>
              About
          </Link>
      </div>
  )
}

export default App;
