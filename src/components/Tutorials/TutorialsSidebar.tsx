'use client'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { type Tutorial } from 'pages/tutorials/List'
import { slugify } from 'utils/slugify'


const TutorialsSidebar: React.FC = () => {
  const [popularTutorials, setPopularTutorials] = useState<Tutorial[]>([])

  useEffect(() => {
    const fetchPopularTutorials = async () => {
      try {
        const response = await fetch('/api/tutorials/popular')
        const data: Tutorial[] = await response.json()
        setPopularTutorials(data)
      } catch (error) {
        console.error('Failed to fetch popular tutorials:', error)
      }
    }

    fetchPopularTutorials()
  }, [])

  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget-posts-thumb">
          <h3 className="widget-title">Tutos populaires</h3>
          <div className="post-wrap">
            {popularTutorials.map((tutorial) => (
              <article key={tutorial.id} className="item">
                <Link to={`/tutorial/${tutorial.id}/${slugify(tutorial.title)}`} className="thumb">
                  <span
                    className="fullimage cover"
                    role="img"
                    style={{
                      backgroundImage: `url(${tutorial.image ?? '/images/default-thumbnail.png'})`,
                    }}
                  ></span>
                </Link>
                <div className="info">
                  <time>{new Date(tutorial.createdAt).toLocaleDateString('fr-FR')}</time>
                  <h4 className="title usmall">
                    <Link to={`/tutorial/${tutorial.id}/${slugify(tutorial.title)}`}>
                      {tutorial.title}
                    </Link>
                  </h4>
                  <Link to="#">
                    <i className="flaticon-user"></i> { tutorial.user?.nickname ?? 'Unknown' }
                  </Link>
                  <i className="fa fa-heart" style={{ marginLeft: '1rem'}}></i> { tutorial.upvote } Likes
                  <i className="fa fa-eye" style={{ marginLeft: '1rem'}}></i> { tutorial.views } vues
                </div>
                <div className="clear"></div>
              </article>
            )) }
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
      </div>
    </>
  )
}

export default TutorialsSidebar
