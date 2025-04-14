import React from 'react'
import Navbar from '../Components/Navbar'
import AboutUs from '../Components/AboutUs'
import OurWork from '../Components/OurWork'
import GlowingCursor from '../Components/GlowingCursor'
import { assets } from '../assets'
import './Home.css'

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
      </div>
  )
}

export default Home;
