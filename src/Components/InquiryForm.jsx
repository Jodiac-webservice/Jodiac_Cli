import React, { useState } from 'react';
import './InquiryForm.css';

const InquiryForm = () => {
  const [budget, setBudget] = useState(3000);

  return (
    <div className="inquiry-container">
      <div className="inquiry-left">
        <p className="subheading">BOOK A GIG</p>
        <h1 className="headline">
          <span className="highlight">IDEAS TO LIFE</span><br />
          BOOK A GIG TODAY!<br />
          SHARE YOUR IDEAS!
        </h1>
        <p className="bodytext">
          Book a gig now and bring electrifying entertainment to your event! Fill out the form below to get started.
        </p>
        <p className="note">
          Our team will reach out to you within 2-3 business days with all the details. Stay tuned for exciting updates!
        </p>
      </div>

      <div className="inquiry-right">
        <form>
          <label><span>01</span> Full Name</label>
          <input type="text" placeholder="Enter your name" />

          <label><span>02</span> E-mail</label>
          <input type="email" placeholder="Enter your email" />

          <label><span>03</span> Can you briefly explain your project?</label>
          <input type="text" placeholder="Your project idea" />

          <label><span>04</span> Your Budget</label>
          <input
            type="range"
            min="1000"
            max="5000"
            step="100"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          <p className="budget-range">${budget}</p>

          <label><span>05</span> Your Message</label>
          <textarea placeholder="Leave us a message"></textarea>

          <button type="submit">
            Send an Inquiry <span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
