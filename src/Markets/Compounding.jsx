import React from 'react'
import heat from '../Images/heat.jpg';
import calcium from '../Images/calcium.jpg';
import flame from '../Images/pics/flame.jpg';



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
                    <img className='c1' src={flame} alt="color masterbatch" />
                    <div className='name-1'>
                        Flame Retardant
                    </div>
                </div>
                {/* <div className="store">
                    <img className='c1' src={flame} alt="color masterbatch" />
                    <div className='name-1'>
                        Recycling
                    </div>
                </div> */}
                {/* <div className="store">
                    <img className='c1' src={flame} alt="color masterbatch" />
                    <div className='name-1'>
                        Packing 
                    </div>
                </div> */}
            </div>
    </div>
  )
}
