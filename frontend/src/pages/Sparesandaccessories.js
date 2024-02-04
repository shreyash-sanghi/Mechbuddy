import React from 'react';

import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/BottomNavbar"
import Search from '../components/Services/Search';
import Footer from '../components/Footer/Footer';
import Sparesandaccessories from '../components/Services/Sparesandaccessories';


/* const spare_data = [

    {
        name: "ab",
        price: 500,
        id: "sjjs"
    },
    {
        name: "bc",
        price: 600,
        id: "iufhfo"
    },
    {
        name: "cd",
        price: 700,
        id: "oifn"
    },
    {
        name: "de",
        price: 800,
        id: "ionf"
    },
    {
        name: "ef",
        price: 900,
        id: "ionfo"
    },
    {
        name: "fg",
        price: 1000,
        id: "onfon"
    }
] */

export default function Services(props) {

    return (
        <>
            <Navbar></Navbar>
            <BottomNavbar />
            <Search service_name={props.service_name}></Search>
            
             <Sparesandaccessories service_name={props.service_name} /> 

            <Footer></Footer>
        </>
    )
}
