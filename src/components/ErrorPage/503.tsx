'use client'

import React, { useContext } from 'react'
import { Button, Col, Row } from 'reactstrap'
import { FaDiscord, FaRotateRight } from 'react-icons/fa6'
import PageBanner from 'components/Common/PageBanner'
import { ThemeContext } from 'context/ThemeContext'

const CustomErrorContent: React.FC = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('ThemeContext not found')
  }

  const { theme } = themeContext

  const handleReload = () => {
    window.location.href = '/'
  }
  return (
    <>
      <PageBanner
        pageTitle="Erreur Serveur"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText="Serveur indisponible"
      />
      <div className={`pt-50 pb-70 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
        <div className="container">
          <div className={`error-area ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`} >
            <Row>
              <Col>
                <img
                  src="https://i.pinimg.com/originals/7e/1a/1e/7e1a1e67b467b09d48ae7d2dd40fca1a.gif"
                  alt="Service Unavailable GIF"
                  className="img-fluid mb-4"
                  style={ { maxWidth: '100%', height: 'auto', margin: '0 auto' } }
                />
                <h1>Service Temporairement Indisponible</h1>
                <p>
                  Nous sommes désolé, mais le serveur est actuellement indisponible. Veuillez réessayer plus tard.
                </p>
                <p>
                  <i>Vous pouvez aussi rejoindre notre serveur discord pour être notifié lorsque le serveur sera de nouveau disponible</i>
                </p>
                <Button color="success" onClick={ handleReload } className="col-md-3">
                  <FaRotateRight/> Actualiser
                </Button>
                <Button color="primary" href="https://discord.gg/J7urdBrNcn" className="col-md-3">
                  <FaDiscord/> Rejoindre le serveur discord
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomErrorContent
