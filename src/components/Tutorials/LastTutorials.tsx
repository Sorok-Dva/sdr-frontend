'use client'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'
import { Tutorial } from 'pages/Tutorials'
import { stripHtmlTags } from 'utils/stripHtmlTags'
import { slugify } from 'utils/slugify'
import ImageLoader from 'components/Common/ImageLoader'

const LastTutorials: React.FC = () => {
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchLatestTutorials = async () => {
      try {
        const response = await fetch('/api/tutorials/latest')
        const data: Tutorial[] = await response.json()
        setTutorials(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch latest tutorials:', error)
        setLoading(false)
      }
    }
    
    fetchLatestTutorials()
  }, [])
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  return (
    <>
      <div className="news-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Derniers articles</span>
            <h2>Nos derniers tutoriels</h2>
            <p>Découvrez nos derniers tutoriels sur les rêves lucides !</p>
          </div>
          
          <div className="row justify-content-center">
            {tutorials.map((tutorial, index) => (
              <div
                key={tutorial.id}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={200 * (index + 1)}
              >
                <div className="single-news">
                  <div className="blog-img">
                    <Link to={`/tutorial/${tutorial.id}/${tutorial.slug}`}>
                      <Image
                        src={tutorial.image ?? 'path/to/default/image.png'}
                        alt="Image"
                        width={570}
                        height={400}
                        loader={<ImageLoader height="200px" width="360px" />}
                        loading="lazy"
                      />
                    </Link>
                    
                    <div className="dates">
                      <span>{new Date(tutorial.createdAt).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                  
                  <div className="news-content-wrap">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="flaticon-user"></i> { tutorial.user?.nickname ?? 'Unknown' }
                        </Link>
                      </li>
                      <li>
                        <i className="flaticon-conversation"></i> { tutorial.commentCount } commentaires
                      </li>
                      <li>
                        <i className="fa fa-heart"></i> { tutorial.upvote } likes
                      </li>
                    </ul>
                    
                    <Link to={ `/tutorial/${ tutorial.id }/${ slugify(tutorial.title) }` }>
                      <h3>{tutorial.title}</h3>
                    </Link>
                    
                    <p>
                      {stripHtmlTags(tutorial.content).substring(0, 150)}...
                    </p>
                    
                    <Link to={`/tutorial/${tutorial.id}/${slugify(tutorial.title)}`} className="read-more">
                      Lire la suite <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LastTutorials
