import React, { useState, useEffect } from 'react'
import { useParams, Outlet, useNavigate, } from 'react-router-dom'
import { getContactDetails } from '../utils/renderContacts'
import { getQualifiedName } from '../utils/formatter/getFormattedContact'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
const Details = () => {
    const { name } = useParams()
    const contact = getContactDetails(name)
    const [isEditing, setIsEditing] = useState(false)
    const [editableContact, setEditableContact] = useState(contact)

    // change listeners
    const clickListener = (e) => {  // debugging purpose
        console.log(e.target.value);
    }

    const handleInputChange = (e) => {
        // console.log(contact.name);

        const { name, value } = e.target

        setEditableContact({
            ...editableContact, [name]: value
        })
        // console.log(value);
    }

    // click listeners
    const handleEditClick = () => {
        setIsEditing(true)
        setEditableContact(contact) // set current contact editable
    }
    const handleDeleteClick = () => {
        
    }
    const handleSaveClick = () => {
        // todo add save logic
        setIsEditing(false)
    }
    const handleCancelClick = () => {
        setIsEditing(false)
        setEditableContact(contact) // reset change(s)
    }

    // alert(contact)
    useEffect(() => {



        return () => {

        }
    }, [])

    if (contact !== null) {
        return (
            <div className='container-fluid row'>
                <div className="col-12 d-flex justify-content-end mb-3">

                    {isEditing ? (
                        <>
                            <button className="btn btn-success me-2" onClick={handleSaveClick}>
                                <i className='bi bi-save'></i>
                            </button>
                            <button className="btn btn-secondary" onClick={handleCancelClick}>
                                <i className='bi bi-x'></i>
                            </button>
                        </>
                    ) : (
                        <>
                            {/* edit btn */}

                            <EditButton onClick={handleEditClick}/>
                            {/* delete btn */}

                            <DeleteButton onClick={handleDeleteClick}/>
                        </>
                    )}
                </div>
                <div className="col-12 col-md-5 mb-3 mb-md-0">
                    {
                        isEditing ? (
                            <>
                                <div>
                                    <img src={editableContact.image} alt="contact_img" className="img-fluid rounded" />
                                </div>
                                <div className="h6 lh-lg">
                                    <>
                                        <label htmlFor="">Image</label>
                                        <br />
                                        <input type="file"
                                            className='form-control'
                                            name='avatar'
                                            alt='avatar'
                                            onChange={handleInputChange}
                                        />
                                    </>
                                </div>
                            </>
                        ) : (
                            <img src={contact.image} alt="contact_img" className="img-fluid rounded" />

                        )
                    }
                </div>
                <div className="col-12 col-md-7">
                    <div className="h6 lh-lg">
                        {isEditing ? (
                            <>
                                <label htmlFor="">First Name:</label>
                                <input

                                    type="text"
                                    name="name"
                                    value={editableContact.firstName}
                                    onChange={handleInputChange}
                                    className="form-control"

                                />
                                <label htmlFor="">Last Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={editableContact.lastName}
                                    onChange={handleInputChange}
                                    className="form-control"

                                />
                            </>
                        ) : (
                            <span className="fw-bold">{getQualifiedName(contact.firstName, contact.lastName)}</span>
                        )}
                    </div>
                    <div className="h6 lh-lg">
                        {isEditing ? (
                            <>
                                <label htmlFor="">Mobile:</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    value={editableContact.mobile}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </>
                        ) : (
                            <span className="fst-italic fw-light"> {contact.mobile}</span>
                        )}
                    </div>
                    <div className="h6 lh-lg">
                        {isEditing ? (

                            <>
                                <label htmlFor="">Description:</label>

                                <textarea

                                    name="description"
                                    value={editableContact.description}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </>
                        ) : (
                            <span className="fst-italic fw-light">  {contact.description}</span>
                        )}
                    </div>
                    <div className="h6 lh-lg">
                        {isEditing ? (
                            <>
                                <label htmlFor="">Address:</label>

                                <textarea
                                    name="address"
                                    value={editableContact.address}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </>
                        ) : (
                            <span className="fst-italic fw-light"> {contact.address}</span>
                        )}
                    </div>
                </div>

            </div>
        );
    }
    return null
}

export default Details
