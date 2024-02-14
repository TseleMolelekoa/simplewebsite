import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage/index';
import AboutMe from './components/about/index';



function App() {
  return (
    <Router>
      <div>
        {/* <HomePage />  */}
        <AboutMe />
      </div>
    </Router>
  );
}

export default App;
