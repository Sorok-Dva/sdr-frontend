'use client'

import React from 'react'
import { Link } from 'react-router-dom'

const featuresData = [
  {
    iconName: 'fa fa-book',
    title: 'Journal de rêve',
    shortText: 'Utilisez votre journal de rêve interactif pour enregistrer et suivre vos aventures nocturnes. Notez vos rêves, identifiez des motifs récurrents, et explorez les profondeurs de votre subconscient à travers des annotations et des analyses personnelles.',
    viewDetails: '/dreams-diary',
    aosDelay: '300',
  },
  {
    iconName: 'fa fa-user-graduate',
    title: 'Tutoriels',
    shortText:
      'Découvrez nos tutoriels pour vous guider vers la lucidité dans vos rêves. Apprenez les techniques essentielles pour maîtriser l\'art des rêves lucides et explorer en toute conscience vos mondes oniriques.',
    viewDetails: '/tutorials/',
    aosDelay: '600',
  },
  {
    iconName: 'flaticon-success',
    title: 'Entraide',
    shortText:
      'Rejoignez notre communauté d\'entraide, où les rêveurs partagent leurs expériences et se soutiennent mutuellement. Posez vos questions, échangez des conseils et trouvez l\'inspiration auprès de ceux qui explorent les rêves comme vous.',
    viewDetails: '/community/',
    aosDelay: '900',
  },
]

const Features: React.FC = () => {
  return (
    <>
      <div className="features-area mt-minus-70 pb-40">
        <div className="container">
          <div className="row justify-content-center">
            {featuresData &&
              featuresData.slice(0, 3).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6 p-0"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-features">
                    <i className={value.iconName}></i>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>

                    <Link to={value.viewDetails} className="read-more-icon">
                      <span className="flaticon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
