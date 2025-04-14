import React from 'react';
import { MdEmail } from 'react-icons/md';
import './Navbar.css';
import { assets } from '../assets';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><img src={assets.Logo}/></div>
      <div className="navbar-links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Book a Gig</a>
        <a href="#" className="nav-link">Our Works</a>
        <a href="#" className="nav-link">About Us</a>
      </div>
      <div className="navbar-actions">
        <button className="connect-button">
          Let's Connect!
        </button>
        <a href="mailto:example@email.com" className="email-icon">
          <MdEmail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;