'use client'

import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'
import { ThemeContext } from 'context/ThemeContext'

import shapeImg1 from '../../assets/images/shape/services-shape/1.png'
import shapeImg2 from '../../assets/images/shape/services-shape/2.png'
import shapeImg3 from '../../assets/images/shape/services-shape/3.png'
import shapeImg4 from '../../assets/images/shape/services-shape/4.png'
import shapeImg5 from '../../assets/images/shape/services-shape/5.png'
import shapeImg6 from '../../assets/images/shape/services-shape/6.png'

const featuresData = [
  {
    iconName: 'fa fa-moon-stars',
    title: 'Guides de Rêves Lucides',
    shortText:
      'Apprenez à contrôler vos rêves et explorez des mondes fantastiques avec nos guides détaillés.',
    viewDetails: '/guides/reves-lucides',
    aosDelay: '100',
  },
  {
    iconName: 'fa fa-book',
    title: 'Journal de Rêves',
    shortText:
      'Capturez chaque détail de vos rêves et suivez vos progrès avec notre journal interactif.',
    viewDetails: '/dreams',
    aosDelay: '200',
  },
  {
    iconName: 'fa fa-users',
    title: 'Communauté de Rêveurs',
    shortText:
      'Partagez vos expériences oniriques et connectez-vous avec d’autres rêveurs passionnés.',
    viewDetails: '/community',
    aosDelay: '300',
  },
  {
    iconName: 'fa fa-globe',
    title: 'Interprétation des Rêves',
    shortText:
      'Découvrez les significations cachées de vos rêves grâce à nos outils d’interprétation.',
    viewDetails: '/interpretation-des-reves',
    aosDelay: '400',
  },
  {
    iconName: 'fa fa-newspaper',
    title: 'Articles et Conseils',
    shortText:
      'Accédez à une bibliothèque d’articles rédigés par des experts pour enrichir vos connaissances.',
    viewDetails: '/articles',
    aosDelay: '500',
  },
  {
    iconName: 'fa fa-head-side-brain',
    title: 'Consultations avec Experts',
    shortText:
      'Recevez des conseils personnalisés de spécialistes du rêve et de la psychologie.',
    viewDetails: '/consultations',
    aosDelay: '600',
  },
]

const Features: React.FC = () => {
  const themeContext = useContext(ThemeContext)
  if (!themeContext) {
    throw new Error('ThemeContext not found')
  }

  const { theme } = themeContext
  console.log('Rendered with theme:', theme)

  useEffect(() => {
    console.log('Theme has changed:', theme)
  }, [theme])

  return (
    <>
      <div className={`offer-area pt-100 pb-70 ${ theme === 'dark' ? 'dark-bg' : 'light-bg' }`}>
        <div className="container">
          <div className="section-title">
            <span>Nos Services</span>
            <h2>Découvrez Nos Services pour Explorer Vos Rêves</h2>
            <p>
              "Le Sentier des Rêves" vous offre une gamme de services pour vous aider à explorer, comprendre, et partager vos expériences oniriques. Que vous soyez novice ou expert, nous avons quelque chose pour vous.
            </p>
          </div>

          <div className="row justify-content-center">
            {featuresData &&
              featuresData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay={value.aosDelay}
                >
                  <div className={`single-offer ${ theme === 'dark' ? 'bg-dark' : 'bg-light' }`}>
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

export default Features
