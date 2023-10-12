import React from 'react'
import{Home} from './Home/Home';
import{About} from './About/About';
import{Products} from './Products/Products';
import{Market} from './Markets/Market';
import{Contact} from './Contact/Contact';
import{Navbar} from './components/Navbar/Navbar';
import{BrowserRouter,Route,Routes, useNavigate} from "react-router-dom";
import Footer from './components/Footer/Footer';
import { Compounding } from './Markets/Compounding';
import { Recycling } from './Markets/Recycling';
import { Packing } from './Markets/Packing';
import { Agriculture } from './Markets/Agriculture';
import { Electronic } from './Markets/Electronic';

export const App = () => {
    return (

    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/markets" element={<Market/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/market/compounding" element={<Compounding/>} />
        <Route path="/market/electronic" element={<Electronic/>} />
        <Route path="/market/agriculture" element={<Agriculture/>} />
        <Route path="/market/packing" element={<Packing/>} />
        <Route path="/market/recycling" element={<Recycling/>} />


      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}
export default App