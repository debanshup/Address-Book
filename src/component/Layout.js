import React from 'react'
import { Outlet } from 'react-router-dom'
import { renderContactName } from '../utils/renderContacts'

const Layout = () => {
  return (
    <div className="container-fluid row border" style={{ height: '100vh' }}>
      <div className="col-4 border-right p-3 overflow-auto" style={{ maxHeight: '100vh' }}>
        <h3>Names</h3>
        <ul className="list-group">
          {renderContactName()}
        </ul>
      </div>
      <div className="col-8 p-3 overflow-auto" style={{ maxHeight: '100vh' }}>
        <h3>Details</h3>
        <div className="container border mb-4 p-3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout