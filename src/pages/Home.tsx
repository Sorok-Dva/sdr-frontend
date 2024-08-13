import React from 'react'
import MainBanner from '../components/HomeOne/MainBanner'
import Features from '../components/HomeOne/Features'
import About from '../components/HomeOne/About'
import Services from '../components/HomeOne/Services'
import Newsletter from '../components/Common/Newsletter'
import Testimonials from '../components/Common/Testimonials'
import WhatWeOffer from '../components/HomeOne/WhatWeOffer'
import News from '../components/Common/News'
import Partner from '../components/Common/Partner'
const Home : React.FC = () => {
  
  return (
    <>
      <MainBanner />
      
      <Features />
      
      <About />
      
      <Services />
      
      <Newsletter />
      
      <Testimonials />
      
      <WhatWeOffer />
      
      <News />
      
      <div className="pb-50">
        <Partner />
      </div>
    </>
  )
}

export default Home
