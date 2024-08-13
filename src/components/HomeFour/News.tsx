'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'

import blogImg1 from '../../assets/images/blog/blog1.png'
import blogImg2 from '../../assets/images/blog/blog2.png'
import blogImg3 from '../../assets/images/blog/blog3.png'

const News: React.FC = () => {
  return (
    <>
      <div className="news-area pt-100 pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Latest News</span>
            <h2>Our Recent News </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              ipsum fugit temporibus possimus itaque accusamus voluptatibus
              dignissimos nobis eaque.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/news/news-details">
                    <Image
                      src={blogImg1}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>20 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 2 Comments
                    </li>
                  </ul>

                  <Link to="/news/news-details">
                    <h3>Is Machine Learning Right For You</h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga veritatis veniam corrupti perferendis minima in.
                  </p>

                  <Link to="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/news/news-details">
                    <Image
                      src={blogImg2}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>21 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 3 Comments
                    </li>
                  </ul>

                  <Link to="/news/news-details">
                    <h3>The State Of Artificial Intelligence</h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga veritatis veniam corrupti perferendis minima in.
                  </p>

                  <Link to="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/news/news-details">
                    <Image
                      src={blogImg3}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>22 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 4 Comments
                    </li>
                  </ul>

                  <Link to="/news/news-details">
                    <h3>Our Company Machine Learning </h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga veritatis veniam corrupti perferendis minima in.
                  </p>

                  <Link to="/news/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
