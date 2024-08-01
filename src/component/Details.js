import React from 'react'
import { useParams } from 'react-router-dom'
import { getContactDetails } from '../utils/renderContacts'
const Details = () => {
    const { name } = useParams()

    const contact = getContactDetails(name)
    // alert(contact)
    if (contact !== null) {
        return (
            <div className='container-fluid row'>
                <div className="col-12 d-flex justify-content-end mb-3">
                    <button className="btn btn-primary me-2">
                        <i className='bi bi-pencil'></i>
                    </button>
                    <button className="btn btn-danger">
                        <i className='bi bi-trash'></i>
                    </button>
                </div>
                <div className="col-12 col-md-5 mb-3 mb-md-0">
                    <img src={contact.img} alt="contact_img" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-7">
                    <p className="h6">Name: <span className="fw-bold">{name}</span></p>
                    <p className="fst-italic fw-light">{contact.mobile}</p>
                    <p className="h6">
                        Description: <span className="fst-italic fw-light">{contact.description}</span>
                    </p>
                    <p className="h6">
                        Address: <span className="fst-italic fw-light">{contact.address}</span>
                    </p>
                </div>
            </div>

        )
    }
    return null
}

export default Details
