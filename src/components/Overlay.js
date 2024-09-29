// Overlay.js
import React, { useEffect, useState } from 'react';
import '../styles/Overlay.css'; // Ensure the path matches your project structure

const Overlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const name = "Kenneth Angelikas";
  const letters = name.split("");

  useEffect(() => {
    // Set a timer to hide the overlay after 6 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null; // Do not render anything if the overlay is not visible
  }

  return (
    <div className="overlay-container">
      <h1 className="overlay-text">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="animated-letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Overlay;
