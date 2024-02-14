import React from 'react';
import Circle from '../circle'; // Corrected import statement
import profileImage from '../Assets/assets/_MG_1509_1.jpg'; // Import your profile image
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'; // Import HomeRoundedIcon
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'; // Import AccountCircleRoundedIcon
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded'; // Import SettingsApplicationsRoundedIcon
import WorkRoundedIcon from '@material-ui/icons/WorkRounded'; // Import WorkRoundedIcon
import EmailRoundedIcon from '@material-ui/icons/EmailRounded'; // Import EmailRoundedIcon
import GitHubIcon from '@material-ui/icons/GitHub'; // Import GitHubIcon
import EmailIcon from '@material-ui/icons/Email'; // Import EmailIcon
import LinkedInIcon from '@material-ui/icons/LinkedIn'; // Import LinkedInIcon
import './about.css'; // Import your CSS file

const AboutMe = () => {
  return (
    <div>
      <div className="about-me-container">
        <div className='triangle'></div>
        <Circle />
        <header className='header'>
          <nav>
            <div className="menu">
              <a href="#home" className="active scroll-page"><HomeRoundedIcon /> Home</a><br />
              <a href="../about/index.js" className="scroll-page"><AccountCircleRoundedIcon /> About</a><br />
              <a href="#skills" className="scroll-page"><SettingsApplicationsRoundedIcon /> Skills</a><br />
              <a href="#works" className="scroll-page"><WorkRoundedIcon /> Projects</a><br />
              <a href="#contact" className="scroll-page"><EmailRoundedIcon /> Contact Me</a><br />
            </div>
            <div className="social">
              <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub</a><br />
              {/* <a href="http://www.discord.com/" target="_blank" rel="noopener noreferrer"><DiscordIcon /></a><br /> */}
              <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /> Mail</a><br />
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon /> LinkedIn</a><br />
            </div>
          </nav>
        </header>
        <h2 className="about-heading">About Tsele Molelekoa<br/>A Junior Software-Developer</h2>
        <div className="content-container">
          <div className="text">
            <p className='about_me'>
              Hi! I'm Tsele Molelekoa. I'm passionate about Software Development. This is a space where I'll share a little bit about myself.
              <span>I am a qualified IT enthusiast with experience in providing excellent customer support to network users as well as expertise in troubleshooting technical issues.</span>
              <span> I have practical experience and competence in a variety of security, networking, and operating system software. <br/>I graduated with a Btech degree in Project Management at the Central University of Technology because I saw the growing need to broaden industry knowledge and skills relating to the management and execution of IT-related projects that any organization wishes to undertake. I am seeking a new challenge in a junior role in IT/project management. I am willing to relocate.</span>
            </p>
          </div>
          <div className="image">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
