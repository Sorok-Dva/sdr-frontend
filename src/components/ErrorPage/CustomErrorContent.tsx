'use client'

import React from 'react'
import { Link } from 'react-router-dom'

const CustomErrorContent: React.FC = () => {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="error-content-wrap">
              <h1>
                4 <span>0</span> 4
              </h1>
              <h3>Oops! Page Not Found</h3>
              <p>The page you were looking for could not be found.</p>

              <Link to="/" className="default-btn btn-two">
                Return To Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomErrorContent
