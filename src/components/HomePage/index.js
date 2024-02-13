import React from "react";

import Logo2 from "../../components/Assets/assets/logo2.png"; // Correct the import path
import Header from "../Header";
import "./HomePage.css"; // Import of the CSS file

const HomePage = () => {
    return (
        <div className="home-container">
          <Header />
          <div className="logo-section">
            <img src={Logo2} alt="Logo" /> 
          </div>
      <div className="background-wrapper">
        <div className="welcome-Text">
          <h1>Welcome to My Website <br/> My Name Is Tsele Molelekoa</h1>
      </div>
    </div>
          <div className="content">
            <p>I am a Junior Software Developer From South Africa</p>
          </div>
          <div className="downloadcv-button">
            <button className="download">Download CV</button>
          </div>
          <div className="contact-button">
            <button className="contact">Contact Me</button> {/* Corrected the button text */}
          </div>
        </div>
      );
}

export default HomePage;