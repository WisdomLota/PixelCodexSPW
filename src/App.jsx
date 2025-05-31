import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { init as initEmailJS } from './services/emailService';
import LandingPage from './pages/LandingPage'
import BootcampPage from './pages/BootcampPage'
import ScrollToTop from './utils/ScrollToTop'
import './styles/glowAnimation.css'

initEmailJS();

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bootcamp" element={<BootcampPage />} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </>
  )
}

export default App
