import React from 'react'
import Home from '../home/Home'
import Explore from '../explore/Explore'
import Book from '../book/Book'
import WhyUs from '../whyUs/WhyUs'
import About from '../about/About'
import Footer from '../Footer'


function Main() {
  return (
    <>
        {/* <NavBar /> */}
        <Home />
        <Explore />
        <Book />
        <WhyUs />
        <About />
        <Footer />
    </>
  )
}

export default Main