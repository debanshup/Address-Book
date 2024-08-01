import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import { renderContactName } from '../utils/renderContacts'
import { matchedContact } from '../utils/renderContacts'

const Layout = () => {
  const dropdownRef = useRef(null)
  const searchbarRef = useRef(null)
  const detailsRef = useRef(null)
  const [contact, setContact] = useState(null)
  const [dropdownVisible, setdropdownVisible] = useState(false)
  const [searchTerm, setsearchTerm] = useState('')
  const [searchParam, setSearchParam] = useSearchParams();
  const searchedContactName = searchParam.get('name') // returns current value of query

  const handleSearchChange = (e) => {
    setContact(null)
    const name = e.target.value // should be exactly same with key of searchParam.get
    setSearchParam({ name }) // sets  searched param 
    setsearchTerm(name)
    setdropdownVisible(true)  // show dropdown
  }

  const handleSearchClick = () => {
    setdropdownVisible(true)
  }

  const handleOutsideClick = (e) => {
    if (dropdownRef.current
      && !dropdownRef.current.contains(e.target)
      && !searchbarRef.current.contains(e.target)) {
      setdropdownVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)

    }
  }, [])



  useEffect(() => {
    if (searchedContactName) {
      const contact = matchedContact(searchedContactName)
      setContact(contact)
    } else {
      setContact(null)
    }

  }, [searchedContactName])


  return (
    <div className="container-fluid row border" style={{ height: '100vh' }}>
      <div className="col-4 border-right p-3 overflow-auto" style={{ maxHeight: '100vh' }}>
        <div className='d-flex align-items-center mb-3'>

          {/* search  */}
          <input
            ref={searchbarRef}
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onClick={
              () => {
                handleSearchClick()
              }
            }
            placeholder="Search..."
            className="form-control m-2"
          />

          {/* Dropdown Menu */}
          {/* <div className="dropdown-menu show list-group mt-5 rounded-0" ref={dropdownRef} style={{ zIndex: 1050 }}>
            <p>hi</p>
            <p>hello</p>
            <p>hello</p>
          </div> */}
          {dropdownVisible && (
            <div className="dropdown-menu show list-group rounded-0" ref={dropdownRef} style={{ zIndex: 1050, marginTop: '100px' }}>
              {contact ? (
                <li className='list-group-item'>
                  {contact.name}
                </li>
              ) : searchedContactName && (
                <p>no contact found</p>
              )}
            </div>
          )}
        </div>
        <ul className="list-group rounded-0">
          {renderContactName()}
        </ul>
      </div>
      <div className="col-8 p-3 overflow-auto" ref={detailsRef} style={{ maxHeight: '100vh' }}>
        <div>
          {/* <h3>Details</h3> */}
        </div>
        <div className="container border rounded mb-4 p-3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout