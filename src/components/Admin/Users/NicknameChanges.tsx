import React, { useState } from 'react'
import { Table, Input } from 'reactstrap'

interface NicknameChange {
  oldNickname: string;
  newNickname: string;
  createdAt: Date;
}

interface NicknameChangesProps {
  nicknameChanges: NicknameChange[];
}

const NicknameChanges: React.FC<NicknameChangesProps> = ({ nicknameChanges }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [sortedField, setSortedField] = useState<keyof NicknameChange | null>(null)
  const [isAsc, setIsAsc] = useState<boolean>(true)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const handleSort = (field: keyof NicknameChange) => {
    if (sortedField === field) {
      setIsAsc(!isAsc)
    } else {
      setSortedField(field)
      setIsAsc(true)
    }
  }

  const filteredChanges = nicknameChanges.filter((change) =>
    change.oldNickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    change.newNickname.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedChanges = [...filteredChanges].sort((a, b) => {
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

  const indexOfLastChange = currentPage * rowsPerPage
  const indexOfFirstChange = indexOfLastChange - rowsPerPage
  const currentChanges = sortedChanges.slice(indexOfFirstChange, indexOfLastChange)

  const totalPages = Math.ceil(filteredChanges.length / rowsPerPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="pt-100 pb-70">
      <div className="container">
        <h2>Nickname Changes</h2>
        <Input
          type="text"
          placeholder="Search by old or new nickname"
          value={searchTerm}
          onChange={handleSearch}
          className="mb-3"
        />
        {currentChanges.length === 0 ? (
          <p>No nickname changes recorded.</p>
        ) : (
          <Table hover>
            <thead>
              <tr>
                <th onClick={() => handleSort('oldNickname')}>
                Old Nickname {sortedField === 'oldNickname' && (isAsc ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('newNickname')}>
                New Nickname {sortedField === 'newNickname' && (isAsc ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('createdAt')}>
                Changed At {sortedField === 'createdAt' && (isAsc ? '↑' : '↓')}
                </th>
              </tr>
            </thead>
            <tbody>
              {currentChanges.map((change, index) => (
                <tr key={index}>
                  <td>{change.oldNickname}</td>
                  <td>{change.newNickname}</td>
                  <td>{new Date(change.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="form-select w-auto"
            >
              {[5, 10, 20, 50, 100].map((size) => (
                <option key={size} value={size}>
                  {size} rows per page
                </option>
              ))}
            </select>
          </div>
          <div>
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => paginate(1)}
                >
                  First
                </button>
              </li>
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => paginate(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => paginate(currentPage + 1)}
                >
                  Next
                </button>
              </li>
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => paginate(totalPages)}
                >
                  Last
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NicknameChanges
