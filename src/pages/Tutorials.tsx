'use client'

import React, { useEffect, useState } from 'react'
import TutorialsSidebar from 'components/Tutorials/TutorialsSidebar'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'
import PageBanner from 'components/Common/PageBanner'
import { Spinner } from 'reactstrap'
import { slugify } from 'utils/slugify'
import blogDetailImg from 'assets/images/choose-imgs.png'
import { stripHtmlTags } from 'utils/stripHtmlTags'

export type Tutorial = {
  id: number;
  userId: number;
  categoryId: string;
  title: string;
  image?: string;
  content: string;
  views: number;
  upvote: number;
  slug: string;
  createdAt: Date;
  commentCount: number;
  user?: {
    nickname: string;
    avatar: string;
  }
};

const TutorialsList: React.FC = () => {
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const tutorialsPerPage = 6
  
  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await fetch('/api/tutorials')
        const data: Tutorial[] = await response.json()
        setTutorials(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch tutorials:', error)
        setLoading(false)
      }
    }
    
    fetchTutorials()
  }, [])
  
  const indexOfLastTutorial = currentPage * tutorialsPerPage
  const indexOfFirstTutorial = indexOfLastTutorial - tutorialsPerPage
  const currentTutorials = tutorials.slice(indexOfFirstTutorial, indexOfLastTutorial)
  
  const totalPages = Math.ceil(tutorials.length / tutorialsPerPage)
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }
  
  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    )
  }
  
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
                {currentTutorials.length === 0 ? (
                  <p>Aucun tutoriel disponible pour le moment.</p>
                ) : (
                  currentTutorials.map((tutorial) => (
                    <div key={tutorial.id} className="col-lg-6 col-md-6">
                      <div className="single-news">
                        <div className="blog-img">
                          <Link to={`/tutorial/${tutorial.id}/${slugify(tutorial.title)}`}>
                            <Image
                              src={tutorial.image ?? blogDetailImg}
                              alt="Image"
                              width={570}
                              height={400}
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
                                <i className="flaticon-user"></i> {tutorial.user?.nickname ?? 'Unknown'}
                              </Link>
                            </li>
                            <li>
                              <i className="flaticon-conversation"></i> {tutorial.commentCount} Comments
                            </li>
                            <li>
                              <i className="fa fa-heart"></i> {tutorial.upvote} Likes
                            </li>
                          </ul>
                          <Link to={`/tutorials/${tutorial.id}/${tutorial.slug}`}>
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
                  ))
                )}
              </div>
              {/* Pagination */}
              <div className="col-lg-12">
                <div className="page-navigation-area">
                  <nav aria-label="Page navigation example text-center">
                    <ul className="pagination">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <Link to="#" className="page-link page-links" onClick={() => handlePageChange(currentPage - 1)}>
                          <i className="bx bx-chevrons-left"></i>
                        </Link>
                      </li>
                      {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                          <Link to="#" className="page-link" onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                          </Link>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <Link to="#" className="page-link page-links" onClick={() => handlePageChange(currentPage + 1)}>
                          <i className="bx bx-chevrons-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <TutorialsSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutorialsList
