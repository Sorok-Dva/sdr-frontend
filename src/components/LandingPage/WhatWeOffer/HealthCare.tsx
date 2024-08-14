'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'

import offerImg from '../../../assets/images/offer3.png'

const HealthCare: React.FC = () => {
  return (
    <>
      <div className="row  align-items-center">
        <div className="col-lg-6">
          <div className="industries-img left-img">
            <Image src={offerImg} alt="Image" width={620} height={445} />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Health Care</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              atque recusandae esse alias reprehenderit.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              doloribus molestias illo ad aperiam quo natus voluptatum, eos
              laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus
              itaque eos!
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Creating
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Consectetur
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Adipisicing
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Artificial
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Industry
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Opportunities
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link to="/services" className="default-btn">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HealthCare
