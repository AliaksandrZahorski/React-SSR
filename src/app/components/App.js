import React from 'react';

import BlogContainer from './BlogContainer/BlogContainer';
import AddRecord from './AddRecord/AddRecord';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
    </p>
    <AddRecord />
    <BlogContainer />
  </div>
)

export default App;
