'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

interface MenuItemProps {
  label: string;
  link: string;
  submenu?: {
    label: string;
    link: string;
    className?: string;
    onClick?: () => void;
  }[];
  children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, submenu }) => {
  const location = useLocation()
  const pathname = location.pathname
  
  if (submenu) {
    return (
      <li className="nav-item" key={label}>
        <Link
          to={link}
          className="nav-link"
          onClick={(e) => e.preventDefault()}
        >
          {label} <i className="bx bx-chevron-down"></i>
        </Link>
        
        { submenu && (
          <ul className="dropdown-menu">
            { submenu.map((subItem) => {
              const isActive = pathname === subItem.link
              return (
                <li className="nav-item" key={ subItem.label }>
                  <Link
                    to={ subItem.link }
                    className={ `nav-link ${ isActive ? 'active': '' }` }
                    onClick={ subItem.onClick }  // Transmettre onClick ici
                  >
                    { subItem.label }
                  </Link>
                </li>
              )
            }) }
          </ul>
        ) }
      </li>
    )
  }
  
  return (
    <li className="nav-item" key={ label }>
      <Link to={ link } className="nav-link">
        { label }
      </Link>
    </li>
  )
}

export default MenuItem
