import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { matchedContact, } from '../utils/renderContacts'
import { getQualifiedName } from '../utils/formatter/getFormattedContact'
import './styles/styles.css'

const Search = () => {
    const dropdownRef = useRef(null)
    const searchbarRef = useRef(null)
    // const detailsRef = useRef(null)
    const [suggestedContact, setSuggestedContact] = useState([])
    const [dropdownVisible, setdropdownVisible] = useState(false)
    // const [searchTerm, setsearchTerm] = useState('')
    const [searchParam, setSearchParam] = useSearchParams();
    const searchedContactName = searchParam.get('name') // returns current value of query

    const handleSearchChange = () => {
        // setContact(null)
        const name = searchbarRef.current.value // should be exactly same with key of searchParam.get
        // console.log(name);
        setSearchParam({ name }) // sets  searched param 

        setdropdownVisible(name.length > 0)  // show dropdown if theres any input
        // console.log(searchedContactName);
    }

    const handleSearchClick = () => {
        // alert(searchbarRef.current.value.length > 0)
        setdropdownVisible(searchbarRef.current.value.length > 0)
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
            // setSuggestedContact([])
            const contacts = matchedContact(searchedContactName)
            setSuggestedContact(contacts)

        } else {
            setSuggestedContact([])  // Clear suggestions if the search is empty
        }
    }, [searchedContactName])


    return (
        <>
            {/* Search Bar */}
            <div className="input-group">
                <input
                    ref={searchbarRef}
                    type="text"
                    onChange={handleSearchChange}
                    onClick={handleSearchClick}
                    placeholder="Search..."
                    className="form-control rounded-top rounded-bottom-0 border border-secondary p-2 border-opacity-25"
                />

                {/* Dropdown Menu */}
                {dropdownVisible && (
                    <div className="dropdown-menu show custom-scrollbar border-0 m-0 p-0 rounded-top-0 rounded-bottom"
                        ref={dropdownRef}
                        //  onClick={handleNavClick}
                        style={{
                            zIndex: 1050,
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            maxHeight: '20vh',
                            overflowY: 'scroll',
                            textAlign: 'center',

                        }}>

                        <ul className='list-group rounded-0'>
                            {
                                suggestedContact.length > 0 ? (
                                    suggestedContact.map(contact => (

                                        <Link
                                            key={getQualifiedName(contact.firstName, contact.lastName)}
                                            className="list-group-item border-secondary border-opacity-25 hover-custom-bg "
                                            to={getQualifiedName(contact.firstName, contact.lastName)}>
                                            {getQualifiedName(contact.firstName, contact.lastName)}
                                        </Link>

                                    ))
                                ) : (
                                    <div>
                                        <p>
                                            No contact found
                                        </p>
                                        <Link className='btn btn-primary mb-2'>
                                            Add
                                        </Link>
                                    </div>
                                )
                            }
                        </ul>


                    </div>
                )}

            </div>

        </>
    )
}

export default Search