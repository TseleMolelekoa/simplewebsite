import React from "react";
import Header from "../Header/index";
import Circle from "../circle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogle, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import social icons
import "./HomePage.css"; // Import of the CSS file

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="background-wrapper">
        <div className="welcome-Text">
          <h1>Welcome to My Website <br/> My Name Is Tsele Molelekoa</h1>
        </div>
      </div>
      <Circle/>
      <div className="social-icons">
        <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="mailto:your-email@gmail.com"><FontAwesomeIcon icon={faGoogle} /></a>
        <a href="https://discord.com/"><FontAwesomeIcon icon={faDiscord} /></a>
        <a href="https://github.com/"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
      <div className="button-container">
        <div className="downloadcv-button">
          <button className="download">Download CV</button>
        </div>
        <div className="contact-button">
          <button className="contact">Contact Me</button>
        </div> 
      </div>
    </div>
  );
}

export default HomePage;
