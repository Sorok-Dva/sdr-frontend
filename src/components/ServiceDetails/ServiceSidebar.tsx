'use client'

import React from 'react'
import { Link } from 'react-router-dom'

const ServiceSidebar: React.FC = () => {
  return (
    <>
      <div className="service-sidebar-area">
        <div className="service-list">
          <h3 className="service-details-title">Facilities</h3>
          <ul>
            <li>
              <Link to="/services/service-details/">
                Technology
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link to="/services/service-details/">
                Tips
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link to="/services/service-details/">
                AI & IT
                <i className="bx bx-check"></i>
              </Link>
            </li>
            <li>
              <Link to="/services/service-details/">
                Solution
                <i className="bx bx-check"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="service-list">
          <h3 className="service-details-title">Contact Info</h3>
          <ul>
            <li>
              +800 603 6035
              <i className="bx bx-phone-call bx-rotate-270"></i>
            </li>
            <li>
              hello@jumpx.com
              <i className="bx bx-envelope"></i>
            </li>
            <li>
              123, Western Road, Australia
              <i className="bx bx-location-plus"></i>
            </li>
            <li>
              9:00 AM – 8:00 PM
              <i className="bx bx-time"></i>
            </li>
          </ul>
        </div>

        <div className="service-list">
          <h3 className="service-details-title">Download Brochures</h3>
          <ul>
            <li>
              <Link to="#">
                PDF File (1)
                <i className="bx bxs-cloud-download"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                PDF File (2)
                <i className="bx bxs-cloud-download"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                PDF File (3)
                <i className="bx bxs-cloud-download"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                PDF File (4)
                <i className="bx bxs-cloud-download"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ServiceSidebar
