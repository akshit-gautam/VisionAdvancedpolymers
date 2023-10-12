import React from 'react'
import './about.css';
import conto from '../Images/vg2.jpg';

export const About = () => {
  return (
    <div className="about-container">
      {/* <div className="head">
        about us 
      </div> */}
      <div className='grid'>
        <div className="left">
          <img src={conto} alt="" />
        </div>
        <div className="right">
          <div className='right-2'>
            About us
          </div>
          <div className='right-1'>
            A manufacturing unit that<br></br> inspires possibilities!
          </div>
          <div className="right-3">
            {/* We believe in making the ground we work in a place that inspires.<br></br> Thus, we set up one of the most versatile, fully equipped <span className='orange'> European<br></br> technology-backed</span> plants that boasts of state-of-the-art facilities and<br></br> constructive ergonomics. */}
            Vision Specialty Polymers  exists to conquer challenges and unlock the potential of innovation and sustainability everywhere on earth. Working together, we connect exceptional people, ideas, and science to create specialized and sustainable materials that enhance performance and protect the environment. With a commitment to tenacious problem-solving and unwavering service, we enable customers to transform their visions into products that improve quality of life in meaningful, dynamic ways.
            We are here to help you change the world. Now, let's get started.

          </div>
        </div>
      </div>
    </div>
  )
}
export default About;