import React, { useEffect, useState } from 'react';

import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/BottomNavbar"

import Serviceproviders from '../components/Services/Serviceproviders';
import Serviceinfo from '../components/Services/Serviceinfo';
import Search from '../components/Services/Search';
import Footer from '../components/Footer/Footer';
import axios from 'axios';

const vendors = [

    {
        vendor_shop_name: "ABC auto parts",
        vendor_address: "mpeb colony khandwa road khargone",
        vendor_price: 500,
        vendor_service: ['service2', 'service3']
    },
    {
        vendor_shop_name: "Wheels on floor",
        vendor_address: "mpeb2 colony khandwa road khargone",
        vendor_price: 600,
        vendor_service: ['service1', 'service2']

    },
    {
        vendor_shop_name: "Garage 4",
        vendor_address: "mpeb3 colony khandwa road khargone",
        vendor_price: 700,
        vendor_service: ['service1', 'service2', 'service3']
    },
    {
        vendor_shop_name: "Another auto parts",
        vendor_address: "mpeb4 colony khandwa road khargone",
        vendor_price: 800,
        vendor_service: ['service1', 'service2']
    },
    {
        vendor_shop_name: "Test data parts",
        vendor_address: "mpeb5 colony khandwa road khargone",
        vendor_price: 900,
        vendor_service: ['service2', 'service3']
    },

]



export default function Services(props) {


    return (
        <>
            <Navbar></Navbar>
            <BottomNavbar />
            <Search service_name={props.service_name} ></Search>
            <Serviceinfo description={props.description}></Serviceinfo>
            <Serviceproviders service_name={props.service_name} vendors={vendors}></Serviceproviders>
            <Footer></Footer>
        </>
    )
}
