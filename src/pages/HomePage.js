import React from 'react'
import Navbar from '../components/Navbar'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import './HomePage.css'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <MainSection/>
        <Footer/>
        <div className='h2-title'>© 2023 Arihant Labs</div>
    </div>
  )
}

export default HomePage;