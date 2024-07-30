import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../component/Layout';
import Details from '../component/Details';
import Error from '../component/errorPages/Error';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ':name',
        element: <Details />,
        errorElement: <Error />,

      }
    ]
  }
])

export default route
