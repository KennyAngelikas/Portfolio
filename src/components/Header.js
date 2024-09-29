// Header.js
import React from 'react';
import '../styles/Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navigation">
        <div className="logo">KA</div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>
      <div className="hero-content">
        <h1 className="hero-title">Hello, I'm</h1>
        <h1 className="hero-title highlight">Kenneth Angelikas</h1>
        <p className="hero-subtitle">
          Crafting elegant solutions with code and creativity.
        </p>
      </div>
    </header>
  );
};

export default Header;
