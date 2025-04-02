import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import JoinCommunity from '../components/JoinCommunity'
import PixelCodexAccordion from '../components/PixelCodexAccordion'

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-[#1e1e1e] text-white'>
        <NavBar />
        <HeroSection />
        <PixelCodexAccordion />
        <JoinCommunity />
    </div>
  )
}

export default LandingPage