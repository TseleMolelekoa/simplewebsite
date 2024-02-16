import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage/index';
import Services from './components/Services/index';
import AboutMe from './components/about/index';



function App() {
  return (
    <Router>
      <div>
        <div className='home'>
        <HomePage />
        </div>
        <div className='about'>
          <AboutMe />
        </div>
        <div className='services'>
          <Services />
        </div>
      </div>
    </Router>
  );
}

export default App;
