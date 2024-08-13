'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'

import mainImg from '../../assets/images/home-one/main-img1.png'

// Banner Shape Images
import shape1 from '../../assets/images/home-one/shape1.png'
import shape2 from '../../assets/images/home-one/shape2.png'
import shape3 from '../../assets/images/home-one/shape3.png'
import shape4 from '../../assets/images/home-one/shape4.png'

// Animate Shape Images
import animateShape1 from '../../assets/images/home-one/shape/animate1.png'
import animateShape2 from '../../assets/images/home-one/shape/animate2.png'
import animateShape3 from '../../assets/images/home-one/shape/animate3.png'

import bottomShape from '../../assets/images/home-one/bottom-shape.png'

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner-area main-banner-area-one">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Le Sentier des Rêves
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida risus commodo
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <Link to="/about" className="default-btn">
                    Learn More
                  </Link>

                  <Link to="/contact" className="default-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Main Image */}
              <div className="banner-main-img banner-one-main-img">
                <Image
                  src={mainImg}
                  alt="Image"
                  width={720}
                  height={460}
                />
              </div>

              {/* Banner Shape Images */}
              <div className="banner-img">
                {/*<Image
                  className="animate__animated animate__fadeInUp animate__fast"
                  src={shape1}
                  alt="Image"
                  width={1083}
                  height={54}
                />
                <Image
                  className="animate__animated animate__fadeInUp animate__fast"
                  src={shape2}
                  alt="Image"
                  width={400}
                  height={600}
                />
                <Image
                  className="animate__animated animate__fadeInRight animate__fast"
                  src={shape3}
                  alt="Image"
                  width={250}
                  height={375}
                />*/}
                <Image
                  className="animate__animated animate__fadeInRight animate__fast"
                  src={shape4}
                  alt="Image"
                  width={200}
                  height={470}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="over-shape">
          <Image
            src={animateShape1}
            alt="Image"
            width={68}
            height={74}
          />
          <Image
            src={animateShape2}
            alt="Image"
            width={32}
            height={27}
          />
          <Image
            src={animateShape3}
            alt="Image"
            width={150}
            height={119}
          />
        </div>

        <div className="white-shape">
          <Image
            src={bottomShape}
            alt="Image"
            width={1920}
            height={308}
          />
        </div>
      </div>
    </>
  )
}

export default MainBanner
