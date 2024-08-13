'use client'

import React from 'react'
import { Link } from 'react-router-dom'

interface PageBannerProps {
  pageTitle: string;
  homePageUrl: string;
  homePageText: string;
  activePageText: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  return (
    <div className="page-title-area item-bg1">
      <div className="container">
        <div className="page-title-content">
          <h2>{pageTitle}</h2>
          <ul>
            <li>
              <Link to={homePageUrl}>{homePageText}</Link>
            </li>
            <li>{activePageText}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PageBanner

