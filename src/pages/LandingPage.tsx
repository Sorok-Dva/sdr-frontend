import React from 'react'
import MainBanner from '../components/LandingPage/MainBanner'
import Services from '../components/LandingPage/Services'
// import Newsletter from '../components/Common/Newsletter'
import LastTutorials from 'components/Common/LastTutorials'
const LandingPage : React.FC = () => {

  return (
    <>
      <MainBanner />

      <Services />

      {/*<Newsletter />*/}

      {/*<Testimonials />*/}

      <LastTutorials />
    </>
  )
}

export default LandingPage
