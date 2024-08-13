'use client'

import React, { useState } from 'react'
import { Img as Image } from 'react-image'

import contactImg from '../../assets/images/contact-img.png'

interface ContactFormData {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you can handle form submission, for example, send data to a server or perform client-side validation
    console.log(formData)
  }

  return (
    <>
      <div className="main-contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <span>Contact Us</span>
            <h2>Drop us a message for any query</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              quibusdam deleniti porro praesentium. Aliquam minus quisquam velit
              in at nam.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="contact-wrap contact-pages mb-0">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="number"
                            placeholder="Phone number"
                            className="form-control"
                            value={formData.number}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="form-control"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            cols={30}
                            rows={6}
                            placeholder="Write your message..."
                            className="form-control"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-sm-12">
                        <button type="submit" className="default-btn btn-two">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-img">
                <Image src={contactImg} alt="Image" width={807} height={704} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
