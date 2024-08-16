'use client'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ToastOptionsDefault } from 'utils/toastOptions'

const RecoverPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      
      if (response.ok) {
        toast.success('Lien de réinitialisation du mot de passe envoyé à votre adresse e-mail', ToastOptionsDefault)
      } else if (response.status === 400) {
        const errorData = await response.json()
        if (errorData.errors && Array.isArray(errorData.errors)) {
          errorData.errors.forEach((error : { msg : string }) => {
            toast.error(error.msg, ToastOptionsDefault)
          })
        }
      } else {
        const { error } = await response.json()
        toast.error(error)
      }
    } catch (error) {
      toast.error('Une erreur s\'est produite. Veuillez réessayer.', ToastOptionsDefault)
      console.error('Error:', error)
    }
  }

  return (
    <div className="user-area-all-style recover-password-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-action">
              <div className="form-heading text-center">
                <h3 className="form-title">Réinitialiser votre mot de passe</h3>

                <p className="reset-desc">
                  Saisissez l'adresse e-mail de votre compte pour réinitialiser le mot de passe. Ensuite,
                  vous recevrez un lien par e-mail pour réinitialiser le mot de passe. Si
                  vous rencontrez des problèmes concernant la réinitialisation du mot de passe,{' '}
                  <Link to="https://discord.gg/KwVyhHQGAf">contactez-nous sur discord.</Link>
                </p>
              </div>

              <form method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Votre addresse e-mail"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <Link to="/login" className="now-log-in font-q">
                      Connexion
                    </Link>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <p className="now-register">
                      Pas encore membre ? &nbsp;
                      <Link to="/register" className="font-q">
                        S'inscrire
                      </Link>
                    </p>
                  </div>

                  <div className="col-12">
                    <button className="default-btn btn-two" type="submit">
                      Demander une réinitialiser du mot de passe
                    </button>
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

export default RecoverPasswordForm
