import React from 'react'
import Card from './Card'
import './OurWork.css'

const OurWork = () => {
  return (
    <div className='Works-container'>
        <div className='Works-header'>
            <p className='work-subtitle'>Our Works</p>
            <div className='work-section'>
                <h1 className='work-title'>
                Innovation in Motion
                </h1>
            </div>
        </div>
        <Card/>
    </div>
  )
}

export default OurWork