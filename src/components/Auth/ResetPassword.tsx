'use client'

import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ToastDefaultOptions } from 'utils/toastOptions'
import PasswordStrengthChecker from 'components/Common/PasswordStrengthChecker'
import { Button } from 'reactstrap'
import { useUser } from 'context/UserContext'
import { ThemeContext } from 'context/ThemeContext'

const ResetPassword: React.FC = () => {
  const { user } = useUser()
  const { token } = useParams<{ token: string }>()
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('ThemeContext not found')
  }

  const { theme } = themeContext

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  const validatePassword = (password : string) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return re.test(password)
  }

  const isFormValid = () => {
    return (
      validatePassword(password) &&
      (password === confirmPassword)
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas.', ToastDefaultOptions)
      return
    }

    try {
      const response = await fetch(`/api/auth/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        toast.success('Réinitialisation du mot de passe réussie ! Veuillez vous connecter avec votre nouveau mot de passe.', ToastDefaultOptions)
        if (!user) navigate('/login')
        else navigate('/settings')
      } else {
        const data = await response.json()
        if (data.error) {
          toast.error(data.error, ToastDefaultOptions)
        } else {
          toast.error('Impossible de réinitialiser le mot de passe. Veuillez réessayer.', ToastDefaultOptions)
        }
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('An error occurred. Please try again.', ToastDefaultOptions)
    }
  }

  return (
    <div className="user-area-all-style recover-password-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`contact-form-action ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
              <div className="form-heading text-center">
                <h3 className={`form-title${theme === 'dark' ? '-dark' : ''}`}>Réinitialiser votre mot de passe</h3>
                <p className="reset-desc">
                  Saisissez votre nouveau mot de passe ci-dessous.
                </p>
              </div>

              <form method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChangePassword}
                        placeholder="Nouveau mot de passe"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                        placeholder="Confirmer le nouveau mot de passe"
                        required
                      />
                    </div>
                  </div>

                  <PasswordStrengthChecker password={password} theme={theme} />

                  <div className="col-12 text-center">
                    <Button className="mt-4" color="primary" type="submit" disabled={!isFormValid()}>
                      Réinitialiser le mot de passe
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
