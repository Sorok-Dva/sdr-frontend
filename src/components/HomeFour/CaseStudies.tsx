'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Img as Image } from 'react-image'

import caseImg1 from '../../assets/images/cases/case1.png'
import caseImg2 from '../../assets/images/cases/case2.png'
import caseImg3 from '../../assets/images/cases/case3.png'
import caseImg4 from '../../assets/images/cases/case4.png'

const CaseStudies: React.FC = () => {
  return (
    <>
      <div className="case-area pb-100">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Case</span>
            <h2>Our Recent Case Studies</h2>
          </div>

          <Swiper
            autoHeight={true}
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="case-top-wrap"
          >
            <SwiperSlide>
              <div className="case-wrap case-style-2">
                <div className="single-case">
                  <Image
                    src={caseImg1}
                    alt="Image"
                    className="w-100"
                    width={385}
                    height={400}
                  />

                  <Link
                    to="/case-studies/case-studies-details"
                    className="link-icon"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <h3>
                  <Link to="/case-studies/case-studies-details">
                    Cognitive Architectures
                  </Link>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="case-wrap case-style-2">
                <div className="single-case">
                  <Image
                    src={caseImg2}
                    alt="Image"
                    className="w-100"
                    width={385}
                    height={400}
                  />

                  <Link
                    to="/case-studies/case-studies-details"
                    className="link-icon"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <h3>
                  <Link to="/case-studies/case-studies-details">
                    Image Detection
                  </Link>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="case-wrap case-style-2">
                <div className="single-case">
                  <Image
                    src={caseImg3}
                    alt="Image"
                    className="w-100"
                    width={385}
                    height={400}
                  />

                  <Link
                    to="/case-studies/case-studies-details"
                    className="link-icon"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <h3>
                  <Link to="/case-studies/case-studies-details">
                    Software Liabries
                  </Link>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="case-wrap case-style-2">
                <div className="single-case">
                  <Image
                    src={caseImg4}
                    alt="Image"
                    className="w-100"
                    width={385}
                    height={400}
                  />

                  <Link
                    to="/case-studies/case-studies-details"
                    className="link-icon"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <h3>
                  <Link to="/case-studies/case-studies-details">
                    Architectures Liabries
                  </Link>
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default CaseStudies
