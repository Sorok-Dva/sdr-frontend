import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { FaDiscord, FaRotateRight } from 'react-icons/fa6'

const ServiceUnavailable : React.FC = () => {
  const handleReload = () => {
    window.location.href = '/'
  }
 
  return (
    <section className="section section-shaped section-lg">
      <div className="shape shape-style-1 bg-gradient-default">
        <span/>
        <span/>
        <span/>
        <span/>
        <span/>
        <span/>
        <span/>
        <span/>
      </div>
      <Container className="text-center mt-2 pt-5">
        <Row>
          <Col>
            <img
              src="https://i.pinimg.com/originals/7e/1a/1e/7e1a1e67b467b09d48ae7d2dd40fca1a.gif"
              alt="Service Unavailable GIF"
              className="img-fluid mb-4"
              style={ { maxWidth: '100%', height: 'auto', margin: '0 auto' } }
            />
            <h1>Service Temporarily Unavailable</h1>
            <p>
              We&apos;re sorry, but the service is currently unavailable. Please try again later.
            </p>
            <p>
              <i>You can join our discord server to get notified when service is back.</i>
            </p>
            <Button color="success" onClick={ handleReload } className="col-md-3">
              <FaRotateRight/> Reload Page
            </Button>
            <Button color="primary" href="https://discord.gg/adHWrnzcqd" className="col-md-3">
              <FaDiscord/> Join discord server
            </Button>
          </Col>
        </Row>
      </Container>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-white"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </section>
  )
}

export default ServiceUnavailable
