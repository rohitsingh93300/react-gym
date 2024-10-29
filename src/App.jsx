import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Pricing />
    <Testimonials />
    <Contact />
    <Footer/>
  </div>
)

export default App