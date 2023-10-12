import React from 'react'
import '../Corousel/corousel.css';
import corouselData from '../data/corouselData.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Corousel = () => {
  const {slider} = corouselData
  console.log(slider)
  
  return (
   
    <Carousel className='first' autoPlay = {true} interval={2000} transitionTime={2000}infiniteLoop ={true} showStatus ={false} dynamicHeight ={true} showThumbs ={false} >
      {slider.map((slide, index) => (
        <div className='second' key={index}>
          <img className='third' src={slide} alt={`Slide ${index+1 }`} />
        </div>
      ))}
    </Carousel>
  
  )
}
export default Corousel;