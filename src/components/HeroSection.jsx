import React from "react";
import "./HeroSection.css";
import screenshot from "../screenshot.png";
import scanStats from "../scanStats.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Scan Smarter, Eat Healthier</h1>
        <p>
          Discover the hidden health score of your food. Get healthier, one scan
          at a time.
        </p>
        <div className="hero-buttons">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Download on Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Download on the App Store
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={screenshot} alt="App preview" />
      </div>
      <div className="hero-image">
        <img src={scanStats} alt="App preview" />
      </div>
    </div>
  );
};

export default HeroSection;
