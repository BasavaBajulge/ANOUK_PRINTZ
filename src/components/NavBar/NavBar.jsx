// src/components/NavBar/NavBar.jsx
import React, { useState } from 'react';
import './NavBar.css';
import anoukPrintz from '../../images/ANOUK_PRINTZ_LOGO.png';

const Navbar = ({ onStoryClick, onWhatWeDoClick, oncontactClickUs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={anoukPrintz} alt="Logo" className="logo-img" />
        <span>ANOUK PRINTZ</span>
      </div>

      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li onClick={() => setMenuOpen(false)}>HOME</li>
        <li onClick={() => { onStoryClick(); setMenuOpen(false); }}>OUR STORY</li>
        <li onClick={() => { onWhatWeDoClick(); setMenuOpen(false); }}>WHAT WE DO</li>
        <li onClick={() => setMenuOpen(false)}>INDUSTRY SOLUTIONS</li>
        <li onClick={() => { oncontactClickUs(); setMenuOpen(false); }}>CONTACT US</li>
      </ul>
    </nav>
  );
};

export default Navbar;
