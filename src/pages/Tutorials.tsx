'use client'

import React from 'react'
import NewsSidebar from '../components/News/NewsSidebar'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'

import blogImg1 from 'assets/images/blog/blog4.png'
import blogImg2 from 'assets/images/blog/blog5.png'
import blogImg3 from 'assets/images/blog/blog6.png'
import blogImg4 from 'assets/images/blog/blog7.png'
import blogImg5 from 'assets/images/blog/blog8.png'
import blogImg6 from 'assets/images/blog/blog9.png'
import PageBanner from 'components/Common/PageBanner'

const NewsDetailsContent: React.FC = () => {
  return (
    <>
      <PageBanner
        pageTitle="Liste des tutoriels"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText="Liste des tutoriels"
      />
      <div className="news-details-area news-right-sidebar-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
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
                        <span>23 February</span>
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
                        <h3>The Security Risks Of Changing Package Owners</h3>
                      </Link>
                      
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fuga veritatis veniam corrupti perferendis minima
                        in.
                      </p>
                      
                      <Link to="/news/news-details" className="read-more">
                        Read More <i className="bx bx-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-6">
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
                        <span>24 February</span>
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
                        <h3>Tips To Protecting Your Business And Family</h3>
                      </Link>
                      
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fuga veritatis veniam corrupti perferendis minima
                        in.
                      </p>
                      
                      <Link to="/news/news-details" className="read-more">
                        Read More <i className="bx bx-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-6">
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
                        <span>25 February</span>
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
                        <h3>Protect Your Workplace From Cyber Attacks</h3>
                      </Link>
                      
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fuga veritatis veniam corrupti perferendis minima
                        in.
                      </p>
                      
                      <Link to="/news/news-details" className="read-more">
                        Read More <i className="bx bx-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-6">
                  <div className="single-news">
                    <div className="blog-img">
                      <Link to="/news/news-details">
                        <Image
                          src={blogImg4}
                          alt="Image"
                          width={570}
                          height={400}
                        />
                      </Link>
                      
                      <div className="dates">
                        <span>25 February</span>
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
                        <h3>
                          Making Peace With The Feast Or Famine Of Freelancing
                        </h3>
                      </Link>
                      
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fuga veritatis veniam corrupti perferendis minima
                        in.
                      </p>
                      
                      <Link to="/news/news-details" className="read-more">
                        Read More <i className="bx bx-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-6">
                  <div className="single-news">
                    <div className="blog-img">
                      <Link to="/news/news-details">
                        <Image
                          src={blogImg5}
                          alt="Image"
                          width={570}
                          height={400}
                        />
                      </Link>
                      
                      <div className="dates">
                        <span>27 February</span>
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
                        <h3>I Used The Web For A Day On A 50 MB Budget</h3>
                      </Link>
                      
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fuga veritatis veniam corrupti perferendis minima
                        in.
                      </p>
                      
                      <Link to="/news/news-details" className="read-more">
                        Read More <i className="bx bx-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-6">
                  <div className="single-news">
                    <div className="blog-img">
                      <Link to="/news/news-details">
                        <Image
                          src={blogImg6}
                          alt="Image"
                          width={570}
                          height={400}
                        />
                      </Link>
                      
                      <div className="dates">
                        <span>28 February</span>
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
                        <h3>
                          Here Are The 5 Most Telling Signs Of Micromanagement
                        </h3>
                      </Link>
                      
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fuga veritatis veniam corrupti perferendis minima
                        in.
                      </p>
                      
                      <Link to="/news/news-details" className="read-more">
                        Read More <i className="bx bx-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Pagination */}
                <div className="col-lg-12">
                  <div className="page-navigation-area">
                    <nav aria-label="Page navigation example text-center">
                      <ul className="pagination">
                        <li className="page-item">
                          <Link to="#" className="page-link page-links">
                            <i className="bx bx-chevrons-left"></i>
                          </Link>
                        </li>
                        
                        <li className="page-item active">
                          <Link to="#" className="page-link">
                            1
                          </Link>
                        </li>
                        
                        <li className="page-item">
                          <Link to="#" className="page-link">
                            2
                          </Link>
                        </li>
                        
                        <li className="page-item">
                          <Link to="#" className="page-link">
                            3
                          </Link>
                        </li>
                        
                        <li className="page-item">
                          <Link to="#" className="page-link">
                            <i className="bx bx-chevrons-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-12">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsDetailsContent
