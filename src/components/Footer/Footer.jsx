import React from 'react';
import './Footer.css'; // or Footer.module.css if using CSS modules
import { FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id='footer-scroll'>
      <div className="footer-grid">
        <div className="footer-left">
          <h1 className="footer-title">THANK YOU</h1>
          <div className="footer-contact">
            <p><FaPhoneAlt /> +91 70900 06811</p>
            <p><FaGlobe /> www.anoukprintz.com</p>
            <p><FaMapMarkerAlt /> Bengaluru</p>
            <p className="footer-link">www.reallygreatsite.com</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-highlight">
          </div>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Team smiling"
            className="footer-image"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
