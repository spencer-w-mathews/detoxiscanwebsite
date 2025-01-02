import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
}

export default App;
