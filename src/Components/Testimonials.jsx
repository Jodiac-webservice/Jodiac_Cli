import React from 'react'
import { assets } from '../assets';
import "./Testimonials.css"
export const Testimonials = () => {
  return (
    <div className='Testimonial-container'>
    <div className='Testimonial-Header'>
    <p className='Testimonial-subtitle'> 
    Testimonials
    </p>
    <span className='Heading'>REAL STORIES,</span><br/>
    <span className='Proven'>Proven Results</span>
    <div className='Text-container'>
    <p className='Text'>At Jodiac, our clients' success is our top priority. We take pride in the connections we foster and the results we help achieve</p>
    <span className='no'>5.0 </span><span className='review'> from 100 review</span>
    </div>
    <img className='googlereview' src={assets.googlereview}/>
    </div>
    <div className='reviews'>
    </div>
    </div>
  )
}
 