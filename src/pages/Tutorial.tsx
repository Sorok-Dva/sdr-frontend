'use client'

import React, { useEffect, useState } from 'react'
import NewsSidebar from '../components/News/NewsSidebar'
import { Link, useParams } from 'react-router-dom'
import CommentsArea from '../components/News/CommentsArea'
import { Img as Image } from 'react-image'

import { type Tutorial } from 'pages/Tutorials'
import blogDetailImg from '../assets/images/choose-imgs.png'
import PageBanner from 'components/Common/PageBanner'
import { Container, Spinner } from 'reactstrap'
import { FaEye, FaThumbsUp } from 'react-icons/fa6'
import { useUser } from 'context/UserContext'
import NotFound from 'components/ErrorPage/404'
import { toast } from 'react-toastify'
import { ToastOptionsDefault } from 'utils/toastOptions'
import { useAuth } from 'context/AuthContext'


const TutorialPage: React.FC = () => {
  const { user } = useUser()
  const { token } = useAuth()
  const [tutorial, setTutorial] = useState<Tutorial | null>(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams<{ id: string }>()
  
  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await fetch(`/api/tutorials/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch tutorial')
        }
        const data: Tutorial = await response.json()
        setTutorial(data)
      } catch (error) {
        toast.error('Une erreur est survenue dans la récupération du tutoriel.',
          ToastOptionsDefault
        )
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchTutorial()
  }, [id])
  
  const handleUpvote = async () => {
    try {
      if (!user) return
      const response = await fetch(`/api/tutorials/${id}/upvote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      
      if (!response.ok) {
        throw new Error('Failed to upvote tutorial')
      }
      
      const updatedTutorial = await response.json()
      setTutorial(updatedTutorial)
    } catch (error) {
      toast.error('Une erreur est survenue lors de l\'ajout de votre like.',
        ToastOptionsDefault
      )
      console.error('Failed to upvote tutorial:', error)
    }
  }
  
  if (loading) {
    return (
      <Container className="loader-container">
        <div className="spinner-wrapper">
          <Spinner animation="border" role="status" className="custom-spinner">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <div className="loading-text">Loading</div>
        </div>
      </Container>
    )
  }
  
  if (!tutorial) {
    return <NotFound />
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
                        <ul className="meta-list" style={{ fontWeight: 'bold', fontSize: '14px' }}>
                          <li>
                            <span>Posté le:</span> February 20 , 2020
                          </li>
                          <li>
                            <span>Posté par:</span>
                            <Link to="#">{tutorial.user?.nickname}</Link>
                          </li>
                          <li>
                            <span><FaEye /></span>
                            <Link to="#">{tutorial.views}</Link>
                          </li>
                        </ul>
                        {user?.isAdmin &&
                          <>
                            <Link className="btn btn-outline-warning edit-button"
                              to={`/admin/tutorials/${tutorial.id}/edit`}>Modifier</Link>
                          </>}
                      </div>
                      <hr/>
                      <h1 style={{ marginTop: '1rem' }}>{tutorial.title}</h1>
                      
                      <div className="pt-5"
                        dangerouslySetInnerHTML={{
                          __html: tutorial.content
                            ? tutorial.content.replace(/(<? *script)/gi, 'illegalscript')
                            : ''
                        }}>
                      </div>
                    </div>
                    
                    <div className="article-footer">
                      <div className="article-tags">
                        <button onClick={handleUpvote} className="upvote-button">
                          <FaThumbsUp /> {tutorial.upvote}
                        </button>
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
