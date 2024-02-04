import React from 'react'
import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/BottomNavbar"
import Footer from '../components/Footer/Footer';
import Carmodificationcomponent from '../components/Modification/Carmodification';
import Commonrequirement from '../components/Modification/Commonrequirement';

export default function Bikemodification() {
    return (
        <>
            <Navbar></Navbar>
            <BottomNavbar />
            <Carmodificationcomponent />
            <Commonrequirement service={"car"}></Commonrequirement>

            <Footer></Footer>
        </>
    )
}
