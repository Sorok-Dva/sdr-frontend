'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'

import offerImg from '../../assets/images/offer1.png'

const WhatWeOffer: React.FC = () => {
  return (
    <>
      <div className="industries-serve-area pt-100 pb-0">
        <div className="container">
          <div className="section-title">
            <span>What We Offer</span>
            <h2>Industries We Serve</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates magni fugit, quod iure quibusdam, omnis nisi cum,
              nostrum nulla deleniti mollitia tenetur.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries"
                    data-aos="fade-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-machine-learning"></i>
                    <h3>Heavy Industry</h3>
                    <span>All kind of industry</span>

                    <Link
                      to="/services/service-details/"
                      className="right-icon"
                    >
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries"
                    data-aos="fade-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-artificial-intelligence"></i>
                    <h3>Transportation</h3>
                    <span>All kind of industry</span>

                    <Link
                      to="/services/service-details/"
                      className="right-icon"
                    >
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries"
                    data-aos="fade-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    <i className="flaticon-health"></i>
                    <h3>Health Care</h3>
                    <span>All kind of industry</span>

                    <Link
                      to="/services/service-details/"
                      className="right-icon"
                    >
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries"
                    data-aos="fade-in"
                    data-aos-duration="800"
                    data-aos-delay="900"
                  >
                    <i className="flaticon-automation"></i>
                    <h3>Manufacturing</h3>
                    <span>All kind of industry</span>

                    <Link
                      to="/services/service-details/"
                      className="right-icon"
                    >
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="industries-img"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <Image src={offerImg} alt="Image" width={370} height={390} />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries right-item"
                    data-aos="fade-in"
                    data-aos-duration="800"
                    data-aos-delay="500"
                  >
                    <i className="flaticon-choice"></i>
                    <h3>Logistic</h3>
                    <span>All kind of industry</span>

                    <Link
                      to="/services/service-details/"
                      className="right-icon"
                    >
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries right-item"
                    data-aos="fade-in"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
                    <i className="flaticon-deep-learning"></i>
                    <h3>Real Estate</h3>
                    <span>All kind of industry</span>

                    <Link
                      to="/services/service-details/"
                      className="right-icon"
                    >
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries right-item"
                    data-aos="fade-in"
                    data-aos-duration="800"
                    data-aos-delay="700"
                  >
                    <i className="flaticon-cyber-security"></i>
                    <h3>Banking</h3>
                    <span>All kind of industry</span>

                    <Link
                      to="/services/service-details/"
                      className="right-icon"
                    >
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries right-item"
                    data-aos="fade-in"
                    data-aos-duration="800"
                    data-aos-delay="800"
                  >
                    <i className="flaticon-blockchain"></i>
                    <h3>Automobile</h3>
                    <span>All kind of industry</span>

                    <Link
                      to="/services/service-details/"
                      className="right-icon"
                    >
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeOffer
