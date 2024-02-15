import React from 'react';
import Circle from '../circle'; // Corrected import statement
import profileImage from '../Assets/assets/_MG_1509_1.jpg'; // Import your profile image
import './about.css'; // Import your CSS file

const AboutMe = () => {
  return (
    <div>
      <div className="about-me-container">
        <circle />
        <h2 className="about-heading">About Tsele Molelekoa<br/>A Junior Software-Developer</h2>
        <div className="content-container">
          <div className="text">
            <p className='about_me'>
              Hi! I'm Tsele Molelekoa. I'm passionate about Software Development. This is a space where I'll share a little bit about myself.
              <span>I am a qualified IT enthusiast with experience in providing excellent customer support to network users as well as expertise in troubleshooting technical issues.</span>
              <span> I have practical experience and competence in a variety of security, networking, and operating system software. <br/>I graduated with a Btech degree in Project Management at the Central University of Technology because I saw the growing need to broaden industry knowledge and skills relating to the management and execution of IT-related projects that any organization wishes to undertake. I am seeking a new challenge in a junior role in IT/project management. I am willing to relocate.</span>
            </p><Circle />
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
