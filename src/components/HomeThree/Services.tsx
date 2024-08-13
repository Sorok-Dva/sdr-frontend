'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'

import shapeImg1 from '../../assets/images/shape/services-shape/1.png'
import shapeImg2 from '../../assets/images/shape/services-shape/2.png'
import shapeImg3 from '../../assets/images/shape/services-shape/3.png'
import shapeImg4 from '../../assets/images/shape/services-shape/4.png'
import shapeImg5 from '../../assets/images/shape/services-shape/5.png'
import shapeImg6 from '../../assets/images/shape/services-shape/6.png'

const servicesData = [
  {
    iconName: 'flaticon-chip',
    title: 'Robotics & Drones',
    shortText:
      'Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.',
    viewDetails: '/services/service-details/',
    aosDelay: '100',
  },
  {
    iconName: 'flaticon-vr',
    title: 'Virtually Reality',
    shortText:
      'Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.',
    viewDetails: '/services/service-details/',
    aosDelay: '200',
  },
  {
    iconName: 'flaticon-blockchain',
    title: 'Blockchain Project',
    shortText:
      'Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.',
    viewDetails: '/services/service-details/',
    aosDelay: '300',
  },
  {
    iconName: 'flaticon-target',
    title: 'Image Processing',
    shortText:
      'Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.',
    viewDetails: '/services/service-details/',
    aosDelay: '400',
  },
  {
    iconName: 'flaticon-choice',
    title: 'Order Management',
    shortText:
      'Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.',
    viewDetails: '/services/service-details/',
    aosDelay: '500',
  },
  {
    iconName: 'flaticon-deep-learning',
    title: 'Machine Learning',
    shortText:
      'Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.',
    viewDetails: '/services/service-details/',
    aosDelay: '600',
  },
]

const Services: React.FC = () => {
  return (
    <>
      <div className="offer-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Services</span>
            <h2>Our Professional Services For You</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              architecto quaerat eaque sapiente accusantium ad ut explicabo
              consequuntur fuga quidem? Sint.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="single-offer rounded-5">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link to={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <Image src={shapeImg1} alt="Image" width={300} height={375} />
          <Image src={shapeImg2} alt="Image" width={300} height={375} />
          <Image src={shapeImg3} alt="Image" width={41} height={36} />
          <Image src={shapeImg4} alt="Image" width={20} height={20} />
          <Image src={shapeImg5} alt="Image" width={28} height={30} />
          <Image src={shapeImg6} alt="Image" width={25} height={25} />
        </div>
      </div>
    </>
  )
}

export default Services
