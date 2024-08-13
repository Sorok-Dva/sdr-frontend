'use client'

import React from 'react'

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>Email Us:</h3>
                <p>
                  <a href="mailto:hello@jumpx.com">hello@jumpx.com</a>
                </p>
                <p>
                  <a href="mailto:info@jumpx.com">info@jumpx.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us:</h3>
                <p>
                  Tel. + <a href="tel:12318005678990">(123) 1800-567-8990</a>
                </p>
                <p>
                  Tel. + <a href="tel:12415235679874">(124) 1523-567-9874</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>London</h3>
                <p>123, Western Road, Melbourne Australia</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-support"></i>
                <h3>Live Chat</h3>
                <p>live chat all the time with our company 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
