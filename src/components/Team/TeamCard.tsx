'use client'

import React from 'react'
import { Img as Image } from 'react-image'

import teamShape from '../../assets/images/team/team-shape.png'

const teamData = [
  {
    image: '/images/team/team1.png',
    name: 'Karen Peter',
    designation: 'CEO & Founder',
    aosDelay: '100',

    socialLinks: [
      {
        iconName: 'bx bxl-facebook',
        url: 'https://facebook.com/',
      },
      {
        iconName: 'bx bxl-twitter',
        url: 'https://twitter.com/',
      },
      {
        iconName: 'bx bxl-linkedin',
        url: 'https://linkedin.com/',
      },
      {
        iconName: 'bx bxl-pinterest-alt',
        url: 'https://pinterest.com/',
      },
    ],
  },
  {
    image: '/images/team/team2.png',
    name: 'Alex Piter',
    designation: 'Executive',
    aosDelay: '200',

    socialLinks: [
      {
        iconName: 'bx bxl-facebook',
        url: 'https://facebook.com/',
      },
      {
        iconName: 'bx bxl-twitter',
        url: 'https://twitter.com/',
      },
      {
        iconName: 'bx bxl-linkedin',
        url: 'https://linkedin.com/',
      },
      {
        iconName: 'bx bxl-pinterest-alt',
        url: 'https://pinterest.com/',
      },
    ],
  },
  {
    image: '/images/team/team3.png',
    name: 'Alisa Maria',
    designation: 'Web Developer',
    aosDelay: '300',

    socialLinks: [
      {
        iconName: 'bx bxl-facebook',
        url: 'https://facebook.com/',
      },
      {
        iconName: 'bx bxl-twitter',
        url: 'https://twitter.com/',
      },
      {
        iconName: 'bx bxl-linkedin',
        url: 'https://linkedin.com/',
      },
      {
        iconName: 'bx bxl-pinterest-alt',
        url: 'https://pinterest.com/',
      },
    ],
  },
  {
    image: '/images/team/team4.png',
    name: 'Peter Jack',
    designation: 'UI/UX Designer',
    aosDelay: '400',

    socialLinks: [
      {
        iconName: 'bx bxl-facebook',
        url: 'https://facebook.com/',
      },
      {
        iconName: 'bx bxl-twitter',
        url: 'https://twitter.com/',
      },
      {
        iconName: 'bx bxl-linkedin',
        url: 'https://linkedin.com/',
      },
      {
        iconName: 'bx bxl-pinterest-alt',
        url: 'https://pinterest.com/',
      },
    ],
  },
  {
    image: '/images/team/team5.png',
    name: 'Anna Dew',
    designation: 'React Developer',
    aosDelay: '500',

    socialLinks: [
      {
        iconName: 'bx bxl-facebook',
        url: 'https://facebook.com/',
      },
      {
        iconName: 'bx bxl-twitter',
        url: 'https://twitter.com/',
      },
      {
        iconName: 'bx bxl-linkedin',
        url: 'https://linkedin.com/',
      },
      {
        iconName: 'bx bxl-pinterest-alt',
        url: 'https://pinterest.com/',
      },
    ],
  },
  {
    image: '/images/team/team6.png',
    name: 'Zeck Keath',
    designation: 'Angular Developer',
    aosDelay: '600',

    socialLinks: [
      {
        iconName: 'bx bxl-facebook',
        url: 'https://facebook.com/',
      },
      {
        iconName: 'bx bxl-twitter',
        url: 'https://twitter.com/',
      },
      {
        iconName: 'bx bxl-linkedin',
        url: 'https://linkedin.com/',
      },
      {
        iconName: 'bx bxl-pinterest-alt',
        url: 'https://pinterest.com/',
      },
    ],
  },
  {
    image: '/images/team/team7.png',
    name: 'Zeet Pew',
    designation: 'Wed Developer',
    aosDelay: '700',

    socialLinks: [
      {
        iconName: 'bx bxl-facebook',
        url: 'https://facebook.com/',
      },
      {
        iconName: 'bx bxl-twitter',
        url: 'https://twitter.com/',
      },
      {
        iconName: 'bx bxl-linkedin',
        url: 'https://linkedin.com/',
      },
      {
        iconName: 'bx bxl-pinterest-alt',
        url: 'https://pinterest.com/',
      },
    ],
  },
  {
    image: '/images/team/team8.png',
    name: 'Peter Jack',
    designation: 'Web Developer',
    aosDelay: '800',

    socialLinks: [
      {
        iconName: 'bx bxl-facebook',
        url: 'https://facebook.com/',
      },
      {
        iconName: 'bx bxl-twitter',
        url: 'https://twitter.com/',
      },
      {
        iconName: 'bx bxl-linkedin',
        url: 'https://linkedin.com/',
      },
      {
        iconName: 'bx bxl-pinterest-alt',
        url: 'https://pinterest.com/',
      },
    ],
  },
]

const TeamCard: React.FC = () => {
  return (
    <>
      <div className="team-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {teamData &&
              teamData.map((value, i) => (
                <div
                  className="col-lg-3 col-sm-6"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-team active">
                    <div className="team-single-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={140}
                        height={140}
                      />

                      <div className="team-img">
                        <Image
                          src={teamShape}
                          alt="Image"
                          width={208}
                          height={198}
                        />
                      </div>
                    </div>

                    <div className="team-content">
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>

                      <ul>
                        {value.socialLinks.map((value, i) => (
                          <li key={i}>
                            <a href={value.url} target="_blank" rel="noreferrer">
                              <i className={value.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link page-links">
                        <i className="bx bx-chevrons-left"></i>
                      </a>
                    </li>

                    <li className="page-item active">
                      <a className="page-link">1</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link">2</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link">3</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamCard
