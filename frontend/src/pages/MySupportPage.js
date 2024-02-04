import React from "react";
import MySupport from "../components/MySupport";
import Map from "../components/Footer/Footer";
import Navbar from "../components/Navbars/Navbar";
import BottomNavbar from "../components/Navbars/BottomNavbar";

const MySupportPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BottomNavbar />
      <MySupport />
      <Map></Map>
    </div>
  );
};

export default MySupportPage;
