import React from 'react'
import cable from '../Images/pics/Underground-Cables.jpg';
import sw from '../Images/pics/switches.jpg';
import mac from '../Images/pics/washing.jpg';


export const Electronic = () => {
  return (
    <div className='Square'>
                        <div className="products">
                <div className="store">
                    <img className='c1' src={cable} alt="color masterbatch" />
                    <div className='name-1'>
                    Cables & Wires
                    </div>
                </div>
                <div  className="store">
                    <img className='c1' src={sw} alt="color masterbatch" />
                    <div className='name-1'>
                    Switches
                    </div>
                </div>
                <div  className="store">
                    <img className='c1' src={mac} alt="color masterbatch" />
                    <div className='name-1'>
                    Washing Machine
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
