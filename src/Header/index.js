import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="menu">
        <a href="#home" className="active scroll-page"><i className="material-icons">home</i></a><br />
        <a href="#about" className="scroll-page"><i className="material-icons">account_circle</i></a><br />
        <a href="#skills" className="scroll-page"><i className="material-icons">settings</i></a><br />
        <a href="#works" className="scroll-page"><i className="material-icons">work</i></a><br />
        <a href="#contact" className="scroll-page"><i className="material-icons">mail</i></a><br />
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
