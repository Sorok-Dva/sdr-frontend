'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'

import offerImg from '../../../assets/images/offer2.png'

const Transportation: React.FC = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Transportation</h3>
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
                    Security
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Highest
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Priority
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Opportunities
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Creating
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Industries
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

        <div className="col-lg-6">
          <div className="industries-img right-img">
            <Image src={offerImg} alt="Image" width={644} height={445} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Transportation
