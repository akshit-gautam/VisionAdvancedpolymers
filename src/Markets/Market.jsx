import React from 'react'
import './market.css';
import comp from '../Images/comp.jpg';
import elect from '../Images/2.jpg';
import agri from '../Images/agri.jpg';
import recy from '../Images/recy.jpg';
import pack from '../Images/pack.jpg';
import { useNavigate } from 'react-router-dom';

export const Market = () => {
    const nav = useNavigate()
  return (
    
    <div className='Square markets'>
                <div className="products">
                <div onClick={()=> nav("/market/compounding")} className="store">
                    <img className='c1' src={comp} alt="color masterbatch" />
                    <div className='name-1'>
                    Compounding industries
                    </div>
                </div>
                <div onClick={()=> nav("/market/electronic")} className="store">
                    <img className='c1' src={elect} alt="color masterbatch" />
                    <div className='name-1'>
                    Electronic appliances 
                    </div>
                </div>
                <div onClick={()=> nav("/market/agriculture")} className="store">
                    <img className='c1' src={agri} alt="color masterbatch" />
                    <div className='name-1'>
                        Agriculture
                    </div>
                </div>
                <div onClick={()=> nav("/market/recycling")} className="store">
                    <img className='c1' src={recy} alt="color masterbatch" />
                    <div className='name-1'>
                        Recycling
                    </div>
                </div>
                <div onClick={()=> nav("/market/packing")} className="store">
                    <img className='c1' src={pack} alt="color masterbatch" />
                    <div className='name-1'>
                        Packing 
                    </div>
                </div>
            </div>

    </div>
  )
}
export default Market;