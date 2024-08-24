import React, { useEffect, useState } from 'react'
import {
  Badge,
  Col,
  Input,
  Row,
  Table,
} from 'reactstrap'
import { useAuth } from 'context/AuthContext'
import { Link } from 'react-router-dom'
import PageBanner from 'components/Common/PageBanner'
import type { User } from 'types/user'

const UserList: React.FC = () => {
  const { token } = useAuth()
  const [users, setUsers] = useState<User[]>([])
  const [sortedField, setSortedField] = useState<keyof User | null>(null)
  const [isAsc, setIsAsc] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users/leaderboard')
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        console.error('Failed to fetch users', err)
      }
    }

    fetchUsers()
  }, [token])

  const handleSort = (field: keyof User) => {
    if (sortedField === field) {
      setIsAsc(!isAsc)
    } else {
      setSortedField(field)
      setIsAsc(true)
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredUsers = users.filter((user) =>
    user.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortedField) {
      if (a[sortedField] < b[sortedField]) {
        return isAsc ? -1 : 1
      }
      if (a[sortedField] > b[sortedField]) {
        return isAsc ? 1 : -1
      }
    }
    return 0
  })

  const indexOfLastUser = currentPage * rowsPerPage
  const indexOfFirstUser = indexOfLastUser - rowsPerPage
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser)

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <PageBanner
        pageTitle="Classement des Utilisateurs"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText="Classement"
      />
      <div className="pt-100 pb-70">
        <div className="container">
          <Row className="mb-3">
            <Col>
              <h2>Classement des utilisateurs</h2>
              <p>Total: {filteredUsers.length}</p>
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Chercher un joueur par pseudo ou titre"
                value={searchTerm}
                onChange={handleSearch}
              />
            </Col>
          </Row>
          <Table hover>
            <thead>
              <tr>
                <th onClick={ () => handleSort('nickname') }>
                Pseudo { sortedField === 'nickname' && (isAsc ? '↑' : '↓') }
                </th>
                <th onClick={ () => handleSort('title') }>
                Titre { sortedField === 'title' && (isAsc ? '↑' : '↓') }
                </th>
                <th onClick={ () => handleSort('level') }>
                Niveau { sortedField === 'level' && (isAsc ? '↑' : '↓') }
                </th>
                <th onClick={ () => handleSort('points') }>
                Points { sortedField === 'points' && (isAsc ? '↑' : '↓') }
                </th>
                <th onClick={ () => handleSort('dreamsCount') }>
                Nombre de rêve { sortedField === 'dreamsCount' && (isAsc ? '↑' : '↓') }
                </th>
              </tr>
            </thead>
            <tbody>
              { currentUsers.map((user) => (
                <tr key={ user.id }>
                  <td><Link
                    to={ `/user/${ user.nickname }` }>{ user.nickname }</Link>
                  </td>
                  <td>
                    <Badge pill color="primary">
                      { user.title }
                    </Badge>
                  </td>
                  <td>{ user.level }</td>
                  <td>{ user.points }</td>
                  <td>{ user.dreamsCount }</td>
                </tr>
              )) }
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
                      { size } lignes par page
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

export default UserList
