import React from 'react'
import Layout from './component/Layout'
import Routemanager from './route_manager/Routemanager'
import Details from './component/Details'
const Profile = () => {
  return (
    <>
      <Routemanager />
      <Layout />
      <Details></Details>
    </>
  )
}

export default Profile