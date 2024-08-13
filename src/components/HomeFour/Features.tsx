'use client'

import React from 'react'
import { Link } from 'react-router-dom'

const Features: React.FC = () => {
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 p-0">
              <div className="single-features">
                <i className="flaticon-cloud-computing-1"></i>
                <h3>Data Science</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link to="/services/service-details/" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 p-0">
              <div className="single-features">
                <i className="flaticon-engineer"></i>
                <h3>Data Engineer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link to="/services/service-details/" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 p-0">
              <div className="single-features">
                <i className="flaticon-success"></i>
                <h3>Facing AI Challenges</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link to="/services/service-details/" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
