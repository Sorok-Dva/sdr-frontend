'use client'

import React from 'react'

const whyChooseUsData = [
  {
    no: '01',
    iconName: 'flaticon-technical-support',
    title: 'Safe Security',
    shortText:
      'Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    aosDelay: '100',
  },
  {
    no: '02',
    iconName: 'flaticon-shield',
    title: 'Technical Support',
    shortText:
      'Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    aosDelay: '200',
  },
  {
    no: '03',
    iconName: 'flaticon-support',
    title: 'Live Support',
    shortText:
      'Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    aosDelay: '300',
  },
  {
    no: '04',
    iconName: 'flaticon-technical-support',
    title: 'Free Try',
    shortText:
      'Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    aosDelay: '400',
  },
  {
    no: '05',
    iconName: 'flaticon-shield',
    title: 'Advanced Tchnology',
    shortText:
      'Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    aosDelay: '500',
  },
  {
    no: '06',
    iconName: 'flaticon-support',
    title: 'Competitive Pricing',
    shortText:
      'Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    aosDelay: '600',
  },
]

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="choose-ue-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Why Choose Us</span>
            <h2>
              Our Platform Takes Away The Hard Process Of Creating Your Website
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi
              rem quo itaque minus dolorem ratione vero, quisquam reiciendis
              quia atque eos aspernatur.
            </p>
          </div>

          <div className="row align-items-center">
            {whyChooseUsData &&
              whyChooseUsData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="choose-card">
                    <span>
                      {value.no} <i className={value.iconName}></i>
                    </span>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
