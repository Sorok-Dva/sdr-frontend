'use client'

import React from 'react'
import { Link } from 'react-router-dom'

const MakeYourBusiness: React.FC = () => {
  return (
    <>
      <div className="business-area business-area-four ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="business-content">
                <h2>Make Your Business More Competitive And Enduring</h2>
              </div>

              <div className="single-business">
                <i className="flaticon-chip"></i>
                <h3>AI Will Automatic Cyber Security Improve</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore. Quis ipsum
                  suspendisse ultrices gravida suspendisse.
                </p>
              </div>

              <div className="single-business">
                <i className="flaticon-blockchain"></i>
                <h3>A Community With A Unique Mission</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore. Quis ipsum
                  suspendisse ultrices gravida suspendisse.
                </p>
              </div>

              <div className="business-btn">
                <Link to="/about-2" className="default-btn">
                  Know Details
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">95%</span>
                    </h2>
                    <p>Project Completed</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">90%</span>
                    </h2>
                    <p>Design</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">85%</span>
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">80%</span>
                    </h2>
                    <p>Award Win</p>
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

export default MakeYourBusiness
