import React from 'react'
import PageBanner from '../components/Common/PageBanner'
import About from '../components/About/About'
// import Testimonials from '../components/Common/Testimonials'
import Team from 'components/Common/Contributors'
// import Partner from '../components/Common/Partner'

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="À props du Sentier des Rêves"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText="À props du Sentier des Rêves"
      />

      <About />

      {/*<Testimonials />*/}

      <Team />

      {/* <div className="pb-50">
        <Partner />
      </div>*/}

    </>
  )
}
