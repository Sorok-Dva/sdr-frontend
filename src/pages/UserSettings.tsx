import React, { useState } from 'react'
import { useAuth } from 'context/AuthContext'
import { toast } from 'react-toastify'
import { ToastDefaultOptions } from 'utils/toastOptions'
import { useNavigate } from 'react-router-dom'
import PageBanner from 'components/Common/PageBanner'
import { Container } from 'reactstrap'
import Settings from 'components/Auth/Settings'

const UserSettingsPage: React.FC = () => {
  const { token } = useAuth()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')

  const handleUsernameChange = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/users/me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username }),
      })

      if (response.ok) {
        toast.success('Pseudo mis à jour avec succès', ToastDefaultOptions)
      } else {
        toast.error('Erreur lors de la mise à jour du pseudo', ToastDefaultOptions)
      }
    } catch (error) {
      toast.error('Erreur lors de la requête', ToastDefaultOptions)
    }
  }

  const handleEmailChange = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/users/change-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        toast.success('Email de validation envoyé, veuillez vérifier votre boîte de réception', ToastDefaultOptions)
      } else {
        toast.error('Erreur lors de la mise à jour de l\'email', ToastDefaultOptions)
      }
    } catch (error) {
      toast.error('Erreur lors de la requête', ToastDefaultOptions)
    }
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/users/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newPassword, currentPassword }),
      })

      if (response.ok) {
        toast.success('Email de réinitialisation envoyé, veuillez vérifier votre boîte de réception', ToastDefaultOptions)
      } else {
        toast.error('Erreur lors de la mise à jour du mot de passe', ToastDefaultOptions)
      }
    } catch (error) {
      toast.error('Erreur lors de la requête', ToastDefaultOptions)
    }
  }

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
            <h2>Paramètres du compte</h2>

            <Settings />
          </div>
        </Container>
      </section>
    </>
  )
}

export default UserSettingsPage
