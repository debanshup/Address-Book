import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useSearchParams, } from 'react-router-dom'
import { renderContactName } from '../utils/renderContacts'
import { matchedContact } from '../utils/renderContacts'
import Search from './Search'
import './styles/styles.css'

const Layout = () => {


  return (
    <div className="container-fluid row " style={{ height: '100vh' }}>
      <div className="col-4 border-right rounded p-3 overflow-auto" style={{ maxHeight: '100vh' }}>

        <ul className="list-group rounded-0">
          {renderContactName()}
        </ul>
      </div>

      <div className="col-8 p-3 overflow-auto" style={{ maxHeight: '100vh' }}>

        {/* search bar */}
        <div className='d-flex align-items-center p-1 sticky-top mb-3'>
          <Search />
        </div>

        <div className="container rounded mb-4 p-3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout