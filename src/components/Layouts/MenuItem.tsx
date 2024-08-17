'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useUser } from 'context/UserContext'

interface MenuItemProps {
  label: string;
  link: string;
  submenu?: {
    label: string;
    link: string;
    className?: string;
    onClick?: () => void;
  }[];
  onClick?: () => void;
  children?: React.ReactNode;
  isAdmin?: boolean;
  needAuth?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, submenu, isAdmin, needAuth }) => {
  const { user } = useUser()
  const location = useLocation()
  const pathname = location.pathname
  
  if (isAdmin && !user?.isAdmin) {
    return null
  }
  
  if (needAuth && !user) {
    return null
  }
  
  if (submenu) {
    return (
      <li className="nav-item" key={label}>
        <Link
          to={link}
          className="nav-link"
        >
          {label} <i className="bx bx-chevron-down"></i>
        </Link>
        
        <ul className="dropdown-menu">
          { submenu.map((subItem) => {
            const isActive = pathname === subItem.link
            return (
              <li className="nav-item" key={ subItem.label }>
                <Link
                  to={ subItem.link }
                  className={ `nav-link ${ isActive ? 'active': '' }` }
                  onClick={ subItem.onClick }
                >
                  { subItem.label }
                </Link>
              </li>
            )
          }) }
        </ul>
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
