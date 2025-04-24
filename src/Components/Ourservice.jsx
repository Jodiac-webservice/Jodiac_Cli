import React from 'react';
import './Ourservice.css';

export const Ourservice = () => {
  return (
    <div className='Ourservice-container'>
<div className='Ourservice-header'>
  <p className='Ourservice-subtitle'>Ourservice</p>
  
  <div className='Ourservice-title-button'>
    <h3 className='Ourservice-title'>
      <span className='title-highlight'>UNLOCK SUCCESS</span><br />
      <span className='title-secondary'>WITH US AT Jodiac</span>
    </h3>
    <button className='gig-button'>Book a gig</button>
  </div>
  
  <h1 className='Heading'>UI & UX DESIGN</h1>
  
  <div className="container">
    <span className="details">
      Building products users adore means prioritizing the user throughout every design phase.
    </span>
    <div className="list-container">
      <span className="list">Understand user need</span>
      <span className="list">High-End Prototyping Solutions</span>
      <span className="list">Optimizing User Experience</span>
    </div>
  </div>
  <div className="service-container">
  <div className="service-item">
    <span className="service-list">WEB DEVELOPMENT</span>
    <button className="add-btn">+</button>
  </div>
  <div className="service-item">
    <span className="service-list">MERCH DESIGN</span>
    <button className="add-btn">+</button>
  </div>
  <div className="service-item">
    <span className="service-list">BRANDING</span>
    <button className="add-btn">+</button>
  </div>
</div>
</div>

    </div>
  );
};
