import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useSearchParams, Link } from 'react-router-dom'
import { renderContactName } from '../utils/renderContacts'
import { matchedContact } from '../utils/renderContacts'
import './styles/styles.css'

const Layout = () => {
  const dropdownRef = useRef(null)
  const searchbarRef = useRef(null)
  const detailsRef = useRef(null)
  const [contact, setContact] = useState(null)
  const [dropdownVisible, setdropdownVisible] = useState(false)
  // const [searchTerm, setsearchTerm] = useState('')
  const [searchParam, setSearchParam] = useSearchParams();
  const searchedContactName = searchParam.get('name') // returns current value of query

  const handleSearchChange = () => {
    setContact(null)
    const name = searchbarRef.current.value // should be exactly same with key of searchParam.get
    // console.log(name);
    setSearchParam({ name }) // sets  searched param 

    // setsearchTerm(name)
    setdropdownVisible(true)  // show dropdown
    // console.log(searchedContactName);
    // (contact)
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
      // console.log(searchedContactName);

      const contact = matchedContact(searchedContactName)
      // console.log(contact);

      if (contact) console.log(contact.name);
      setContact(contact)

    }

  }, [searchedContactName])


  return (
    <div className="container-fluid row border" style={{ height: '100vh' }}>
      <div className="col-4 border-right rounded p-3 overflow-auto" style={{ maxHeight: '100vh' }}>


        <div className='d-flex align-items-center p-1 sticky-top mb-3'>

          {/* Search Bar */}
          <div className="input-group">
            <input
              ref={searchbarRef}
              type="text"
              onChange={handleSearchChange}
              onClick={handleSearchClick}
              placeholder="Search..."
              className="form-control rounded"
            />

            {/* Dropdown Menu */}
            {dropdownVisible && (
              <div className="dropdown-menu show w-100 custom-scrollbar" ref={dropdownRef} style={{ zIndex: 1050, 
              position: 'absolute', 
              top: '100%', 
              left: 0, 
              maxHeight: '20vh',
               overflowY: 'scroll'
               }}>
                {contact ? (
                  <Link key={contact.image} to={contact.name} className='dropdown-item text-color'>
                    {contact.name}
                  </Link>
                ) : searchedContactName && (
                  <p className='dropdown-item text-secondary text-wrap text-break'>
                    No contact found with name <span className='not-found-text'>{`"${searchedContactName}"`}</span>
                  </p>
                )}
              </div>
            )}

          </div>
        </div>



        <ul className="list-group rounded-0">
          {renderContactName()}
        </ul>
      </div>
      <div className="col-8 p-3 overflow-auto" ref={detailsRef} style={{ maxHeight: '100vh' }}>

        <div className="container border rounded mb-4 p-3">

          {/* debugging  */}
          {/* <button className='btn btn-dark'
        onClick={
          (e) => {
            e.preventDefault()
            console.log(contact.name);
            
          }
        }
        >
            click
          </button>

             */}

          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout