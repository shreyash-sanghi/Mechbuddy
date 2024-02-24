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
import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  // const { fetchData, login, name } = useContext(noteContext);
  const token = localStorage.getItem('token');


  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };




const getdata = async()=>{
   try {
    axios.defaults.headers.common["Authorization"] = token;
   const result =  await axios.get("http://localhost:8000/api/auth/homepage");
   const role = result.data.role;
   const id = result.data.id;
   console.log(id);
   if(role === "vendor"){
    navigate(`/vendor_dashboard/${id}`)
   }
   else{
    navigate("/")
   }
   } catch (error) {
    alert(error);
    console.log(error);
   } 
}
 console.log(token);
  useEffect(()=>{
    if(token != null){
    getdata()
    }
  },[])


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