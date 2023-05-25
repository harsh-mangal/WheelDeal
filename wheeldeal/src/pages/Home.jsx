import React from 'react'
import Navbar from '../components/Navbar'
import MyCarousel from '../components/MyCarousel'
import Poster from '../components/Poster'
import Poster2 from '../components/Poster2'
import Poster3 from '../components/Poster3'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import SpinWheel from './SpinWheel'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <MyCarousel />
      <Poster/>
      <Poster2/>
      <Poster3/>
      <ContactForm/>
      <Footer/>
      {/* <SpinWheel/> */}
    </div>
  )
}

export default Home