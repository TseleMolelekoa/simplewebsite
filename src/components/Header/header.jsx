// src/components/Header/Header.jsx
import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="side-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* Add more navigation links as needed */}
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Add more navigation links as needed */}
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
