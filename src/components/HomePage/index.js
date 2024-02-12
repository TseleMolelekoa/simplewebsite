import React from "react";
import Header from "../Header";
import "./HomePage.css"; // Import of the CSS file

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <div className= "welcome-Text">
      <h1>Welcome to My Website <br/> My Name Is Tsele Molelekoa</h1>
      </div>
      <div className="content">
        <p>I am a Junior Sofware Developer From South Africa</p>
      </div>
    </div>
  );
}

export default HomePage;
