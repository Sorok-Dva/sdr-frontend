'use client'

import React from 'react'
import { Link } from 'react-router-dom'

const NewsSidebar: React.FC = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_search">
          <h3 className="widget-title">Search Now</h3>

          <div className="post-wrap">
            <form className="search-form">
              <label>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search..."
                />
              </label>

              <button type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="widget widget-posts-thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <div className="post-wrap">
            <article className="item">
              <Link to="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: 'url(/images/blog-details/popular-posts-1.png)',
                  }}
                ></span>
              </Link>

              <div className="info">
                <time>February 20, 2020</time>
                <h4 className="title usmall">
                  <Link to="/news/news-details">
                    Making Peace With The Feast Or Famine Of Freelancing
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link to="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: 'url(/images/blog-details/popular-posts-2.png)',
                  }}
                ></span>
              </Link>

              <div className="info">
                <time>February 21, 2020</time>
                <h4 className="title usmall">
                  <Link to="/news/news-details">
                    I Used The Web For A Day On A 50 MB Budget
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link to="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: 'url(/images/blog-details/popular-posts-3.png)',
                  }}
                ></span>
              </Link>

              <div className="info">
                <time>February 22, 2020</time>
                <h4 className="title usmall">
                  <Link to="/news/news-details">
                    How To Create A Responsive Popup Gallery?
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link to="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: 'url(/images/blog-details/popular-posts-4.png)',
                  }}
                ></span>
              </Link>

              <div className="info">
                <time>February 23, 2020</time>
                <h4 className="title usmall">
                  <Link to="/news/news-details">
                    Web development the best work in the future for the world
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>
          </div>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <div className="post-wrap">
            <ul>
              <li>
                <Link to="#">
                  Business <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  Privacy <span>(20)</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  Technology <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  Tips <span>(12)</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  Uncategorized <span>(16)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="post-wrap">
            <div className="tagcloud">
              <Link to="#">IT Solution (3)</Link>
              <Link to="#">Uncategorized (3)</Link>
              <Link to="#">Tips (2)</Link>
              <Link to="#">AI Solution (2)</Link>
              <Link to="#">Technology (1)</Link>
              <Link to="#">Privacy (1)</Link>
              <Link to="#">Business (1)</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsSidebar
