import '../assets/vendor/nucleo/css/nucleo.css'

import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout : React.FC = (props) => {
  return (
    <>
      <div className="main-content">
        <Outlet/>
      </div>
    </>
  )
}

export default AdminLayout
