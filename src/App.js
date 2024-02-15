import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage/index';
import Services from './components/Services/Services';
import AboutMe from './components/about/index';



function App() {
  return (
    <Router>
      <div>
        <HomePage />
        <AboutMe />
        <Services />
      </div>
    </Router>
  );
}

export default App;
