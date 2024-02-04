import React from 'react'

import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/BottomNavbar"


import Map from '../components/Footer/Map'
import Footer from '../components/Footer/Footer'
import MyOrder from '../components/MyOrder'


const MyOrderPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <BottomNavbar />
      <MyOrder />
      <Map></Map>
      <Footer></Footer>

    </>
  )
}

export default MyOrderPage