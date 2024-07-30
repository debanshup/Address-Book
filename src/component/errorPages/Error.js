import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
const Error = () => {
    const error = useRouteError();
    // alert(
        isRouteErrorResponse(error)
    // )
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.message}</i>
            </p>
        </div>
    )
}

export default Error