'use client'

import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Button } from 'reactstrap'

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
              <h3>Oops ! Page Not Found</h3>
              <p>The page you were looking for could not be found.</p>
              
              <Button color="primary" className="mb-3" href="/">
                <FaHome/> Back to home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomErrorContent
