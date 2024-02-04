import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/BottomNavbar"

// import Slider from "../components/Carousels/Slider"

import Mission from "../components/Aboutpage/Mission"

import Journey from "../components/Aboutpage/Journey"

import Stats from "../components/Aboutpage/Stats"

import Contact from "../components/Aboutpage/Contact"

// import Map from "../components/Footer/Map";
import Footer from "../components/Footer/Footer"
import AboutHero from "../components/Aboutpage/AboutHero"

import Team from "../components/Aboutpage/Team"


const Home = () => {

  return (
    <>
      <Navbar></Navbar>
      <BottomNavbar />
      <AboutHero />
      <Mission />
      <Journey />
      <Team />
      <Stats />
      <Contact />
      <Footer />
    </>
  )
}

export default Home









