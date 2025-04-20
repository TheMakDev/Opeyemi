import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Service from './Component/Services/Service'
import Mywork from './Component/Mywork/Mywork'
import COntact from './Component/Contact/COntact'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Mywork/>
      <COntact/>
      <Footer/>
    </div>
  )
}

export default App