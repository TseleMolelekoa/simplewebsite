import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage/index';



function App() {
  return (
    <Router>
      <div>
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
