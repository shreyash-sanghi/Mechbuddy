import React from 'react'
import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/BottomNavbar"
import Footer from '../components/Footer/Footer';
import Services from '../components/Modification/Services';
import Detailing from '../components/Modification/Detailing';
import Cover from '../components/Modification/Cover';


export default function Modification(props) {
    return (
        <>
            <Navbar></Navbar>
            <BottomNavbar />
            <Cover service_name='MODIFICATION'></Cover>
           {/*  <Search service_name={props.service_name} ></Search> */}
            <Services></Services>
            <Detailing></Detailing>
            <Footer></Footer>
        </>
    )
}
