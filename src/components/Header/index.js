import React from 'react';
import "./Header.css";
import { GitHub, Email, LinkedIn } from '@mui/icons-material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';


const Header = () => {
  return (
    <nav>
      <div className="menu">
        <a href="#home" className="active scroll-page"><HomeRoundedIcon /> Home</a><br />
        <a href="../about/index.js" className="scroll-page"><AccountCircleRoundedIcon /> About</a><br />
        <a href="#skills" className="scroll-page"><SettingsApplicationsRoundedIcon /> Skills</a><br />
        <a href="#works" className="scroll-page"><WorkRoundedIcon /> Projects</a><br />
        <a href="#contact" className="scroll-page"><EmailRoundedIcon /> Contact Me</a><br />
      </div>
      <div className="social">
        <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer"><GitHub /> GitHub</a><br />
        {/* <a href="http://www.discord.com/" target="_blank" rel="noopener noreferrer"><DiscordIcon /></a><br /> */}
        <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer"><Email /> Mail</a><br />
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedIn /> LinkedIn</a><br />
      </div>
    </nav>
  );
}

export default Header;
