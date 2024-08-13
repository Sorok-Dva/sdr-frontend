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
                  "Le Sentier des Rêves" est une plateforme dédiée à l&apos;exploration des rêves et de la conscience.
                  Conçu pour les curieux et les passionnés de l&apos;onirisme, notre site offre des outils et des ressources
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
                        Ressources sur l&apos;interprétation des rêves
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
      <div className="dreams-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="dreams-content">
                <h2>Explorez et Partagez vos Rêves Lucides</h2>
              </div>
              
              <div className="single-dreams-feature">
                <i className="flaticon-dream"></i>
                <h3>Tutoriels pour Rêves Lucides</h3>
                <p>
                  Apprenez à maîtriser l&apos;art des rêves lucides grâce à nos tutoriels complets. Chaque étape est
                  expliquée pour vous aider à explorer vos rêves en toute conscience.
                </p>
              </div>
              
              <div className="single-dreams-feature">
                <i className="flaticon-community"></i>
                <h3>Une Communauté pour Partager vos Expériences</h3>
                <p>
                  Rejoignez notre communauté de rêveurs et partagez vos récits oniriques. Découvrez les expériences des
                  autres utilisateurs et trouvez l&apos;inspiration pour vos propres rêves.
                </p>
              </div>
              
              <div className="dreams-btn">
                <Link to="/register" className="default-btn">
                  Nous rejoindre
                </Link>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="row">
                <div
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">150+</span>
                    </h2>
                    <p>Tutoriels Disponibles</p>
                  </div>
                </div>
                
                <div
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">500+</span>
                    </h2>
                    <p>Utilisateurs Actifs</p>
                  </div>
                </div>
                
                <div
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">1200+</span>
                    </h2>
                    <p>Rêves Partagés</p>
                  </div>
                </div>
                
                <div
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">50+</span>
                    </h2>
                    <p>Conseils d&apos;Experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
