import React from 'react'

const EditButton = ({onClick}) => {
  return (
    <>
    {/* edit btn */}

    <button className="btn btn-primary me-2" onClick={onClick}>
        <i className='bi bi-pencil'></i>
    </button>
</>
  )
}

export default EditButton