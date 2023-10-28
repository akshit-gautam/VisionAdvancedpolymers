import React from 'react'
import bags from '../Images/pics/recycle.jpg';
import dust from '../Images/pics/mobile-dust-bin.jpg';
import picker from '../Images/pics/plastic-dust-picker.jpg';
export const Recycling = () => {
  return (
    <div className='Square'>
                        <div className="products">
                <div  className="store">
                    <img className='c1' src={bags} alt="color masterbatch" />
                    <div className='name-1'>
                    Carry Bags
                    </div>
                </div>
                <div  className="store">
                    <img className='c1' src={dust} alt="color masterbatch" />
                    <div className='name-1'>
                    Dustbins 
                    </div>
                </div>
                <div  className="store">
                    <img className='c1' src={picker} alt="color masterbatch" />
                    <div className='name-1'>
                    Dustpicker
                    </div>
                </div>
                {/* <div  className="store">
                    <img className='c1' src={mbsecond} alt="color masterbatch" />
                    <div className='name-1'>
                        Recycling
                    </div>
                </div>
                <div className="store">
                    <img className='c1' src={mbsecond} alt="color masterbatch" />
                    <div className='name-1'>
                        Packing 
                    </div>
                </div> */}
            </div>
    </div>
  )
}
