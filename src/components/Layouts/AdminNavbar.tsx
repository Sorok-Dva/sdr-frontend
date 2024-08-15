'use client'

import React, { useState, useEffect } from 'react'
import { Img as Image } from 'react-image'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'

const StyledUl = styled.ul`
  margin-left: 10vh !important;
`

const menus = [
  {
    label: 'Users',
    link: '/admin/users',
    isAdmin: true,
  },
  {
    label: 'Dreams',
    link: '/admin/dreams',
    isAdmin: true,
  },
  {
    label: 'Reports',
    link: '/admin/reports',
    isAdmin: true,
  },
  {
    label: 'Tutorials',
    link: '/admin/tutorials/',
    isAdmin: true,
    submenu: [
      {
        label: 'Add',
        link: '/admin/tutorials/add',
      },
      {
        label: 'List',
        link: '/admin/tutorials/',
      },
      {
        label: 'Approval queue',
        link: '/admin/tutorials/approval-queue',
      },
    ],
  },
  {
    label: 'Categories',
    link: '/admin/categories/list',
    isAdmin: true,
    submenu: [
      {
        label: 'Add',
        link: '/admin/categories/add',
      },
      {
        label: 'List',
        link: '/admin/categories/list',
      },
    ],
  },
  {
    label: 'News',
    link: '#',
    submenu: [
      {
        label: 'Tutorials Grid',
        link: '/news/',
      },
      {
        label: 'Tutorials Right Sidebar',
        link: '/news/news-right-sidebar/',
      },
      {
        label: 'Tutorials Details',
        link: '/news/news-details/',
      },
    ],
  },
]


import logo from '../../assets/img/logo.png'
import { useUser } from 'context/UserContext'
import styled from 'styled-components'

const Navbar: React.FC = () => {
  const { user, logout } = useUser()
  const [menu, setMenu] = useState<boolean>(true)
  
  const handleLogout = () => {
    logout()
    localStorage.removeItem('token')
  }
  
  const toggleNavbar = () => {
    setMenu(!menu)
  }
  
  useEffect(() => {
    const elementId = document.getElementById('navbar')
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId?.classList.add('is-sticky')
      } else {
        elementId?.classList.remove('is-sticky')
      }
    })
  }, [])
  
  const classOne = menu
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show'
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right'
  
  return (
    <>
      <div id="navbar" className="navbar-area fixed-top">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <Image src={logo} alt="logo" width={300} height={50} />
            </Link>
            
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            
            <div className={classOne} id="navbarSupportedContent">
              <StyledUl className="navbar-nav m-auto">
                {menus.map((menuItem) => (
                  <MenuItem key={menuItem.label} {...menuItem} />
                ))}
              </StyledUl>
              
              <div className="others-options">
                <ul className="navbar-nav m-auto">
                  { [
                    {
                      label: 'Admin',
                      link: '#',
                      className: 'default-btn',
                      submenu: [
                        {
                          label: 'Back on SDR',
                          link: '/',
                        },
                        {
                          label: 'Logout',
                          link: '/',
                          onClick: handleLogout
                        },
                      ],
                    },
                  ].map((menuItem) => (
                    <MenuItem key={ user?.nickname } { ...menuItem }>
                      { menuItem.submenu.map((subItem) => (
                        <li key={ subItem.label }>
                          <Link to={ subItem.link } onClick={ subItem.onClick }>
                            { subItem.label }
                          </Link>
                        </li>
                      )) }
                    </MenuItem>
                  )) }
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
