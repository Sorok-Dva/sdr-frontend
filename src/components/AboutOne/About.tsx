'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'

import aboutImg from '../../assets/images/dreaming.png'

const About: React.FC = () => {
  return (
    <>
      <div className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <div
                  className="about-img"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <Image src={ aboutImg } alt="Image" width={ 490 } height={ 420 }/>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <span>À propos du Sentier des Rêves</span>
                <h2>
                  Découvrez le pouvoir caché de vos nuits.
                </h2>
                <p>
                  "Le Sentier des Rêves" est une plateforme dédiée à l'exploration des rêves et de la conscience.
                  Conçu pour les curieux et les passionnés de l'onirisme, notre site offre des outils et des ressources
                  pour vous aider à naviguer dans le monde fascinant des rêves lucides.
                  Que vous soyez un novice ou un rêveur expérimenté, vous trouverez ici des guides pratiques,
                  un journal de rêve numérique, et une communauté bienveillante pour partager et discuter
                  de vos expériences nocturnes. <br/>
                  <b>Rejoignez-nous sur ce chemin de découverte intérieure et
                    réveillez le rêveur qui sommeille en vous.</b>
                </p>
                
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Tutoriels sur les rêves lucides
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Journal de rêve numérique
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Communauté de partage de rêves
                      </li>
                    </ul>
                  </div>
                  
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Ressources sur l'interprétation des rêves
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Suivi des rêves lucides
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Conseils et astuces personnalisés
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Link to="/register" className="default-btn">
                  Nous rejoindre
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
