// src/components/AboutUs/AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div id="about-us-section" className="about-us-section">
      <div className="about-box zoom-box">
        <h3>Vision, Mission & Values</h3>
        <p><strong>Vision:</strong> To become a trusted partner for businesses by delivering innovative, efficient, and brand-enhancing barcode label solutions across industries.</p>
        <p><strong>Mission:</strong> Deliver premium, reliable, and customized barcode sticker printing solutions through cutting-edge technology and artistic design.</p>
        <ul>
          <li>Innovation</li>
          <li>Quality Assurance</li>
          <li>Reliability</li>
          <li>Professionalism</li>
          <li>Scalability</li>
        </ul>
      </div>

      <div className="about-box zoom-box">
        <h3>Our Company</h3>
        <p>At ANOUK PRINTZ, we specialize in high-quality barcode sticker printing solutions for businesses of all sizes. We understand the importance of barcode labeling. Our mission is to provide high-quality, reliable and customized barcode labels.</p>
        <p>Barcode stickers help businesses track shipments, manage inventory, and clearly display pricing and product details.</p>
        <a href="https://www.anoukprintz.com" target="_blank" rel="noopener noreferrer">www.anoukprintz.com</a>
      </div>
    </div>
  );
};

export default AboutUs;
