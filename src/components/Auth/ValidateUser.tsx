'use client'

import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ToastDefaultOptions } from 'utils/toastOptions'
import { Container, Spinner } from 'reactstrap'
import { useUser } from 'context/UserContext'

const ValidateUser: React.FC = () => {
  const { token } = useParams<{ token: string }>()
  const navigate = useNavigate()
  const { user, login } = useUser()

  useEffect(() => {
    const validateUser = async () => {
      try {
        const response = await fetch(`/api/users/validate/${token}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const data = await response.json()
          toast.success('Votre compte a été validé avec succès !', ToastDefaultOptions)

          if (data.token) {
            const token = data.token
            localStorage.setItem('token', token)
            const payload = JSON.parse(atob(token.split('.')[1]))
            login({
              id: payload.id,
              email: payload.email,
              oldEmail: payload.oldEmail,
              nickname: payload.nickname,
              avatar: payload.avatar,
              roleId: payload.roleId,
              isAdmin: payload.isAdmin,
              validated: payload.validated,
              lastNicknameChange: payload.lastNicknameChange,
              token: payload.token,
            }, token)
            if (!user) navigate('/')
            else navigate('/settings')
          }
        } else {
          const data = await response.json()
          toast.error(data.error || 'Impossible de valider le compte.', ToastDefaultOptions)
          navigate('/login')
        }
      } catch (error) {
        toast.error('Une erreur s\'est produite lors de la validation de votre compte.', ToastDefaultOptions)
        navigate('/login')
      }
    }

    validateUser()
  }, [token, login, navigate])

  return (
    <Container className="loader-container">
      <div className="spinner-wrapper">
        <Spinner animation="border" role="status" className="custom-spinner">
          <span className="sr-only">Validation de votre compte, veuillez patienter...</span>
        </Spinner>
        <div className="loading-text">Validation de votre compte, veuillez patienter...</div>
      </div>
    </Container>
  )
}

export default ValidateUser
