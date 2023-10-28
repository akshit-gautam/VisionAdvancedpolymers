import React from 'react';
import './home.css';
import Corousel from '../components/Corousel/Corousel';
import doc from '../Images/bg1.jpg';
export const Home = () => {
    const data = [
        {
            name: "Color & Effect masterbatches", price: "We offer cost-effective solutions for improvising the visual appeal , functionality, and performance of products ,RAL & Pantone shade card Equivalents ,Fluorescent Application, Transparent pearlescent."
        },
        {
            name: "Black & white Masterbatch", price:"PP , PE , ABS , PC , based masterbatches highly filled with titanium dioxide .Most suitable for Like-wise application, black masterbatch good in carbon percentage width permium quality within affordable prices."
        },
        {
            name: "Functional Masterbatch", price: " These Masterbatch provide special function to plastic product Below products are is available according to customer UV stabilizer ,Flame Retardant , Anti Static , Anti Fogging ,Anti oxidants, Anti blocking, Anti biotic."
        },
        {
            name: "Filler Masterbatch", price: "Calcium Carbonate Filler Masterbatch(CaCo3) ,Talc Masterbatch ,Barium sulfate(BaSo4)Masterbatch ,PP Filler Masterbatch-PP Calcium Carbonate Masterbatch ,PE Filler Masterbatch . "
        },
        {
            name: "Plastic Additives", price: "Flame Retardant , Nucliating Agent , Uv Stablizer , Quality And Versatlity of Our Products Set Standard For Applications in Diverse Sectors to achieve high performance from the plastic for a specific Purpose .  "
        },
        {
            name: "Speciality Polymers", price: " Thermoplastic Elastomers- COPE ,TPE-E , TPE-S, TPV,EPDM+PP ,TPU  , EMA , Plastomers-POE , TPO , PEBA , TPE-A , TPE-U , TPE-O, TPSIV(Thermoplastic Silicon Vulcanizate), Performance Materials -Vistamaxx . "
        },
    ]
    return (
        <div className='container'>
            <Corousel />
            <div className='heading-1 text-center bold font-32 bold'>
                Vision Advance Polymers<br></br><div className='slogan'>Performance | Solutions | Trust</div>
            </div>

            <div className='paraone text-center bold font-40'>
                Performance In Plastic<br></br>
                Masterbatches  & Compound.
            </div>

            <div className="big text-center semi-bold">
             To express everything with color,we always find better and efficient way to provide desirable color<br></br>Technologies are not only improving existing product's functional aspect<br></br> but also making progress and innovation for human being and natural environment.<br></br>applications within the packaging industry and other industrial applications.<br></br> These include applications such as ,<span className='orange-1 semi-bold'> Industrial packing, House Hold Appliances, Compounding &<br></br> Agriculture.</span>
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
                    <div className='right-2 font-24 bold'>
                        Infrastructure
                    </div>
                    <div className='right-1 font-40'>
                        A manufacturing unit that<br></br> inspires possibilities!
                    </div>
                    <div className="right-3 ">
                        We believe in making the ground we work in a place that inspires.<br></br> Thus, we set up one of the most versatile, fully equipped <span className='orange semi-bold'> Indian<br></br> Technology-backed</span> plants that boasts of state-of-the-art facilities and<br></br> constructive ergonomics.
                    </div>

                    {/* <div className='main-card'>
                        <div className="card-1">

                            <p>Looks<br></br>automation</p>
                        </div>

                        <div className="card-1">

                            <p>
                                Feels<br></br>Friendly
                            </p>
                        </div>

                        <div className="card-1">

                            <p>Focus<br></br>Production process</p>
                        </div>

                    </div> */}
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
            <div className="text-center semi-bold font-20 blue-1">
                {name}
            </div>
            <div className="text-center">
                 {price}
            </div>

        </div>
    )
}
