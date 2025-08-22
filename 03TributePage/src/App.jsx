import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TimelineSection from './components/TimelineSection'
import GallerySection from './components/GallerySection'
import AwardsSection from './components/AwardSection'
import QuotesSection from './components/QuotesSection'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <TimelineSection/>
      <GallerySection/>
      <AwardsSection/>
      <QuotesSection/>
      <Footer/>
      
    </>
  )
}

export default App
