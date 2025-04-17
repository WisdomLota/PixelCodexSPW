import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { init as initEmailJS } from './services/emailService';
import LandingPage from './pages/LandingPage'
import './styles/glowAnimation.css'

initEmailJS();

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </>
  )
}

export default App
