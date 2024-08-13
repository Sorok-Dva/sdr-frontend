'use client'

import React from 'react'
import { Img as Image } from 'react-image'

import chooseImg from '../../assets/images/choose-img.png'

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="choose-ue-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div
                className="choose-title"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <span>Why Choose Us</span>
                <h2>
                  Our Platform Takes Away The Hard Process Of Creating Your
                  Website
                </h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="choose-card"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <span>
                  01 <i className="flaticon-technical-support"></i>
                </span>
                <h3>Safe Security</h3>
                <p>
                  Lorem ipsum dolor sit labore amet, consectetur adipiscing
                  elit, sed do eiusmod tempor.
                </p>
              </div>

              <div
                className="choose-card"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <span>
                  02 <i className="flaticon-shield"></i>
                </span>
                <h3>Technical Support</h3>
                <p>
                  Lorem ipsum dolor sit labore amet, consectetur adipiscing
                  elit, sed do eiusmod tempor.
                </p>
              </div>

              <div
                className="choose-card"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <span>
                  03 <i className="flaticon-support"></i>
                </span>
                <h3>Live Support</h3>
                <p>
                  Lorem ipsum dolor sit labore amet, consectetur adipiscing
                  elit, sed do eiusmod tempor.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="choose-img"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <Image src={chooseImg} alt="Image" width={807} height={704} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
