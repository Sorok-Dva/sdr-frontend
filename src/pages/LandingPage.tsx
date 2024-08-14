import React from 'react'
import MainBanner from '../components/LandingPage/MainBanner'
import Services from '../components/LandingPage/Services'
import Newsletter from '../components/Common/Newsletter'
import News from '../components/Common/News'
const LandingPage : React.FC = () => {
  
  return (
    <>
      <MainBanner />
      
      {/*<Features />*/}
      
      {/* <About />*/}
      
      <Services />
      
      <Newsletter />
      
      {/*<Testimonials />*/}
      
      {/*<WhatWeOffer />*/}
      
      <News />
      
      {/*      <div className="pb-50">
        <Partner />
      </div>*/}
    </>
  )
}

export default LandingPage
