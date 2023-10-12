import React from 'react';
import './home.css';
import Corousel from '../components/Corousel/Corousel';
import doc from '../Images/bg1.jpg';
export const Home = () => {
    const data = [
        {
            name: "BOPP Additives", price: "Crafted to meet the high line speeds of our customers, we are centered around providing unique properties such as slip resistance, material migration prevention, and thus value add to your product."
        },
        {
            name: "Clove", price: "Crafted to meet the high line speeds of our customers, we are centered around providing unique properties such as slip resistance, material migration prevention, and thus value add to your product."
        },
        {
            name: "Clove", price: "Crafted to meet the high line speeds of our customers, we are centered around providing unique properties such as slip resistance, material migration prevention, and thus value add to your product."
        },
        {
            name: "Clove", price: "Crafted to meet the high line speeds of our customers, we are centered around providing unique properties such as slip resistance, material migration prevention, and thus value add to your product."
        },
        {
            name: "Clove", price: "Crafted to meet the high line speeds of our customers, we are centered around providing unique properties such as slip resistance, material migration prevention, and thus value add to your product."
        },
        {
            name: "Clove", price: "Crafted to meet the high line speeds of our customers, we are centered around providing unique properties such as slip resistance, material migration prevention, and thus value add to your product."
        },
    ]
    return (
        <div className='container'>
            <Corousel />
            <div className='heading-1'>
                Vision Advanced Polymers
            </div>

            <div className='paraone'>Where comprehensive technology<br></br>
                meets custom solutions.</div>

            <div className="big">
                At Blend Additives and Compounds, we bring to you a plethora of premium<br></br> quality masterbatches and compounds. They are suitable for diversified<br></br>applications within the packaging industry and other industrial applications.<br></br> These include applications such as ,<span className='orange-1'>BOPP & CPP Films, Food Packaging &<br></br> Agriculture.</span>
            </div>

            <div className="box">
                {
                    data.map(item => {
                        return <Card name={item.name} price={item.price} />
                    })
                }
            </div>
            <div className='grid'>
                <div className="left">
                    <img src={doc} alt="" />
                </div>
                <div className="right">
                    <div className='right-2'>
                        Infrastructure
                    </div>
                    <div className='right-1'>
                        A manufacturing unit that<br></br> inspires possibilities!
                    </div>
                    <div className="right-3">
                        We believe in making the ground we work in a place that inspires.<br></br> Thus, we set up one of the most versatile, fully equipped <span className='orange'> European<br></br> technology-backed</span> plants that boasts of state-of-the-art facilities and<br></br> constructive ergonomics.
                    </div>

                    <div className='main-card'>
                        <div className="card-1">

                            <p>Seamless<br></br>automation</p>
                        </div>

                        <div className="card-1">

                            <p>
                                Enviroment<br></br>Friendly
                            </p>
                        </div>

                        <div className="card-1">

                            <p>Steamline<br></br>Production process</p>
                        </div>

                    </div>
                    <div className="rounded-button">
                        <button className="round">Learn more</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home;

const Card = ({ name, price }) => {
    return (
        <div className="card">
            <div className="text-center semi-bold">
                {name}
            </div>
            <div className="text-center green-color">
                INR {price}
            </div>

        </div>
    )
}
