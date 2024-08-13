'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Img as Image } from 'react-image'

const partnerData = [
  {
    image: '/images/brands/brand1.png',
    url: '#',
  },
  {
    image: '/images/brands/brand2.png',
    url: '#',
  },
  {
    image: '/images/brands/brand3.png',
    url: '#',
  },
  {
    image: '/images/brands/brand4.png',
    url: '#',
  },
  {
    image: '/images/brands/brand5.png',
    url: '#',
  },
  {
    image: '/images/brands/brand6.png',
    url: '#',
  },
  {
    image: '/images/brands/brand7.png',
    url: '#',
  },
  {
    image: '/images/brands/brand8.png',
    url: '#',
  },
  {
    image: '/images/brands/brand9.png',
    url: '#',
  },
  {
    image: '/images/brands/brand10.png',
    url: '#',
  },
]

const PartnerSlider: React.FC = () => {
  return (
    <>
      <div className="brand-area-two ptb-100">
        <div className="container">
          <Swiper
            autoHeight={true}
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="brand-slide text-center"
          >
            {partnerData &&
              partnerData.map((value, i) => (
                <SwiperSlide key={i}>
                  <a href={value.url} target="_blank" rel="noreferrer">
                    <Image
                      src={value.image}
                      alt="Image"
                      width={130}
                      height={80}
                    />
                  </a>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default PartnerSlider
