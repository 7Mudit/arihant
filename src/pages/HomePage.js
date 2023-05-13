import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import { CartContext } from '../context/CartContext.js';
import './HomePage.css';

const HomePage = () => {
  const { isCartOpen } = useContext(CartContext);
  return (
    <div>
        <Navbar/>
        <MainSection/>
        <Footer/>
        <div className='h2-title'>© 2023 Arihant Labs</div>
        {isCartOpen && <Cart />}
    </div>
  )
}

export default HomePage;