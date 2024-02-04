import React from 'react'
import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/BottomNavbar"
import Footer from '../components/Footer/Footer';
import Cover from '../components/Modification/Cover';
import Commonupload from '../components/Modification/Commonupload';
import Modificationstyle from '../components/Modification/Modificationstyle';
export default function Modificationservices(props) {
    return (
        <>
            <Navbar></Navbar>
            <BottomNavbar />
            <Cover></Cover>
            <Commonupload></Commonupload>
            <Modificationstyle></Modificationstyle>
            <Footer></Footer>
        </>
    )
}
