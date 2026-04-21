import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import IRMSection from './components/IRMSection'
import ScannerSection from './components/ScannerSection'
import WhyUs from './components/WhyUs'
import Team from './components/Team'
import OpeningHours from './components/OpeningHours'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingEmergency from './components/FloatingEmergency'

function App() {
  return (
    <div className="app-container">
      <FloatingEmergency />
      <Navbar />
      <Hero />
      <Services />
      <IRMSection />
      <ScannerSection />
      <WhyUs />
      <Team />
      <OpeningHours />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
