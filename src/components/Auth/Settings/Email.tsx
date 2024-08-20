'use client'

import React, { useState } from 'react'
import { Img as Image } from 'react-image'
import { useAuth } from 'context/AuthContext'

import illustrationImg from '../../../assets/images/changeEmail.png'
import { toast } from 'react-toastify'
import { ToastDefaultOptions } from 'utils/toastOptions'
import styled from 'styled-components'
import { useUser } from 'context/UserContext'

const FormGroup = styled.div`
  margin-bottom: 1rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`

const Email: React.FC = () => {
  const { token } = useAuth()
  const { user, setUser } = useUser()

  const [btnDisabled, setBtnDisabled] = useState(false)
  const [email, setEmail] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEmail(value)
    if (user) {
      setUser({
        ...user,
        [name]: value,
        oldEmail: user.email,
      })
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
        body: JSON.stringify({ email: user?.email ?? email }),
      })

      if (response.ok) {
        if (user) {
          const updatedUser = {
            ...user,
            email,
            oldEmail: user!.nickname,
            validated: false,
          }
          setUser(updatedUser)
        }
        setBtnDisabled(true)
        toast.success('Email de validation envoyé, veuillez vérifier votre boîte de réception', ToastDefaultOptions)
      } else {
        const errorData = await response.json()
        toast.error(`Erreur lors de la mise à jour de l'email : ${errorData.error}`, ToastDefaultOptions)
      }
    } catch (error) {
      toast.error('Erreur lors de la requête', ToastDefaultOptions)
    }
  }

  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Changer d'adresse e-mail</h3>
            <p>
              Vous pouvez changer votre adresse e-mail si nécessaire.
            </p>
            <p>
              Une fois la modification effectuée, un e-mail de confirmation
              vous sera envoyé.
              Veuillez vérifier votre boîte de réception et suivre les
              instructions pour valider
              votre nouvelle adresse e-mail.
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Securisé
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Validation par email
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              { !user?.validated ? (
                <div className="alert alert-danger">
                  Veuillez valider votre changement d'email par le biais du lien de confirmation
                  envoyé à votre ancienne adresse e-mail
                </div>
              ) : (
                <form onSubmit={ handleEmailChange }>
                  <FormGroup>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Nouvelle adresse e-mail"
                      onChange={ handleInputChange }
                      required
                      disabled={ btnDisabled }
                    />
                    <div className="text-center">
                      <button className="default-btn" type="submit" disabled={ btnDisabled }>
                        Mettre à jour
                      </button>
                    </div>
                  </FormGroup>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-img right-img">
            <Image src={ illustrationImg } alt="Image" width={ 644 }
              height={ 445 }/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Email
