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
import { FaEye } from 'react-icons/fa6'
import PageBanner from 'components/Common/PageBanner'

interface AggregatedReport {
  dreamId: number;
  earliestReportDate: Date;
  reportCount: number;
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
    new Date(report.earliestReportDate).toLocaleDateString().includes(searchTerm)
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
      <PageBanner
        pageTitle="Reports list"
        homePageUrl="/admin"
        homePageText="Admin"
        activePageText="[Admin] Reports list"
      />
      <div className="pt-100 pb-70">
        <div className="container">
          <Row className="mb-3">
            <Col>
              <h2>Reports List</h2>
              <p>Total Reports: { filteredReports.length }</p>
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
                <th onClick={ () => handleSort('dreamId') }>
                ID { sortedField === 'dreamId' && (isAsc ? '↑': '↓') }
                </th>
                <th onClick={ () => handleSort('reportedBy') }>
                Author { sortedField === 'reportedBy' && (isAsc ? '↑': '↓') }
                </th>
                <th onClick={ () => handleSort('reportCount') }>
                Report Count { sortedField === 'reportCount' && (isAsc ? '↑': '↓') }
                </th>
                <th onClick={ () => handleSort('earliestReportDate') }>
                Earliest Report Date { sortedField === 'earliestReportDate' && (isAsc ? '↑': '↓') }
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { currentReports.length === 0 ? (
                <tr>
                  <td colSpan={ 6 } className="text-center">
                  No active reports found
                  </td>
                </tr>
              ): (
                currentReports.map((report) => (
                  <tr key={ report.dreamId }>
                    <td>{ report.dreamId }</td>
                    <td>
                      <Link to={ `/admin/users/${ report.reportedById }` }>
                        { report.reportedBy }
                      </Link>
                    </td>
                    <td>
                      <Badge pill color="primary">
                        { report.reportCount }
                      </Badge>
                    </td>
                    <td>{ new Date(report.earliestReportDate).toLocaleDateString() }</td>
                    <td className="d-flex justify-content-between">
                      <Link to={ `/admin/reports/${ report.dreamId }/details` }>
                        <Button className="btn-icon btn-2 mb-3" color="success" type="button">
                          <span className="btn-inner--icon">
                            <FaEye/>
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

export default ReportsList
