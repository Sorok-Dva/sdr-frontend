'use client'

import React from 'react'
import NewsSidebar from '../components/News/NewsSidebar'
import { Link } from 'react-router-dom'
import CommentsArea from '../components/News/CommentsArea'
import { Img as Image } from 'react-image'

import blogDetailImg from '../assets/images/blog-details/blog-details.jpg'

const NewsDetailsContent: React.FC = () => {
  return (
    <>
      <div className="news-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Image
                    src={blogDetailImg}
                    alt="Image"
                    width={900}
                    height={500}
                  />
                </div>
                
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span> February 20 , 2020
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link to="#">John Anderson</Link>
                      </li>
                    </ul>
                  </div>
                  
                  <h3>
                    Web development the best work in the future for the world
                  </h3>
                  
                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit, consectetur.
                  </p>
                  
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat.
                  </p>
                  
                  <blockquote className="flaticon-quote">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus aliquid praesentium eveniet illum asperiores,
                      quidem, ipsum voluptatum numquam ducimus nisi
                      exercitationem dolorum facilis.
                    </p>
                  </blockquote>
                  
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat.
                  </p>
                  
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat.
                  </p>
                  
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam.
                  </p>
                </div>
                
                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="bx bx-share-alt"></i>
                    </span>
                    <Link to="#">Share</Link>
                  </div>
                  
                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
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
                
                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link to="#">
                        <i className="bx bx-left-arrow-alt"></i> Prev Post
                      </Link>
                    </div>
                    
                    <div className="nav-next">
                      <Link to="#">
                        Next Post <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Comments Area */}
                <CommentsArea />
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
