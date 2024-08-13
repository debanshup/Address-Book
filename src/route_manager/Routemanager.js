import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../component/Layout';
import Details from '../component/Details';
import Error from '../component/errorPages/Error';
import EditPage from '../component/EditPage';
import LayoutDefault from '../component/LayoutDefault';
const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [

      {
        index: true,
        element: <LayoutDefault />,

      },
      {
        path: ':name',
        element: <Details />,
        errorElement: <Error />,

      }

    ]
  }
])

export default route
