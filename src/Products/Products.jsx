import React from 'react'
import './products.css';
import mb from '../Images/c1.jpg';
import mbone from '../Images/c2.jpg';
import mbsecond from '../Images/c3jpg.jpg';
import anti from '../Images/a1.jpg';
import uv from '../Images/a2.jpg';
import lubri from '../Images/a3.jpg';
import wax from '../Images/a4.jpg';
import block from '../Images/a5.jpg';
import sli from '../Images/a6.jpg';
import tpo from '../Images/b1.jpg';
import elast from '../Images/b2.jpg';
import ema from '../Images/b3.jpg';
import poe from '../Images/b4.jpg';

export const Products = () => {
    return (
        <div className='Square'>
            <div className="our">
                our products
            </div>
            <div className="products">
                <div className="store">
                    <img className='c1' src={mb} alt="color masterbatch" />
                    <div className='name-1'>

                        color masterbatch

                    </div>
                </div>
                <div className="store">
                    <img className='c1' src={mbone} alt="color masterbatch" />
                    <div className='name-1'>

                        black masterbatch

                    </div>
                </div>
                <div className="store">
                    <img className='c1' src={mbsecond} alt="color masterbatch" />
                    <div className='name-1'>
                        speciality masterbatch

                    </div>
                </div>
            </div>
            <div className="additives">
                additive masterbatch
            </div>
            <div className="products">
                <div className="store">
                    <img className='c1' src={anti} alt="color masterbatch" />
                    <div className='name-1'>
                        Antioxidant Additive
                    </div>
                </div>
                <div className="store">
                    <img className='c1' src={uv} alt="color masterbatch" />
                    <div className='name-1'>
                        Uv Additive
                    </div>
                </div>
                {/* <div className="store">
                    <img className='c1' src={lubri} alt="color masterbatch" />
                    <div className='name-1'>
                        Lubricants Additive
                    </div>
                </div> */}
                {/* <div className="store">
                    <img className='c1' src={wax} alt="color masterbatch" />
                    <div className='name-1'>
                        Waxes Additive
                    </div>
                </div> */}
                <div className="store">
                    <img className='c1' src={block} alt="color masterbatch" />
                    <div className='name-1'>
                        Antiblock Additive
                    </div>
                </div>
                <div className="store">
                    <img className='c1' src={sli} alt="color masterbatch" />
                    <div className='name-1'>
                        Slip Additive
                    </div>
                </div>
            </div>
            <div className='additives'>
                Polymers
            </div>
            <div className="products">
                <div className="store">
                    <img className='c1' src={tpo} alt="color masterbatch" />
                    <div className='name-1'>
                    Thermoplastic Polymers
                    </div>
                </div>
                <div className="store">
                    <img className='c1' src={elast} alt="color masterbatch" />
                    <div className='name-1'>
                    Thermoplastic Elastomer
                    </div>
                </div>
                <div className="store">
                    <img className='c1' src={ema} alt="color masterbatch" />
                    <div className='name-1'>
                        Ema Polymers
                    </div>
                </div>
                <div className="store">
                    <img className='c1' src={poe} alt="color masterbatch" />
                    <div className='name-1'>
                        Poe Polymers
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Products;