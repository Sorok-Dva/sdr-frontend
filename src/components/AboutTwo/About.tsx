'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'

import aboutImg from '../../assets/images/about-img-three.png'

const About: React.FC = () => {
  return (
    <>
      <div className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image src={aboutImg} alt="Image" width={375} height={440} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>About Us</span>
                <h2>
                  We Complete Every Project With Extra Care As Customer Need
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Advanced caching
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Unlimited applications
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        PHP 7 ready transfer
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        PHP ready serves
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        24/7 Free extra support
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Optimized stack
                      </li>
                    </ul>
                  </div>
                </div>

                <Link to="/about" className="default-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
