import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Container, Row, Col, Spinner } from 'reactstrap'
import { toast } from 'react-toastify'
import { ToastDefaultOptions } from 'utils/toastOptions'
import NotFound from '../components/ErrorPage/404'

interface UserProfile {
  id: number,
  nickname: string,
  avatar: string,
  isAdmin: boolean,
  validated: boolean,
  totalScreenshots: number,
  publicScreenshots: number,
  totalViews: number,
}

const Profile: React.FC = () => {
  const { nickname } = useParams<{ nickname: string }>()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [notFound, setNotFound] = useState<boolean>(false)
  const main = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/user/profile/${nickname}`, {
          headers: {
            Authorization: `Bearer ${ localStorage.getItem('token') }`,
          },
        })
        
        if (!response.ok) {
          setNotFound(true)
          return
        }
        
        const data = await response.json()
        
        if (data.nickname === 'Anonymous') {
          setNotFound(true)
          return
        }
        setUserProfile(data)
        
      } catch (err) {
        toast.error(`Failed to retrieve ${nickname} profile.`,
          ToastDefaultOptions
        )
      }
    }
    
    fetchUserProfile()
  }, [nickname])
  
  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement?.scrollTop && (document.scrollingElement.scrollTop = 0)
    main.current && (main.current.scrollTop = 0)
  }, [])
  
  if (notFound) {
    return <NotFound/>
  }
  
  if (!userProfile) {
    return (
      <Container className="loader-container">
        <div className="spinner-wrapper">
          <Spinner animation="border" role="status" className="custom-spinner">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <div className="loading-text">Loading...</div>
        </div>
      </Container>
    )
  }
  
  return (
    <>
      <main className="profile-page mt--150" ref={main}>
        <section className="section-profile-cover section-shaped my-0">
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#avatar" onClick={(e) => e.preventDefault()}>
                        <img
                          alt={`${userProfile.nickname}'s avatar`}
                          className="rounded-circle"
                          src={userProfile.avatar}
                        />
                      </a>
                    </div>
                  </Col>
                  <Col className="order-lg-3 text-lg-right align-self-lg-center" lg="4">
                    <div className="card-profile-actions py-4 mt-lg-0">
                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Connect
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Message
                      </Button>
                    </div>
                  </Col>
                  <Col className="order-lg-1" lg="4">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading">{ userProfile.totalScreenshots }</span>
                        <span className="description">Screenshots uploaded</span>
                      </div>
                      <div>
                        <span className="heading">{ userProfile.publicScreenshots }</span>
                        <span className="description">Public screenshots</span>
                      </div>
                      <div>
                        <span className="heading">{ userProfile.totalViews }</span>
                        <span className="description">Total views</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <h3>
                    {userProfile.nickname}{' '}
                    <span className="font-weight-light">, </span>
                  </h3>
                  <div className="h6 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    ...
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    Joined at
                  </div>
                </div>
                <div className="mt-5 py-5 border-top text-center">
                  <Row className="justify-content-center">
                    <Col lg="9">
                      <p>...</p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Profile
