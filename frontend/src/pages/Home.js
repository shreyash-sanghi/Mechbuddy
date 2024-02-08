import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/BottomNavbar"

import Slider from "../components/Carousels/Slider"
import OurServices from "../components/Homepage/OurServices"
import OurOffers from "../components/Homepage/OurOffers"
import NearbyServiceProviders from "../components/Homepage/NearbyServiceProviders"

import RecentWork from "../components/Homepage/RecentWork"

import Map from "../components/Footer/Map";
import Footer from "../components/Footer/Footer"

import Testimonial from "../components/Homepage/Testimonial"
import TestimonialSlider from "../components/Homepage/TestimonialSlider"

import WhatsAppButton from "../components/WhatsAppButton"
import Login from "../components/Authentication/Login"
import { useContext, useEffect, useState } from "react"
import axios from "axios"


const Home = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  // const { fetchData, login, name } = useContext(noteContext);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };


  // setTimeout(() => {
  //   localStorage.removeItem('token')
  // }, 60000);

// const getdata = async()=>{
//    try {
//     const result = ;
//     console.log(result);
//    } catch (error) {
//     console.log(error);
//    } 
// }

  // useEffect(async()=>{
  //   setTimeout(async()=>{
  //     console.log("hello");
  //     // await axios.get("http://localhost:8000/api/auth/homepage");
  //     // localStorage.removeItem('token')
  //   },60000)
  // },[])
   {/* changes -->>> i used whatsapp component and css file to add the whatsapp button with mix blend mode  */}
  return (
    <> 
     <Navbar onLoginClick={openLoginModal} />
     
      <WhatsAppButton />
      <BottomNavbar />
      <TestimonialSlider />
      
      <OurServices />
      <OurOffers></OurOffers>
      <NearbyServiceProviders />
      <RecentWork />
      <Testimonial />
     
      <Map></Map>
      <Footer></Footer>
     
  
    </>
  )
}

export default Home