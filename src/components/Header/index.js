import React from 'react';
import "./Header.css";
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
        <a href="#about" className="scroll-page"><AccountCircleRoundedIcon /> About</a><br />
        <a href="#skills" className="scroll-page"><SettingsApplicationsRoundedIcon /> Skills</a><br />
        <a href="#works" className="scroll-page"><WorkRoundedIcon /> Projects</a><br />
        <a href="#contact" className="scroll-page"><EmailRoundedIcon /> Contact Me</a><br />
      </div>
      <div className="social">
        <a href="https://github.com/RidhoBeteer" target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain"></i></a><br />
        <a href="http://beteer.wpdevcloud.com" target="_blank" rel="noopener noreferrer"><i className="devicon-wordpress-plain"></i></a><br />
        <a href="https://twitter.com/ridhobeteer" target="_blank" rel="noopener noreferrer"><i className="devicon-twitter-plain"></i></a><br />
        <a href="https://www.facebook.com/ridho.beteer" target="_blank" rel="noopener noreferrer"><i className="devicon-facebook-plain"></i></a><br />
      </div>
    </nav>
  );
}

export default Header;
