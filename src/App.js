import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage/index';
import Services from './components/Services/index';
import AboutMe from './components/about/index';
import ProjectsPage from './components/Projects/index';
import ContactPage from './components/contactPage';

function App() {
  return (
    <Router>
      <div>
        <HomePage />
        <AboutMe />
        <Services />
        <ProjectsPage />
        {/* <ContactPage />  */}
      </div>
    </Router>
  );
}

export default App;
