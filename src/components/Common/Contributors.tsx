'use client'

import React, { useEffect, useState } from 'react'
import { Img as Image } from 'react-image'

import teamShape from '../../assets/images/team/team-shape.png'

const contributors = [
  {
    image: '/images/team/42.png',
    name: 'Sorok-Dva',
    designation: 'CEO & Founder',
    aosDelay: '100',

    socialLinks: [
      {
        iconName: 'bx bxl-github',
        url: 'https://github.com/Sorok-Dva',
      },
      {
        iconName: 'bx bxl-patreon',
        url: 'https://www.patreon.com/sorokdva',
      },
    ],
  },
]

const Contributors: React.FC = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.body.className = savedTheme + '-theme'
  }, [])
  return (
    <>
      <div className="team-area pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Équipe</span>
            <h2>Découvrez le Créateur Inspiré</h2>
            <p>
              &quot;Le Sentier des Rêves&quot; est le fruit de ma passion pour l&apos;onirisme et les rêves lucides.
              En tant que créateur unique de cette plateforme, je m&apos;efforce de vous offrir les meilleures ressources et
              une communauté accueillante pour explorer et partager vos expériences oniriques.
              <br/>
              Rejoignez-moi dans cette aventure fascinante où chaque rêve devient une découverte.
            </p>
          </div>

          <div className={`row justify-content-center ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
            {contributors &&
              contributors.slice(0, 3).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className={`single-team active ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Contributors
