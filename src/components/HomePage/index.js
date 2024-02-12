import React from "react";
import Header from "../Header";
import "./HomePage.css"; // Import of the CSS file

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is the home page content.</p>
      </div>
    </div>
  );
}

export default HomePage;
