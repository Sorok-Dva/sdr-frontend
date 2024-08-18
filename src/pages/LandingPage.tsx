import React from 'react'
import MainBanner from '../components/LandingPage/MainBanner'
import Features from 'components/LandingPage/Features'
// import Newsletter from '../components/Common/Newsletter'
import LastTutorials from 'components/Tutorials/LastTutorials'
const LandingPage : React.FC = () => {

  return (
    <>
      <MainBanner />

      <Features />

      {/*<Newsletter />*/}

      {/*<Testimonials />*/}

      <LastTutorials />
    </>
  )
}

export default LandingPage
