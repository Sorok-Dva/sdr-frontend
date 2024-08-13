'use client'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here, for example, you can send formData to your backend
    console.log(formData)
  }

  return (
    <div className="user-area-all-style sign-up-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-action">
              <div className="form-heading text-center">
                <h3 className="form-title">Create an account!</h3>
              </div>

              <form method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter Your Username"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12">
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

                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="default-btn btn-two" type="submit">
                      Register Account
                    </button>
                  </div>

                  <div className="col-12">
                    <p className="account-desc">
                      Already have an account?
                      <Link to="/auth/login">Login</Link>
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

export default SignUpForm
