import React from 'react';
import './Footer.css';
import { FaInstagram, FaBehance, FaDribbble, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Kolkata, West Bengal<br />Hooghly–Chinsurah<br />712104</p>
      </div>

      <div className="footer-logo">
        <div className="sparkle">✦</div>
        <h1 className="logo-text">Jodiac</h1>
        <div className="footer-links">
          <a href="#">Our works</a>
          <a href="#">Privacy policy</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="copyright">© 2025 JODIAC</p>
      </div>

      <div className="footer-right">
        <div className="social-icons">
          <FaInstagram />
          <FaBehance />
          <FaDribbble />
          <FaXTwitter />
        </div>
        <a href="#" className="back-to-top">Back to Top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;
