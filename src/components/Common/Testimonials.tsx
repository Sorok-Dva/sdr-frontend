'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Img as Image } from 'react-image'

const testimonialsData = [
  {
    image: '/images/clients/client1.jpg',
    name: 'Alen Meair',
    designation: 'Web Developer',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
  {
    image: '/images/clients/client2.jpg',
    name: 'Axon Detos',
    designation: 'CEO of ET',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
  {
    image: '/images/clients/client3.jpg',
    name: 'John Dona',
    designation: 'UI/UX Designer',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
  {
    image: '/images/clients/client4.jpg',
    name: 'Jon Smith',
    designation: 'ReactJS Developer',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
]

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="client-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h2>What Clients Say About Us</h2>
          </div>

          <Swiper
            autoHeight={true}
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slide"
          >
            {testimonialsData &&
              testimonialsData.slice(0, 10).map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="single-client">
                    <i className="quotes flaticon-left-quotes-sign"></i>
                    <p>{value.feedbackText}</p>

                    <ul>
                      {value.rating.map((value, i) => (
                        <li key={i}>
                          <i className={value.iconName}></i>
                        </li>
                      ))}
                    </ul>

                    <div className="client-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={70}
                        height={70}
                      />
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonials
