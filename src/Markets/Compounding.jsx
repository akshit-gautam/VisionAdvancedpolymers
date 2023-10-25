import React from 'react'
import heat from '../Images/heat.jpg';
import calcium from '../Images/calcium.jpg';
import mbsecond from '../Images/c3jpg.jpg';


export const Compounding = () => {
  return (
    <div className='Square'>
                        <div className="products">
                <div className="store">
                    <img className='c1' src={heat} alt="color masterbatch" />
                    <div className='name-1'>
                    Heat Stablizer
                    </div>
                </div>
                <div className="store">
                    <img className='c1' src={calcium} alt="color masterbatch" />
                    <div className='name-1'>
                    Calcium Carbonate 
                    </div>
                </div>
                <div  className="store">
                    <img className='c1' src={mbsecond} alt="color masterbatch" />
                    <div className='name-1'>
                        Agriculture
                    </div>
                </div>
                <div className="store">
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
