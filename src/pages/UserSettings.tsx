import React from 'react'
import PageBanner from 'components/Common/PageBanner'
import { Container } from 'reactstrap'
import Settings from 'components/Auth/Settings/index'

const UserSettingsPage: React.FC = () => {
  return (
    <>
      <PageBanner
        pageTitle="Paramètres du compte"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText="Paramètres du compte"
      />
      <section className="section section-shaped section-lg">
        <Container className="pt-lg-7">
          <div className="settings-page">
            <Settings />
          </div>
        </Container>
      </section>
    </>
  )
}

export default UserSettingsPage
