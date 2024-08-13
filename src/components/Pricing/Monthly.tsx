'use client'

import React from 'react'
import { Link } from 'react-router-dom'

const Monthly: React.FC = () => {
  return (
    <>
      <div 
        className="row justify-content-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>Basic</h3>
              <p>Build A Website</p>
            </div>
            <span>
              $29<sub>/m</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                Drag & Drop Builder
              </li>
              <li>
                <i className="bx bx-check"></i>
                Lead Generation & Sales
              </li>
              <li>
                <i className="bx bx-check"></i>
                Boot & Digital Assistants
              </li>
              <li>
                <i className="bx bx-check"></i>
                Customer Service
              </li>
              <li>
                <i className="bx bx-x"></i>
                Up to 1000 Subscribers
              </li>
              <li>
                <i className="bx bx-x"></i>
                Unlimited Broadcasts
              </li>
              <li>
                <i className="bx bx-x"></i>
                Landing Pages & Web Widgets
              </li>
            </ul>

            <Link to="/contact" className="default-btn">
              Get Started
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>Standard</h3>
              <p>Build A Website</p>
            </div>
            <span>
              $59<sub>/m</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                Drag & Drop Builder
              </li>
              <li>
                <i className="bx bx-check"></i>
                Lead Generation & Sales
              </li>
              <li>
                <i className="bx bx-check"></i>
                Boot & Digital Assistants
              </li>
              <li>
                <i className="bx bx-check"></i>
                Customer Service
              </li>
              <li>
                <i className="bx bx-check"></i>
                Up to 1000 Subscribers
              </li>
              <li>
                <i className="bx bx-x"></i>
                Unlimited Broadcasts
              </li>
              <li>
                <i className="bx bx-x"></i>
                Landing Pages & Web Widgets
              </li>
            </ul>

            <Link to="/contact" className="default-btn">
              Get Started
            </Link>

            <strong className="popular">Popular</strong>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>Premium</h3>
              <p>Build A Website</p>
            </div>
            <span>
              $79 <sub>/m</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                Drag & Drop Builder
              </li>
              <li>
                <i className="bx bx-check"></i>
                Lead Generation & Sales
              </li>
              <li>
                <i className="bx bx-check"></i>
                Boot & Digital Assistants
              </li>
              <li>
                <i className="bx bx-check"></i>
                Customer Service
              </li>
              <li>
                <i className="bx bx-check"></i>
                Up to 1000 Subscribers
              </li>
              <li>
                <i className="bx bx-check"></i>
                Unlimited Broadcasts
              </li>
              <li>
                <i className="bx bx-check"></i>
                Landing Pages & Web Widgets
              </li>
            </ul>

            <Link to="/contact" className="default-btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Monthly
