'use client'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FsLightbox from 'fslightbox-react'
import { Img as Image } from 'react-image'

import bannerMainImg from '../../assets/images/home-three/main-img3.png'
// Banner Shape Images
import shape1 from '../../assets/images/home-three/shape1.png'
import shape2 from '../../assets/images/home-three/shape2.png'

// Animate Shape Images
import animateShape1 from '../../assets/images/home-one/shape/animate1.png'
import animateShape2 from '../../assets/images/home-one/shape/animate2.png'
import animateShape3 from '../../assets/images/home-one/shape/animate3.png'

import bottomShape from '../../assets/images/home-three/bottom-shape.png'

const MainBanner: React.FC = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false)

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={['https://www.youtube.com/embed/bk7McNUjWgw']}
      />

      <div className="main-banner-area main-banner-area-three">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  Secure IT Solutions For A More Secure Environment
                </h1>

                <p
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida risus commodo
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="400"
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

            <div className="col-lg-6">
              {/* Main Image */}
              <div className="banner-main-img banner-one-main-img">
                <Image
                  src={bannerMainImg}
                  alt="Image"
                  width={800}
                  height={555}
                />
              </div>

              {/* Banner Shape Images */}
              <div className="banner-img">
                <Image
                  className="animate__animated animate__fadeInDown animate__fast"
                  src={shape1}
                  alt="Image"
                  width={800}
                  height={608}
                />
                <Image
                  className="animate__animated animate__fadeInDown animate__fast"
                  src={shape2}
                  alt="Image"
                  width={250}
                  height={380}
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

        <div className="white-shape">
          <Image src={bottomShape} alt="Image" width={1920} height={300} />
        </div>
      </div>
    </>
  )
}

export default MainBanner
