import React, { useEffect, useState, useRef, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Badge, Container, Progress, Spinner, Tooltip } from 'reactstrap'
import { toast } from 'react-toastify'
import { ToastDefaultOptions } from 'utils/toastOptions'
import NotFound from '../components/ErrorPage/404'
import { Img as Image } from 'react-image'
import teamShape from 'assets/images/team/team-shape.png'
import PageBanner from 'components/Common/PageBanner'
import type { UserProfile } from 'types/user'
import type { Level } from 'types/level'
import { ThemeContext } from 'context/ThemeContext'

const Profile: React.FC = () => {
  const { nickname } = useParams<{ nickname: string }>()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [notFound, setNotFound] = useState<boolean>(false)
  const main = useRef<HTMLDivElement>(null)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [nextLevel, setNextLevel] = useState<Level | null>(null)
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('ThemeContext not found')
  }

  const { theme } = themeContext
  useEffect(() => {
    const fetchNextLevel = async () => {
      if (!userProfile?.points) return
      const response = await fetch(`/api/levels/next?currentPoints=${userProfile?.points}`)
      const data = await response.json()
      setNextLevel(data)
    }

    fetchNextLevel()
  }, [userProfile?.points])

  const toggle = () => setTooltipOpen(!tooltipOpen)
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
        console.log(data)
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
      <PageBanner
        pageTitle={ `Profil de ${userProfile.nickname}` }
        homePageUrl="/"
        homePageText="Accueil"
        activePageText={ `Profil de ${userProfile.nickname}`}
      />
      <div className="pt-50 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className={`col-lg-6 ${theme === 'dark' ? 'dark-theme text-white' : 'bg-light text-dark'}`}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className={`single-team active ${theme === 'dark' ? 'sdr-bg-dark text-white' : 'bg-light text-dark'}`}>
                <div className="team-single-img">
                  <Image
                    src={ userProfile.avatar }
                    alt="Image"
                    width={ 140 }
                    height={ 140 }
                  />

                  <div className="team-img">
                    <Image
                      src={ teamShape }
                      alt="Image"
                      width={ 208 }
                      height={ 198 }
                    />
                  </div>
                </div>

                <div className="team-content" style={ {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                } }>
                  <h3>
                    { userProfile.nickname },
                    Niveau { userProfile.level }
                  </h3>
                  <Badge pill color='primary' className="w-25"
                    href="#"
                    id="points">
                    {userProfile.title}
                  </Badge>
                  <Tooltip
                    placement="bottom"
                    isOpen={tooltipOpen}
                    autohide={true}
                    target="points"
                    toggle={toggle}
                  >
                    {userProfile.points} points.
                  </Tooltip>
                  <span className="mt-3">
                    A rejoint le Sentier des Rêves le { new Date(userProfile.createdAt).toLocaleDateString() }
                  </span>
                  <ul>
                    <li>{ userProfile.totalDreams } rêves
                      (dont { userProfile.publicDreams } publics)
                    </li>
                  </ul>
                  <span>{ userProfile.points } points de succès</span>
                  {nextLevel && (
                    <div className="progress-bar">
                      <Progress
                        value={(userProfile.points / nextLevel.pointsRequired) * 100}
                      />
                      <p>{userProfile.points}/{nextLevel.pointsRequired} pour {nextLevel.title}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
