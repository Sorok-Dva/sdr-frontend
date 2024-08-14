import '../styles/Spinner.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from 'context/UserContext'
import React from 'react'
import { Container, Spinner } from 'reactstrap'

const AdminRoute : React.FC = () => {
  const { user, isAdmin } = useUser()
  
  if (user === null) {
    return <Container className="loader-container">
      <div className="spinner-wrapper">
        <Spinner animation="border" role="status" className="custom-spinner">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <div className="loading-text">Loading</div>
      </div>
    </Container>
  }
  
  if (!isAdmin) {
    return <Navigate to="/" replace/>
  }
  
  return <Outlet/>
}

export default AdminRoute
