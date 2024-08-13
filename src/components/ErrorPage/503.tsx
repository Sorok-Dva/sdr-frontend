'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { Button, Col, Row } from 'reactstrap'
import { FaDiscord, FaRotateRight } from 'react-icons/fa6'

const CustomErrorContent: React.FC = () => {
  const handleReload = () => {
    window.location.href = '/'
  }
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="error-content-wrap">
              <h1>
                5 <span>0</span> 3
              </h1>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomErrorContent
