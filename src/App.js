import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from 'react-router-dom'
import HomePage from './components/HomePage';
import AboutMe from './components/about';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap Routes around Route components */}
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="./components/about/about.jsx" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
