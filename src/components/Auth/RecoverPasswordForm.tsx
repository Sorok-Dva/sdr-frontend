'use client'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RecoverPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log(email)
  }

  return (
    <div className="user-area-all-style recover-password-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-action">
              <div className="form-heading text-center">
                <h3 className="form-title">Reset Password!</h3>

                <p className="reset-desc">
                  Enter the email of your account to reset the password. Then
                  you will receive a link to email to reset the password. If
                  you have any issue about reset password{' '}
                  <Link to="/contact">contact us.</Link>
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
                        placeholder="Enter Email Address"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <Link to="/auth/login" className="now-log-in font-q">
                      Log In
                    </Link>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <p className="now-register">
                      Not a member? &nbsp;
                      <Link to="/auth/sign-up" className="font-q">
                        Register
                      </Link>
                    </p>
                  </div>

                  <div className="col-12">
                    <button className="default-btn btn-two" type="submit">
                      Reset Password
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
