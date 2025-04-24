import React from 'react';
import Navbar from '../Components/Navbar';
import AboutUs from '../Components/AboutUs';
import OurWork from '../Components/OurWork';
import { Ourservice } from '../Components/Ourservice';
import { Testimonials } from '../Components/Testimonials';
import InquiryForm from '../Components/InquiryForm';
import Footer from '../Components/Footer';
import FaqSection from '../Components/Faq';
import GlowingCursor from '../Components/GlowingCursor';
import { assets } from '../assets';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
    <GlowingCursor/>
      <Navbar />
      <div className="hero-wrapper">
        <img src={assets.Hero} alt="Hero" className="hero-image" />
          <p className='Next-Gen'>NEXT-GEN</p>
          <p className='Web'>WEB SOLUTIONS</p>
        </div>
        <AboutUs/>
        <OurWork/>
        <Ourservice/>
        <Testimonials/>
        <FaqSection/>
        <InquiryForm/>
        <Footer/>
      </div>
  )
}

export default Home;
