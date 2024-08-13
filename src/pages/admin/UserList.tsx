import React, { useEffect, useState } from 'react'
import { Col, Container, Input, Pagination, PaginationItem, PaginationLink, Progress, Row, Table } from 'reactstrap'
import { useAuth } from 'context/AuthContext'
import { Link } from 'react-router-dom'

interface User {
  id: number;
  nickname: string;
  email: string;
  roleId: string;
  screenshotCount: number;
  quota: number;
  createdAt: Date;
}

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
        const response = await fetch('/api/admin/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
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
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  
  const getProgressBarClass = (quota: number) => {
    if (quota < 50) return 'bg-gradient-success'
    if (quota < 80) return 'bg-gradient-warning'
    return 'bg-gradient-danger'
  }
  
  return (
    <>
      <Container fluid className="pt-8">
        <Row className="mb-3">
          <Col>
            <h2>User List</h2>
            <p>Total Users: {filteredUsers.length}</p>
          </Col>
          <Col>
            <Input
              type="text"
              placeholder="Search by username or email"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Col>
        </Row>
        <Table hover>
          <thead>
            <tr>
              <th onClick={() => handleSort('nickname')}>
              Username {sortedField === 'nickname' && (isAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('email')}>
              Email {sortedField === 'email' && (isAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('screenshotCount')}>
              Screenshots {sortedField === 'screenshotCount' && (isAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('quota')}>
              Quota {sortedField === 'quota' && (isAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('createdAt')}>
              Created At {sortedField === 'createdAt' && (isAsc ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td><Link to={`/admin/users/${user.id}`}>{user.nickname}</Link></td>
                <td>{user.email}</td>
                <td>{user.screenshotCount}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">{user.quota}%</span>
                    <div>
                      <Progress
                        max="100"
                        value={user.quota}
                        barClassName={getProgressBarClass(user.quota)}
                      />
                    </div>
                  </div>
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          <PaginationItem disabled={currentPage === 1}>
            <PaginationLink first onClick={() => paginate(1)} />
          </PaginationItem>
          <PaginationItem disabled={currentPage === 1}>
            <PaginationLink previous onClick={() => paginate(currentPage - 1)} />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem active={index + 1 === currentPage} key={index}>
              <PaginationLink onClick={() => paginate(index + 1)}>{index + 1}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={currentPage === totalPages}>
            <PaginationLink next onClick={() => paginate(currentPage + 1)} />
          </PaginationItem>
          <PaginationItem disabled={currentPage === totalPages}>
            <PaginationLink last onClick={() => paginate(totalPages)} />
          </PaginationItem>
          <Col>
            <Input
              type="select"
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value))
                setCurrentPage(1) // Reset to first page when changing rows per page
              }}
              className="w-auto"
            >
              {[10, 30, 50, 100, 500].map((size) => (
                <option key={size} value={size}>
                  {size} rows per page
                </option>
              ))}
            </Input>
          </Col>
        </Pagination>
      </Container>
    </>
  )
}

export default UserList
