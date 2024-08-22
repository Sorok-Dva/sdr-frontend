import React, { useEffect, useState } from 'react'
import {
  Badge,
  Button,
  Col,
  Input,
  Row,
  Table,
} from 'reactstrap'
import { useAuth } from 'context/AuthContext'
import { Link } from 'react-router-dom'
import { FaEye, FaPencil } from 'react-icons/fa6'
import PageBanner from 'components/Common/PageBanner'
import { Tutorial } from 'pages/tutorials/List'
import { slugify } from 'utils/slugify'


const ListTutorials: React.FC = () => {
  const { token } = useAuth()
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [sortedField, setSortedField] = useState<keyof Tutorial | null>(null)
  const [isAsc, setIsAsc] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await fetch('/api/tutorials', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const data = await response.json()
        setTutorials(data)
      } catch (err) {
        console.error('Failed to fetch tutorials', err)
      }
    }

    fetchTutorials()
  }, [token])

  const handleSort = (field: keyof Tutorial) => {
    if (sortedField === field) {
      setIsAsc(!isAsc)
    } else {
      setSortedField(field)
      setIsAsc(true)
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const filteredTutorials = tutorials.filter((tutorial) =>
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutorial.views.toString().includes(searchTerm) ||
    new Date(tutorial.createdAt).toLocaleDateString().includes(searchTerm)
  )

  const sortedTutorials = [...filteredTutorials].sort((a, b) => {
    if (sortedField) {
      const aValue = a[sortedField]
      const bValue = b[sortedField]

      if (aValue !== undefined && bValue !== undefined) {
        if (aValue < bValue) {
          return isAsc ? -1 : 1
        }
        if (aValue > bValue) {
          return isAsc ? 1 : -1
        }
      }
    }
    return 0
  })


  const indexOfLastTutorial = currentPage * rowsPerPage
  const indexOfFirstTutorial = indexOfLastTutorial - rowsPerPage
  const currentTutorials = sortedTutorials.slice(indexOfFirstTutorial, indexOfLastTutorial)

  const totalPages = Math.ceil(filteredTutorials.length / rowsPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      <PageBanner
        pageTitle="Tutorials List"
        homePageUrl="/admin"
        homePageText="Admin"
        activePageText="[Admin] Tutorials List"
      />
      <div className="pt-100 pb-70">
        <div className="container">
          <Row className="mb-3">
            <Col>
              <h2>Tutorials List</h2>
              <p>Total Tutorials: { filteredTutorials.length }</p>
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Search in all fields"
                value={ searchTerm }
                onChange={ handleSearch }
              />
            </Col>
          </Row>
          <Table hover>
            <thead>
              <tr>
                <th onClick={ () => handleSort('title') }>
                  Title { sortedField === 'title' && (isAsc ? '↑': '↓') }
                </th>
                <th onClick={ () => handleSort('validated') }>
                  Validated { sortedField === 'validated' && (isAsc ? '↑': '↓') }
                </th>
                <th onClick={ () => handleSort('views') }>
                  Views { sortedField === 'views' && (isAsc ? '↑': '↓') }
                </th>
                <th onClick={ () => handleSort('commentCount') }>
                  Comments { sortedField === 'commentCount' && (isAsc ? '↑': '↓') }
                </th>
                <th onClick={ () => handleSort('user') }>
                  Author { sortedField === 'user' && (isAsc ? '↑': '↓') }
                </th>
                <th onClick={ () => handleSort('createdAt') }>
                  Created At { sortedField === 'createdAt' && (isAsc ? '↑': '↓') }
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { currentTutorials.length === 0 ? (
                <tr>
                  <td colSpan={ 7 } className="text-center">
                  No tutorials found
                  </td>
                </tr>
              ): (
                currentTutorials.map((tutorial) => (
                  <tr key={ tutorial.id }>
                    <td>{ tutorial.title }</td>
                    <td>
                      <Badge pill
                        color={ tutorial.validated ? 'success': 'danger' }>
                        { tutorial.validated ? 'Yes': 'No' }
                      </Badge>
                    </td>
                    <td>{ tutorial.views }</td>
                    <td>{ tutorial.commentCount }</td>
                    <td>{ tutorial.user?.nickname }</td>
                    <td>{ new Date(tutorial.createdAt).toLocaleDateString() }</td>
                    <td>
                      <Link to={`/tutorial/${ tutorial.id }/${slugify(tutorial.title)}`} target="_blank">
                        <Button className="btn-icon btn-2 mb-3" color="success"
                          type="button">
                          <span className="btn-inner--icon">
                            <FaEye/>
                          </span>
                        </Button>
                      </Link>{ ' ' }
                      <Link to={ `/admin/tutorials/${ tutorial.id }/edit` }>
                        <Button className="btn-icon btn-2 mb-3" color="primary"
                          type="button">
                          <span className="btn-inner--icon">
                            <FaPencil/>
                          </span>
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) }
            </tbody>
          </Table>
          <div className="col-lg-12">
            <div className="page-navigation-area">
              <nav aria-label="Page navigation example text-center">
                <ul className="pagination">
                  <li className={ `page-item ${ currentPage === 1 ? 'disabled': '' }` }>
                    <Link to="#" className="page-link page-links" onClick={ () => paginate(1) }>
                      <i className="bx bx-chevrons-left"></i>
                    </Link>
                  </li>

                  <li className={ `page-item ${ currentPage === 1 ? 'disabled': '' }` }>
                    <Link to="#" className="page-link" onClick={ () => paginate(currentPage - 1) }>
                      <i className="bx bx-chevron-left"></i>
                    </Link>
                  </li>

                  { [...Array(totalPages)].map((_, index) => (
                    <li key={ index } className={ `page-item ${ index + 1 === currentPage ? 'active': '' }` }>
                      <Link to="#" className="page-link" onClick={ () => paginate(index + 1) }>
                        { index + 1 }
                      </Link>
                    </li>
                  )) }

                  <li className={ `page-item ${ currentPage === totalPages ? 'disabled': '' }` }>
                    <Link to="#" className="page-link" onClick={ () => paginate(currentPage + 1) }>
                      <i className="bx bx-chevron-right"></i>
                    </Link>
                  </li>

                  <li className={ `page-item ${ currentPage === totalPages ? 'disabled': '' }` }>
                    <Link to="#" className="page-link page-links" onClick={ () => paginate(totalPages) }>
                      <i className="bx bx-chevrons-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="col">
                <select
                  value={ rowsPerPage }
                  onChange={ (e) => {
                    setRowsPerPage(Number(e.target.value))
                    paginate(1)
                  } }
                  className="form-select w-auto"
                >
                  { [10, 30, 50, 100, 500].map((size) => (
                    <option key={ size } value={ size }>
                      { size } rows per page
                    </option>
                  )) }
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListTutorials
