'use client'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    const val = type === 'checkbox' ? checked : value
    setFormData((prevData) => ({ ...prevData, [name]: val }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <div className="user-area-all-style log-in-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-action">
              <div className="form-heading text-center">
                <h3 className="form-title">Login to your account!</h3>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
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
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="usernameOrEmail"
                        value={formData.usernameOrEmail}
                        onChange={handleChange}
                        placeholder="Username or Email"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 form-condition">
                    <div className="agree-label">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridCheck"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <Link to="/auth/recover-password" className="forget">
                      Forgot my password?
                    </Link>
                  </div>

                  <div className="col-12">
                    <button className="default-btn btn-two" type="submit">
                      Log In Now
                    </button>
                  </div>

                  <div className="col-12">
                    <p className="account-desc">
                      Not a member?
                      <Link to="/auth/sign-up">Register</Link>
                    </p>
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

export default LoginForm
