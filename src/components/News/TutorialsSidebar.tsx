'use client'

import React from 'react'
import { Link } from 'react-router-dom'

const TutorialsSidebar: React.FC = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
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
                  Tutoriels <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  Conseils <span>(20)</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  Retour d'expérience <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  Non catégorisé <span>(16)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="post-wrap">
            <div className="tagcloud">
              <Link to="#">Rêves Lucides (3)</Link>
              <Link to="#">Interpretation (2)</Link>
              <Link to="#">Débutant (2)</Link>
              <Link to="#">Expérimenté (1)</Link>
              <Link to="#">Non catégorisé (3)</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutorialsSidebar
