import React from 'react';
import Header from '../Header';
import Circle from '../circle'; // Corrected import statement
import "./about.css";

const AboutMe = () => {
  return (
    <div>
    <h2>About Tsele Molelekoa<br/>A Junior Software-Developer</h2>
      <Header /> 
    
      <Circle /> {/* Corrected component name */}
        <p>
          Hi! I'm Tsele Molelekoa. I'm passionate about Software Development. 
          This is a space where I'll share a little bit about myself.<br/><br/>
       
          I am a qualified IT enthusiast with experience in providing excellent customer support to network users as well as expertise in troubleshooting technical issues. I have practical experience and competence in a variety of security, networking, and operating system software. <br/>I graduated with a Btech degree in Project Management at the Central University of Technology because I saw the growing need to broaden industry knowledge and skills relating to the management and execution of IT-related projects that any organization wishes to undertake. I am seeking a new challenge in a junior role in IT/project management. I am willing to relocate.
        </p>
    </div>
  );
}

export default AboutMe;
