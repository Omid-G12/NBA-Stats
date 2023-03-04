import React from 'react';
import '../Styles/About.css'; // import CSS file for About component styling
// import NBAUniversal from './NBAUniversal.png.webp'
// We are a company dedicated to providing high-quality NBA statistics to fans around the world.

function About() {
  return (
    <div className="page-content about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-body">We are a company dedicated to providing high-quality NBA statistics to fans around the world.</p>
      {/* <img src={NBAUniversal} alt="NBA Logo" className="about-logo" /> */}
    </div>
  );
}

export default About;
