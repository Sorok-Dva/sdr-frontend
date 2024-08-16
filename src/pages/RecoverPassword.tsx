import React from 'react'
import PageBanner from '../components/Common/PageBanner'
import RecoverPasswordForm from 'components/Auth/RecoverPasswordForm'

export default function RecoverPassword () {
  return (
    <>
      <PageBanner
        pageTitle="Réinitialiser votre mot de passe"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText="Réinitialiser votre mot de passe"
      />
      
      <RecoverPasswordForm />
      
    </>
  )
}
