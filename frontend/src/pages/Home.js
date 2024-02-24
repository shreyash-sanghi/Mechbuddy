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
<<<<<<< HEAD
import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  // const { fetchData, login, name } = useContext(noteContext);
  const token = localStorage.getItem('token');

=======


const Home = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  // const { fetchData, login, name } = useContext(noteContext);
>>>>>>> f7ab62fe781f92ec3aea0f9c7b838146f23cba14

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };


 HEAD


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


=======
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
>>>>>>> f7ab62fe781f92ec3aea0f9c7b838146f23cba14
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