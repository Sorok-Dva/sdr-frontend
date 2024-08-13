'use client'

import React, { useState } from 'react'

interface FormValues {
  name: string;
  email: string;
  phone_number: string;
  msg_subject: string;
  message: string;
}

const AskQuestionForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone_number: '',
    msg_subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formValues)
  }

  return (
    <div className="ask-question">
      <h3>Ask Questions</h3>
      
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                required
                placeholder="Your Name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                required
                placeholder="Your Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="form-group">
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                required
                className="form-control"
                placeholder="Your Phone"
                value={formValues.phone_number}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="form-group">
              <input
                type="text"
                name="msg_subject"
                id="msg_subject"
                className="form-control"
                required
                placeholder="Your Subject"
                value={formValues.msg_subject}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                id="message"
                cols={30}
                rows={5}
                required
                placeholder="Your Message"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <button type="submit" className="default-btn btn-two">
              <span className="label">Send Message</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AskQuestionForm
