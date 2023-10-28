import React from 'react'
import sprink from '../Images/pics/sprik.jpg';
import irri from '../Images/pics/12-round-drip-irrigation-pipes.jpg';
import pesti from '../Images/pics/pesticide-sprayer-pump.jpg';

export const Agriculture = () => {
  return (
    <div className='Square'>
                    <div className="products">
                <div className="store">
                    <img className='c1' src={sprink} alt="color masterbatch" />
                    <div className='name-1'>
                     Sprinklers
                    </div>
                </div>
                <div className="store">
                    <img className='c1' src={irri} alt="color masterbatch" />
                    <div className='name-1'>
                    Irrigation Pipes
                    </div>
                </div>
                <div className="store">
                    <img className='c1' src={pesti} alt="color masterbatch" />
                    <div className='name-1'>
                        Pesticides Spray
                    </div>
                </div>
                {/* <div className="store">
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

