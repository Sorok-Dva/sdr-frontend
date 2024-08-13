'use client'

import React from 'react'
import { Link } from 'react-router-dom'

const CTA: React.FC = () => {
  return (
    <>
      <div className="cta-area ptb-100">
        <div className="container">
          <div className="cta-content">
            <span>So What is Next?</span>
            <h3>Are You Ready? Let's get to work!</h3>
          </div>
          <div className="cta-btn-box">
            <Link to="/contact" className="default-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CTA
