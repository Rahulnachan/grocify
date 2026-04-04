import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Categery from './categery'
import Values from './Values'
import Products from './Products'
import Discount from './Discount'
import Process from './Process'
import Footer from './Footer'


const Home = () => {
    return (
        <div>
            <Hero />
            <Categery/>
            <Values/>
            <Discount/>
            <Process/>
  
        </div>
    )
}

export default Home
