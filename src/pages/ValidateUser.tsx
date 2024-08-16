import React from 'react'
import PageBanner from '../components/Common/PageBanner'
import ValidateUser from 'components/Auth/ValidateUser'

export default function ValidateUserPage () {
  return (
    <>
      <PageBanner
        pageTitle="Validation de votre compte"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText="Validation de votre compte"
      />
      
      <ValidateUser />
    </>
  )
}
