import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutMe from './components/about/index';
import Services from './components/Services/index';
import Projects from './components/Projects/index';
import ContactForm from './components/contactPage/index';



function App() {
  return (
    <Router>
      <HomePage />
      <AboutMe/>
      <Services />
      <Projects/>
      <ContactForm/>
    </Router>
  );
}

export default App;
