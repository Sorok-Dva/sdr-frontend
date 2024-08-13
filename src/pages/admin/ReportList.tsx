import React, { useEffect, useState } from 'react'
import {
  Badge,
  Button,
  Col,
  Container,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from 'reactstrap'
import { useAuth } from 'context/AuthContext'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa6'

interface AggregatedReport {
  screenshotId: number;
  earliestReportDate: Date;
  reportCount: number;
  screenshotUrl: string;
  reportedBy: string;
  reportedById: number;
}

const ReportsList: React.FC = () => {
  const { token } = useAuth()
  const [reports, setReports] = useState<AggregatedReport[]>([])
  const [sortedField, setSortedField] = useState<keyof AggregatedReport | null>(null)
  const [isAsc, setIsAsc] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [searchTerm, setSearchTerm] = useState<string>('')
  
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('/api/admin/reports', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const data = await response.json()
        setReports(data)
      } catch (err) {
        console.error('Failed to fetch reports', err)
      }
    }
    
    fetchReports()
  }, [token])
  
  const handleSort = (field: keyof AggregatedReport) => {
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
  }
  
  const filteredReports = reports.filter((report) =>
    report.reportedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.reportCount.toString().includes(searchTerm) ||
    new Date(report.earliestReportDate).toLocaleDateString().includes(searchTerm) ||
    report.screenshotUrl.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const sortedReports = [...filteredReports].sort((a, b) => {
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
  
  const indexOfLastReport = currentPage * rowsPerPage
  const indexOfFirstReport = indexOfLastReport - rowsPerPage
  const currentReports = sortedReports.slice(indexOfFirstReport, indexOfLastReport)
  
  const totalPages = Math.ceil(filteredReports.length / rowsPerPage)
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  
  return (
    <>
      <Container fluid className="pt-8">
        <Row className="mb-3">
          <Col>
            <h2>Reports List</h2>
            <p>Total Reports: {filteredReports.length}</p>
          </Col>
          <Col>
            <Input
              type="text"
              placeholder="Search in all fields"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Col>
        </Row>
        <Table hover>
          <thead>
            <tr>
              <th onClick={() => handleSort('screenshotId')}>
              ID {sortedField === 'screenshotId' && (isAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('screenshotUrl')}>
              URL {sortedField === 'screenshotUrl' && (isAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('reportedBy')}>
              Screen author {sortedField === 'reportedBy' && (isAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('reportCount')}>
              Report Count {sortedField === 'reportCount' && (isAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('earliestReportDate')}>
              Earliest Report Date {sortedField === 'earliestReportDate' && (isAsc ? '↑' : '↓')}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentReports.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center">
                No active reports found
                </td>
              </tr>
            ) : (
              currentReports.map((report) => (
                <tr key={report.screenshotId}>
                  <td>{report.screenshotId}</td>
                  <td>
                    <Link to={`/${report.screenshotUrl}`} target="_blank">
                      {report.screenshotUrl}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/admin/users/${report.reportedById}`}>
                      {report.reportedBy}
                    </Link>
                  </td>
                  <td>
                    <Badge pill color="primary">
                      {report.reportCount}
                    </Badge>
                  </td>
                  <td>{new Date(report.earliestReportDate).toLocaleDateString()}</td>
                  <td className="d-flex justify-content-between">
                    <Link to={`/admin/reports/${report.screenshotId}/details`}>
                      <Button className="btn-icon btn-2 mb-3" color="success" type="button">
                        <span className="btn-inner--icon">
                          <FaEye />
                        </span>
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))
            )}
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
              <PaginationLink onClick={() => paginate(index + 1)}>
                {index + 1}
              </PaginationLink>
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

export default ReportsList
