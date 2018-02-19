import React from 'react';

import BlogContainer from './BlogContainer/BlogContainer';
import AddRecord from './AddRecord/AddRecord';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
    </p>
    <AddRecord />
    <BlogContainer />
  </div>
)

export default App;
