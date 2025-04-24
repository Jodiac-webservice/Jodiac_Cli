import React, { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: "How much does a website cost",
    answer:
      "Unfortunately, we don't have fixed prices for projects. Each brief has unique requirements that influence the scope of the job. Once we receive the brief, we can provide an estimate of cost and timeline."
  },
  {
    question: "Can you work with our limited budget?",
    answer: "Yes, we try to accommodate various budgets depending on scope."
  },
  {
    question: "How long does a website project complete?",
    answer: "Project timelines depend on complexity — from 2 weeks to 3 months."
  },
  {
    question: "What are your payment terms?",
    answer: "Typically 50% upfront, 50% on completion — negotiable per project."
  },
  {
    question: "Can we arrange a phone call to discuss?",
    answer: "Absolutely — schedule a call through our contact form."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-left">
        <p className="subheading">FREQUENTLY ASK QUESTIONS</p>
        <h1 className="headline">
          <span className="highlight">THE SOLUTIONS</span> TO <br />
          YOUR QUERIES
        </h1>
      </div>
      <div className="faq-right">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleIndex(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span>{openIndex === index ? '–' : '+'}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
