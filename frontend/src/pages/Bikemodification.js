import React from 'react'
import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/BottomNavbar"
import Footer from '../components/Footer/Footer';
import Bikemodificationcomponent from '../components/Modification/Bikemodification';
import Commonrequirement from '../components/Modification/Commonrequirement';
export default function Bikemodification() {
    return (
        <>
            <Navbar></Navbar>
            <BottomNavbar />
            <Bikemodificationcomponent />
            <Commonrequirement service={"bike"}></Commonrequirement>

            <Footer></Footer>
        </>
    )
}
