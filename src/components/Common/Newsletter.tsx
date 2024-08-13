'use client'

import React from 'react'
import { Img as Image } from 'react-image'

import newsletterImg from '../../assets/images/newsletter.png'
import shape1 from '../../assets/images/shape/newsletter-shape-one.png'
import shape2 from '../../assets/images/shape/newsletter-shape-two.png'

const Newsletter: React.FC = () => {
  return (
    <>
      <div className="newsletter-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="newsletter-wrap"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="700"
              >
                <h2>Inscrivez-vous à notre newsletter !</h2>
                
                <form className="newsletter-form">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    required
                  />
                  <button className="default-btn" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          
            <div className="col-lg-2 ml-auto">
              <div
                className="newsletter-img"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <Image
                  src={ newsletterImg }
                  alt="Image"
                  width={ 230 }
                  height={ 230 }
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="newsletter-shape">
          <Image src={ shape1 } alt="Image" width={ 495 } height={ 495 }/>
          <Image src={ shape1 } alt="Image" width={ 495 } height={ 495 }/>
          <Image src={ shape2 } alt="Image" width={ 300 } height={ 255 }/>
        </div>
      </div>
    </>
  )
}

export default Newsletter
