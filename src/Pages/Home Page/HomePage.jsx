import React from 'react'
import './HomePage.css'
import Navbar from '../../Components/NavBar/Navbar'
import Slider from '../../Components/Slider/Slider'
import Product from '../../Components/Products/Product'
const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Slider/>
        <Product/>
    </>
  )
}

export default HomePage