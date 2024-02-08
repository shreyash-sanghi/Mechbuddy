import React from 'react';
import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/BottomNavbar"
import Footer from '../components/Footer/Footer';
import Vendor from '../components/Services/Vendor';

export default function Cart() {
    return (
        <>
            <Navbar></Navbar>
            <BottomNavbar />
            <Vendor></Vendor>
            <Footer></Footer>
        </>
    )
}
