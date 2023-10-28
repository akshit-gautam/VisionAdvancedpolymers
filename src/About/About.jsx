import React from 'react'
import './about.css';
import conto from '../Images/aa2.jpg';

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
            A Company That Inspires <br></br>possibilities!
          </div>
          <div className="right-3">
            {/* We believe in making the ground we work in a place that inspires.<br></br> Thus, we set up one of the most versatile, fully equipped <span className='orange'> European<br></br> technology-backed</span> plants that boasts of state-of-the-art facilities and<br></br> constructive ergonomics. */}
            We are a leading innovator in the masterbatches and compounds industry. With a rich history and a commitment to excellence, we have become a trusted partner for businesses seeking high-quality solutions for their plastic and polymer needs. Started in 2022 primarily involve in manufacturing and trading of masterbatches, Compounds, specialty polymers. Also deal in plastic additives and Specialty chemicals required for Compounding, Packing, Pipe and Wire & Cable industries. The company has head office in Gurgaon, Haryana India.
            Our goal is to fulfill customer needs by providing customized solutions and quality material within committed time. We believe in creating a sustainable and vibrant future through our products and services.

          </div>
        </div>
      </div>
    </div>
  )
}
export default About;