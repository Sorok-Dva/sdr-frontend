'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'

import logo from '../../assets/images/white-logo.png'
import shape1 from '../../assets/images/shape/footer-shape-one.png'
import shape2 from '../../assets/images/shape/footer-shape-two.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        {/*<div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <Link to="/" className="logo">
                  <Image src={logo} alt="logo" width={150} height={37} />
                </Link>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat molestiae corporis, magni maxime perferendis ducimus
                  totam officiis sit exercitationem sed odio debitis minus
                  cumque dolores dicta.
                </p>

                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link to="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Big Data
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Desktop Application
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Mobile Application
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Product Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Machine Learning
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <h3>Important Links</h3>

                <ul>
                  <li>
                    <Link to="/about">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/team">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonials">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <h3>Information</h3>

                <ul className="information">
                  <li className="address">
                    <i className="flaticon-call"></i>
                    <span>Phone</span>
                    +882-569-756
                  </li>

                  <li className="address">
                    <i className="flaticon-envelope"></i>
                    <span>Email</span>
                    hello@jumpx.com
                  </li>

                  <li className="address">
                    <i className="flaticon-maps-and-flags"></i>
                    <span>Address</span>
                    123, Western Road, Melbourne Australia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>*/}

        <div className="footer-shape">
          <Image src={shape1} alt="Image" width={270} height={235} />
          <Image src={shape2} alt="Image" width={270} height={235} />
        </div>
      </footer>

      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="copy-right">
                <p>Copyright &copy; {currentYear} <b>Sentier des Rêves</b>. Tout droits réservés</p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="privacy">
                <ul>
                  <li>
                    <Link to="/terms-of-service">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Politique de confidentialité</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="designed">
                <p>
                  Designed By <i className="bx bx-heart"></i>{' '}
                  <a href="https://github.com/Sorok-Dva" target="_blank" rel="noreferrer">
                    Sorok-Dva
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
