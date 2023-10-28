import React from 'react'
import Tapes from '../Images/pics/bop.jpg';
import Shrink  from '../Images/pics/shrink.jpg';
import Pouches from '../Images/pics/pouch.jpg';

export const Packing = () => {
  return (
    <div className='Square'>
                       <div className="products">
                <div className="store">
                    <img className='c1' src={Tapes} alt="color masterbatch" />
                    <div className='name-1'>
                    Bop Tapes
                    </div>
                </div>
                <div  className="store">
                    <img className='c1' src={Shrink} alt="color masterbatch" />
                    <div className='name-1'>
                    Shrink Wrap
                    </div>
                </div>
                <div  className="store">
                    <img className='c1' src={Pouches} alt="color masterbatch" />
                    <div className='name-1'>
                    Pouches 
                    </div>
                </div>
                {/* <div  className="store">
                    <img className='c1' src={mbsecond} alt="color masterbatch" />
                    <div className='name-1'>
                        Recycling
                    </div>
                </div>
                <div  className="store">
                    <img className='c1' src={mbsecond} alt="color masterbatch" />
                    <div className='name-1'>
                        Packing 
                    </div>
                </div> */}
            </div> 
    </div>
  )
}
