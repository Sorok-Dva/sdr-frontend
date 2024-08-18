'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from 'context/UserContext'
import { toast } from 'react-toastify'
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText } from 'reactstrap'
import PageBanner from '../Common/PageBanner'
import { ToastDefaultOptions } from 'utils/toastOptions'

const LoginForm: React.FC = () => {
  const { login } = useUser()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mainRef.current) {
      document.documentElement.scrollTop = 0
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0
      }
      mainRef.current.scrollTop = 0
    }
  }, [])

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (response.ok) {
        const data = await response.json()
        const token = data.token
        const payload = JSON.parse(atob(token.split('.')[1]))
        login({
          id: payload.id,
          email: payload.email,
          nickname: payload.nickname,
          avatar: payload.avatar,
          roleId: payload.roleId,
          isAdmin: payload.isAdmin,
        }, token)

        toast.success(`Vous êtes maintenant connecté ! Bienvenue ${payload.nickname}.`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'colored',
        })

        navigate('/')
      } else if (response.status === 400) {
        const errorData = await response.json()
        if (errorData.errors && Array.isArray(errorData.errors)) {
          errorData.errors.forEach((error : { msg : string }) => {
            toast.error(error.msg, ToastDefaultOptions)
          })
        } else if (errorData.error) {
          toast.error(errorData.error, { ...ToastDefaultOptions, autoClose: 30000 })
        }
      }
    } catch (err) {
      console.log(err)
      setError('An error occurred while attempting to log you in.')
    }
  }
  return (
    <>
      <PageBanner
        pageTitle="Connexion"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText="Connexion"
      />
      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">Se connecter</h3>
                </div>

                { error && <div className="alert alert-danger text-center">{ error }</div> }
                <Form role="form" onSubmit={ handleSubmit }>
                  <div className="row">
                    {/*<div className="col-lg-4 col-md-4 col-sm-12">
                      <a
                        href="https://www.google.com/"
                        className="default-btn mb-30"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-google"></i> Google
                      </a>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <a
                        href="https://www.facebook.com/"
                        className="default-btn mb-30"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i> Facebook
                      </a>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <a
                        href="https://www.twitter.com/"
                        className="default-btn mb-30"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i> Twitter
                      </a>
                    </div>*/}

                    <div className="col-12">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupText>
                            <i className="ni ni-email-83"/>
                          </InputGroupText>
                          <Input
                            placeholder="Email ou pseudo"
                            type="text"
                            value={ username }
                            onChange={ (e) => setUsername(e.target.value) }
                          />
                        </InputGroup>
                      </FormGroup>
                    </div>

                    <div className="col-12">
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open"/>
                          </InputGroupText>
                          <Input
                            placeholder="Mot de passe"
                            type={ showPassword ? 'text': 'password' }
                            autoComplete="off"
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) }
                          />
                          <InputGroupText>
                            <Button
                              color="secondary"
                              outline
                              onClick={ () => setShowPassword(!showPassword) }
                            >
                              { showPassword ? 'Hide': 'Show' }
                            </Button>
                          </InputGroupText>
                        </InputGroup>
                      </FormGroup>
                    </div>

                    <div className="col-lg-6 col-sm-6 form-condition">
                      <div className="agree-label">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="rememberMe"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
                            Se souvenir de moi
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <Link to="/recover-password" className="forget">
                        Mot de passe oublié ?
                      </Link>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Connexion
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Pas encore membre ?
                        <Link to="/register">S'inscrire</Link>
                      </p>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
