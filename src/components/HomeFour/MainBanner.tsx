'use client'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FsLightbox from 'fslightbox-react'
import { Img as Image } from 'react-image'

import bannerImg from '../../assets/images/home-four/main-img4.png'

// Animate Shape Images
import animateShape1 from '../../assets/images/home-one/shape/animate1.png'
import animateShape2 from '../../assets/images/home-one/shape/animate2.png'
import animateShape3 from '../../assets/images/home-one/shape/animate3.png'

const MainBanner: React.FC = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false)

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={['https://www.youtube.com/embed/bk7McNUjWgw']}
      />

      <div className="main-banner-area main-banner-area-four">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Turn Your Documents Into Data With AI
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida risus commodo
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="700"
                >
                  <Link to="/about" className="default-btn">
                    Learn More
                  </Link>

                  <div
                    onClick={() => setToggler(!toggler)}
                    className="default-btn active popup-youtube"
                  >
                    <i className="bx bx-play"></i> How it work?
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="banner-four-main-img">
                <Image
                  className="animate__animated animate__fadeInRight animate__fast"
                  src={bannerImg}
                  alt="Image"
                  width={1021}
                  height={592}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="over-shape">
          <Image src={animateShape1} alt="Image" width={68} height={74} />
          <Image src={animateShape1} alt="Image" width={68} height={74} />
          <Image src={animateShape2} alt="Image" width={32} height={27} />
          <Image src={animateShape2} alt="Image" width={32} height={27} />
          <Image src={animateShape3} alt="Image" width={150} height={119} />
        </div>
      </div>
    </>
  )
}

export default MainBanner
