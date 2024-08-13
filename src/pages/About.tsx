import React from 'react'
import PageBanner from '../components/Common/PageBanner'
import About from '../components/AboutOne/About'
// import Testimonials from '../components/Common/Testimonials'
import Team from '../components/Common/TeamTwo'
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
