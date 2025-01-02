import React from "react";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      text: "DetoxiScan has completely changed the way I shop for groceries!",
    },
    {
      name: "Mark T.",
      text: "I love how easy it is to avoid harmful ingredients.",
    },
    {
      name: "Emily R.",
      text: "Finally, an app that helps me make healthier choices effortlessly.",
    },
  ];

  return (
    <div className="testimonials-section">
      <h2>What Our Users Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
