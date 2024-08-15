'use client'

import React, { useEffect, useState } from 'react'
import NewsSidebar from '../components/News/NewsSidebar'
import { Link, useParams } from 'react-router-dom'
import CommentsArea from '../components/News/CommentsArea'
import { Img as Image } from 'react-image'

import blogDetailImg from '../assets/images/choose-imgs.png'
import PageBanner from 'components/Common/PageBanner'
import { Container, Spinner } from 'reactstrap'
import { Tutorial } from 'pages/Tutorials'
import { FaEye } from 'react-icons/fa6'
import { useUser } from 'context/UserContext'


const TutorialPage: React.FC = () => {
  const { user } = useUser()
  const [tutorial, setTutorial] = useState<Tutorial>()
  const [loading, setLoading] = useState(true)
  const { id, slug } = useParams<{ id: string; slug: string }>()
  
  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await fetch(`/api/tutorials/${id}`)
        const data: Tutorial = await response.json()
        setTutorial(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching the tutorial:', error)
        setLoading(false)
      }
    }
    
    fetchTutorial()
  }, [id])
  
  if (loading) {
    return <Container className="loader-container">
      <div className="spinner-wrapper">
        <Spinner animation="border" role="status" className="custom-spinner">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <div className="loading-text">Loading</div>
      </div>
    </Container>
  }
  
  if (!tutorial) {
    return <div>Error loading tutorial</div>
  }
  
  return (
    <>
      <PageBanner
        pageTitle="Tutoriel"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText={tutorial.title}
      />
      <div className="pt-50 pb-70">
        <div className="container">
          <div className="news-details-area ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="blog-details-desc">
                    <div className="article-image">
                      <Image
                        src={tutorial.image ?? blogDetailImg}
                        alt="Image"
                        width={900}
                        height={500}
                      />
                    </div>
                    
                    <div className="article-content pb-70">
                      <div className="entry-meta">
                        <ul className="meta-list">
                          <li>
                            <span>Posté le:</span> February 20 , 2020
                          </li>
                          <li>
                            <span>Posté par:</span>
                            <Link to="#">{ tutorial.userId }</Link>
                          </li>
                          <li>
                            <span><FaEye /></span>
                            <Link to="#">{ tutorial.views }</Link>
                          </li>
                        </ul>
                        { user?.isAdmin
                          && <Link className="btn btn-outline-danger edit-button"
                            to={`/admin/tutorials/${tutorial.id}/edit`}>Modifier</Link>}
                      </div>
                      
                      <h1 className="pt-70">{ tutorial.title }</h1>
                      
                      <div className="pt-5"
                        dangerouslySetInnerHTML={ { __html: tutorial.content.replace(/(<? *script)/gi, 'illegalscript') } }>
                      </div>
                    </div>
                    
                    <div className="article-footer">
                      <div className="article-tags">
                        <span>
                          <i className="bx bx-share-alt"></i>
                        </span>
                        <Link to="#">Partager</Link>
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
                            <i className="bx bx-left-arrow-alt"></i> Tutoriel précédent
                          </Link>
                        </div>
                    
                        <div className="nav-next">
                          <Link to="#">
                       Tutoriel suivant <i className="bx bx-right-arrow-alt"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                
                    <CommentsArea />
                  </div>
                </div>
            
                <div className="col-lg-4 col-md-12">
                  <NewsSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutorialPage
