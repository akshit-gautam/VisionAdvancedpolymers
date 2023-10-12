import React from 'react'
import mb from '../Images/c1.jpg';
import mbone from '../Images/c2.jpg';
import mbsecond from '../Images/c3jpg.jpg';
export const Recycling = () => {
  return (
    <div className='Square'>
                        <div className="products">
                <div  className="store">
                    <img className='c1' src={mb} alt="color masterbatch" />
                    <div className='name-1'>
                    Compounding industries
                    </div>
                </div>
                <div  className="store">
                    <img className='c1' src={mbone} alt="color masterbatch" />
                    <div className='name-1'>
                    Electronic appliances 
                    </div>
                </div>
                <div  className="store">
                    <img className='c1' src={mbsecond} alt="color masterbatch" />
                    <div className='name-1'>
                        Agriculture
                    </div>
                </div>
                <div  className="store">
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
                </div>
            </div>
    </div>
  )
}
