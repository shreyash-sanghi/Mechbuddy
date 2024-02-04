import React from "react";
import EditProfile from "../components/EditProfile";
import Navbar from "../components/Navbars/Navbar";
import BottomNavbar from "../components/Navbars/BottomNavbar";
import Map from "../components/Footer/Footer";

const EditProfilePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <BottomNavbar />
      <EditProfile />
      <Map></Map>
    </>
  );
};

export default EditProfilePage;
