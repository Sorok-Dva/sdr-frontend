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
    label: 'Accueil',
    link: '/',
  },
  {
    label: 'Mon journal de rêves',
    link: '/dream-diary',
    needAuth: true,
  },
  {
    label: 'Tutoriels',
    link: '/tutorials',
    submenu: [
      {
        label: 'Liste',
        link: '/tutorials/',
      },
      {
        label: 'Les plus vus',
        link: '/tutorials/most-viewed/',
      },
      {
        label: 'Les plus aimés',
        link: '/tutorials/most-liked/',
      },
    ],
  },
  {
    label: 'Communauté',
    link: '#',
    submenu: [
      {
        label: 'Liste des rêves',
        link: '/community/dreams',
      },
      {
        label: 'Classement des utilisateurs',
        link: '/community/leaderboard',
      },
    ],
  },
  {
    label: 'Admin',
    isAdmin: true,
    link: '/admin',
    submenu: [
      {
        label: 'Users',
        link: '/admin/users',
      },
      {
        label: 'Add Tutorial',
        link: '/admin/tutorials/add',
      },
      {
        label: 'Dreams',
        link: '/admin/dreams/',
      },
      {
        label: 'Reports',
        link: '/admin/reports/',
      },
    ],
  },
  {
    label: 'À propos',
    link: '/about',
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
                {user ? (
                  <>
                    <ul className="navbar-nav m-auto">
                      {[
                        {
                          label: user.nickname,
                          link: '#',
                          className: 'default-btn',
                          submenu: [
                            {
                              label: 'Mon profil',
                              link: `/user/${user.nickname}`,
                            },
                            {
                              label: 'Paramètres',
                              link: '/settings/',
                            },
                            {
                              label: 'Déconnexion',
                              link: '/',
                              onClick: handleLogout
                            },
                          ],
                        },
                      ].map((menuItem) => (
                        <MenuItem key={ user.nickname } { ...menuItem }>
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
                  </>
                ): (
                  <>
                    <Link to="/register/" className="primary-btn">
                      Inscription <i className="bx bx-user-plus"></i>
                    </Link>{' '}
                    <Link to="/login/" className="default-btn">
                      Connexion <i className="bx bx-log-in-circle"></i>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
