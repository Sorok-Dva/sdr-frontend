'use client'

import React, { useState, useEffect } from 'react'
import { Img as Image } from 'react-image'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'

const menus = [
  {
    label: 'Home',
    link: '#',
    submenu: [
      {
        label: 'Home Demo 1',
        link: '/',
      },
      {
        label: 'Home Demo 2',
        link: '/home-2/',
      },
      {
        label: 'Home Demo 3',
        link: '/home-3/',
      },
      {
        label: 'Home Demo 4',
        link: '/home-4/',
      },
      {
        label: 'Home Demo 5',
        link: '/home-5/',
      },
    ],
  },
  {
    label: 'About',
    link: '#',
    submenu: [
      {
        label: 'About Style One',
        link: '/about/',
      },
      {
        label: 'About Style Two',
        link: '/about-2/',
      },
    ],
  },
  {
    label: 'Services',
    link: '#',
    submenu: [
      {
        label: 'Services Style One',
        link: '/services/',
      },
      {
        label: 'Services Style Two',
        link: '/services/style-2/',
      },
      {
        label: 'Services Style Three',
        link: '/services/style-3/',
      },
      {
        label: 'Services Style Four',
        link: '/services/style-4/',
      },
      {
        label: 'Service Details',
        link: '/services/service-details/',
      },
    ],
  },
  {
    label: 'Pages',
    link: '#',
    submenu: [
      {
        label: 'Pricing',
        link: '/pricing/',
      },
      {
        label: 'Team',
        link: '/team/',
      },
      {
        label: 'Testimonials',
        link: '/testimonials/',
      },
      {
        label: 'FAQ',
        link: '/faq/',
      },
      {
        label: 'Login',
        link: '/auth/login/',
      },
      {
        label: 'Sign Up',
        link: '/auth/sign-up/',
      },
      {
        label: 'Terms & Conditions',
        link: '/terms-conditions/',
      },
      {
        label: 'Privacy Policy',
        link: '/privacy-policy/',
      },
      {
        label: 'Coming Soon',
        link: '/coming-soon/',
      },
      {
        label: '404 Error Page',
        link: '/404/',
      },
    ],
  },
  {
    label: 'News',
    link: '#',
    submenu: [
      {
        label: 'News Grid',
        link: '/news/',
      },
      {
        label: 'News Right Sidebar',
        link: '/news/news-right-sidebar/',
      },
      {
        label: 'News Details',
        link: '/news/news-details/',
      },
    ],
  },
  {
    label: 'Contact',
    link: '#',
    submenu: [
      {
        label: 'Contact Style One',
        link: '/contact/',
      },
      {
        label: 'Contact Style Two',
        link: '/contact-2/',
      },
    ],
  },
]


import logo from '../../assets/images/white-logo.png'

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(true)

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
              <Image src={logo} alt="logo" width={150} height={37} />
            </Link>

            {/* Toggle navigation */}
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
              <ul className="navbar-nav m-auto">
                {menus.map((menuItem) => (
                  <MenuItem key={menuItem.label} {...menuItem} />
                ))}
              </ul>

              <div className="others-options">
                <Link to="/auth/login/" className="default-btn">
                  Log In <i className="bx bx-log-in-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
