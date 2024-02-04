import React from 'react';
import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/BottomNavbar"

import Footer from '../components/Footer/Footer';
import Thankyou from '../components/Modification/Thankyou';
export default function Modification_thankyou() {
    return (
        <>
            <Navbar></Navbar>
            <BottomNavbar />
            <Thankyou></Thankyou>
            <Footer></Footer>
        </>
    )
}
