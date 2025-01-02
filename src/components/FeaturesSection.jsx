import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <h2>Why DetoxiScan?</h2>
      <div className="features-list">
        <div className="feature">
          <h3>Barcode Scanning</h3>
          <p>Instantly scan any product and get its health score.</p>
        </div>
        <div className="feature">
          <h3>Accurate Algorithm</h3>
          <p>The Algorithm detects many harmful and helpful ingredients to help you make the right food choices.
          </p>
        </div>
        <div className="feature">
          <h3>Harmful Ingredients Detection</h3>
          <p>Identify and avoid unhealthy additives.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
