// src/components/HomePage/HomePage.jsx
import React from 'react';
import Navbar from '../NavBar/NavBar';
import AboutUs from '../AboutUs/AboutUs';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import Footer from '../Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-us-section');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhatWeDo = () => {
    const whatWeDoSection = document.getElementById('what-we-do-section');
    if (whatWeDoSection) whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContactUs = () => {
    const contactSection = document.getElementById('footer-scroll');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hide-scrollbar">
      <Navbar
        onStoryClick={scrollToAbout}
        onWhatWeDoClick={scrollToWhatWeDo}
        oncontactClickUs={scrollToContactUs}
      />
      <div className="homepage-container">
        {/* ===== Banner (CSS styled, not an image) ===== */}
        <header className="sap-banner" role="banner" aria-label="Promotional banner">
          <div className="sap-banner-inner">
            <h1 className="sap-banner-title">Get your Prints at Anouk Printz</h1>
            <p className="sap-banner-sub">
              Design. Print. Impress. Barcode labels, digital brilliance, and offset perfection            
              </p>
            <a
              className="sap-cta"
              href="https://www.sap.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Create your SAP account (opens in new tab)"
            >
              Explore
            </a>
          </div>
        </header>

        {/* ===== Rest of the page ===== */}
        <AboutUs />
        <WhatWeDo />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
