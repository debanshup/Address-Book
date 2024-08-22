import React from 'react'

const DeleteButton = ({onClick}) => {
  return (
    <>
        {/* delete btn */}
        <button className="btn btn-danger" onClick={onClick}>
        <i className='bi bi-trash'></i>
    </button>
    </>
  )
}

export default DeleteButton