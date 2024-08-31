import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Badge, Container, Progress, Spinner, Table, Tooltip } from 'reactstrap'
import { toast } from 'react-toastify'
import { ToastDefaultOptions } from 'utils/toastOptions'
import NotFound from '../components/ErrorPage/404'
import { Img as Image } from 'react-image'
import teamShape from 'assets/images/team/team-shape.png'
import PageBanner from 'components/Common/PageBanner'
import type { UserProfile } from 'types/user'
import type { Level } from 'types/level'
import type { PointHistory } from 'types/pointHistory'
import { ThemeContext } from 'context/ThemeContext'

const Profile: React.FC = () => {
  const { nickname } = useParams<{ nickname: string }>()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [pointHistory, setPointHistory] = useState<PointHistory[]>([])
  const [notFound, setNotFound] = useState<boolean>(false)
  const main = useRef<HTMLDivElement>(null)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [nextLevel, setNextLevel] = useState<Level | null>(null)
  const [sortedField, setSortedField] = useState<string | null>(null)
  const [isAsc, setIsAsc] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
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
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })

        if (!response.ok) {
          setNotFound(true)
          return
        }

        const data = await response.json()
        setUserProfile(data)
        setPointHistory(data.pointsHistory)
      } catch (err) {
        toast.error(`Failed to retrieve ${nickname} profile.`, ToastDefaultOptions)
      }
    }

    fetchUserProfile()
  }, [nickname])

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement?.scrollTop && (document.scrollingElement.scrollTop = 0)
    main.current && (main.current.scrollTop = 0)
  }, [])

  const handleSort = (field: string) => {
    const isAscOrder = sortedField === field ? !isAsc : true
    setIsAsc(isAscOrder)
    setSortedField(field)

    const sortedData = [...pointHistory].sort((a, b) => {
      if (a[field as keyof PointHistory] < b[field as keyof PointHistory]) {
        return isAscOrder ? -1 : 1
      }
      if (a[field as keyof PointHistory] > b[field as keyof PointHistory]) {
        return isAscOrder ? 1 : -1
      }
      return 0
    })
    setPointHistory(sortedData)
  }

  const indexOfLastPH = currentPage * rowsPerPage
  const indexOfFirstPH = indexOfLastPH - rowsPerPage
  const currentPH = (pointHistory || []).slice(indexOfFirstPH, indexOfLastPH)

  const totalPages = Math.ceil((pointHistory || []).length / rowsPerPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (notFound) {
    return <NotFound />
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
        pageTitle={`Profil de ${userProfile.nickname}`}
        homePageUrl="/"
        homePageText="Accueil"
        activePageText={`Profil de ${userProfile.nickname}`}
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
                    src={userProfile.avatar}
                    alt="Image"
                    width={140}
                    height={140}
                  />

                  <div className="team-img">
                    <Image
                      src={teamShape}
                      alt="Image"
                      width={208}
                      height={198}
                    />
                  </div>
                </div>

                <div className="team-content" style={{
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
                    <li>{userProfile.totalDreams} rêves (dont {userProfile.publicDreams} publics)</li>
                  </ul>
                  <span>{userProfile.points} points de succès</span>
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

            {/* Table for Point History */}
            <div className="col-lg-12 mt-5">
              <h4>Historique des Points</h4>
              <Table hover>
                <thead>
                  <tr>
                    <th onClick={() => handleSort('date')}>Date {sortedField === 'date' && (isAsc ? '↑' : '↓')}</th>
                    <th onClick={() => handleSort('points')}>Points {sortedField === 'points' && (isAsc ? '↑' : '↓')}</th>
                    <th onClick={() => handleSort('reason')}>Raison {sortedField === 'reason' && (isAsc ? '↑' : '↓')}</th>
                  </tr>
                </thead>
                <tbody>
                  { currentPH.length === 0 ? (
                    <tr>
                      <td colSpan={ 3 } className="text-center">
                      L'historique des points est vide.
                      </td>
                    </tr>
                  ): (
                    currentPH.map((entry, index) => (
                      <tr key={index}>
                        <td>{new Date(entry.createdAt).toLocaleDateString()}</td>
                        <td>{entry.points}</td>
                        <td>{entry.description}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>

              {/* Pagination Controls */}
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example" className="text-center">
                  <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <Link to="#" className="page-link page-links" onClick={() => paginate(1)}>
                        <i className="bx bx-chevrons-left"></i>
                      </Link>
                    </li>

                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <Link to="#" className="page-link" onClick={() => paginate(currentPage - 1)}>
                        <i className="bx bx-chevron-left"></i>
                      </Link>
                    </li>

                    {Array.from({ length: totalPages }, (_, index) => (
                      <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                        <Link to="#" className="page-link" onClick={() => paginate(index + 1)}>
                          {index + 1}
                        </Link>
                      </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <Link to="#" className="page-link" onClick={() => paginate(currentPage + 1)}>
                        <i className="bx bx-chevron-right"></i>
                      </Link>
                    </li>

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <Link to="#" className="page-link page-links" onClick={() => paginate(totalPages)}>
                        <i className="bx bx-chevrons-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="col">
                  <select
                    value={rowsPerPage}
                    onChange={(e) => {
                      setRowsPerPage(Number(e.target.value))
                      paginate(1)
                    }}
                    className="form-select w-auto"
                  >
                    {[10, 30, 50, 100, 500].map((size) => (
                      <option key={size} value={size}>
                        {size} lignes par page
                      </option>
                    ))}
                  </select>
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
