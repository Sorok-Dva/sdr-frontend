import React from 'react'
import MainBanner from '../components/HomeOne/MainBanner'
import Services from '../components/HomeOne/Services'
import Newsletter from '../components/Common/Newsletter'
import News from '../components/Common/News'
const Home : React.FC = () => {
  
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

export default Home
