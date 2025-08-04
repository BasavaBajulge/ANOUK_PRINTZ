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
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWhatWeDo = () => {
    const whatWeDoSection = document.getElementById('what-we-do-section');
    if (whatWeDoSection) {
      whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContactUs = () => {
    const contactSection = document.getElementById('footer-scroll');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hide-scrollbar">
    <div className="homepage-container">
      <Navbar onStoryClick={scrollToAbout} onWhatWeDoClick={scrollToWhatWeDo} oncontactClickUs={scrollToContactUs}/>
      <AboutUs />
      <WhatWeDo />
      <Footer />
    </div>
    </div>
    
  );
};

export default HomePage;
