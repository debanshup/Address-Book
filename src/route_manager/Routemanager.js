import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../component/Layout';
import Details from '../component/Details';

const Routemanager = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path=':name' element={<Details />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Routemanager