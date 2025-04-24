import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='about-container'>
      <div className='about-header'>
        <p className="about-subtitle">ABOUT US</p>
        <div className='about-section'>
        <h1 className='about-title'>
          WHERE BOLD IDEAS 
          <span className="highlight-text"> FIND FORM</span>
        </h1>
        <p className='about-description'>
          At Jodiac, we believe that every great idea deserves the perfect platform to grow.
          As a team of skilled creatives, tech experts, and strategic minds, We are committed
          to bringing your vision to life.
        </p>
        </div>
      </div>

      <div className='about-stats'>
        <h2 className='stats-heading'>Jodiac In Number</h2>
        <div className='stats-grid'>
          <div className='stat-box'>
            <span className='stat-label'>Projects completed</span>
            <span className='stat-value'>20+</span>
          </div>
          <div className='stat-box'>
            <span className='stat-label'>Client retention rate</span>
            <span className='stat-value'>95%</span>
          </div>
          <div className='stat-box'>
            <span className='stat-label'>Years of experience</span>
            <span className='stat-value'>03+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
