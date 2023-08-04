import React from 'react'
import './HomePage.css'
import Navbar from '../../Components/NavBar/Navbar'
import Slider from '../../Components/Slider/Slider'
import Product from '../../Components/Products/Product'
import Categories from '../../Components/Our Best Products/Categories'
const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Slider/>
        <Product/>
        <Categories/>
    </>
  )
}

export default HomePage