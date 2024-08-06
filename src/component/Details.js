import React, { useState } from 'react'
import { useParams, Outlet, useNavigate, } from 'react-router-dom'
import { getContactDetails } from '../utils/renderContacts'
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
        console.log(contact.name);
        

        const { name, value } = e.target

        setEditableContact({
            ...editableContact, [name]: value
        })
        // console.log(value);
    }

    // click listeners
    const handleEditClick = () => {
        setIsEditing(true)
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

                            <button className="btn btn-primary me-2" onClick={handleEditClick}>
                                <i className='bi bi-pencil'></i>
                            </button>
                            {/* delete btn */}

                            <button className="btn btn-danger">
                                <i className='bi bi-trash'></i>
                            </button>
                        </>
                    )}
                </div>
                <div className="col-12 col-md-5 mb-3 mb-md-0">
                    {
                        isEditing ? (
                            <>
                            <div>
                            <img src={editableContact.img} alt="contact_img" className="img-fluid rounded" />
                            </div>
                                <p className="h6">Image:
                                    <input type="file"
                                        className='form-control'
                                        name='avatar'
                                        alt='avatar'
                                        onChange={handleInputChange}
                                    />
                                </p>
                            </>
                        ) : (
                            <img src={contact.img} alt="contact_img" className="img-fluid rounded" />

                        )
                    }
                </div>
                <div className="col-12 col-md-7">
                    <p className="h6">Name:
                        {isEditing ? (
                            <input

                                type="text"
                                name="name"
                                value={editableContact.name}
                                onChange={handleInputChange}
                                className="form-control"

                            />
                        ) : (
                            <span className="fw-bold"> {name}</span>
                        )}
                    </p>
                    <p className="h6">Mobile:
                        {isEditing ? (
                            <input

                                type="text"
                                name="mobile"
                                value={editableContact.mobile}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        ) : (
                            <span className="fst-italic fw-light"> {contact.mobile}</span>
                        )}
                    </p>
                    <p className="h6">Description:
                        {isEditing ? (
                            <textarea

                                name="description"
                                value={editableContact.description}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        ) : (
                            <span className="fst-italic fw-light"> {contact.description}</span>
                        )}
                    </p>
                    <p className="h6">Address:
                        {isEditing ? (
                            <textarea
                                name="address"
                                value={editableContact.address}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        ) : (
                            <span className="fst-italic fw-light"> {contact.address}</span>
                        )}
                    </p>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        );
    }
    return null
}

export default Details
