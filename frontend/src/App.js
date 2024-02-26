import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
  }
  
 from "react-router-dom";
 import { AuthProvider } from './AuthContext';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Home from './pages/Home';
import About from './pages/About';
import MyOrder from './pages/MyOrderPage'
import MySupportPage from './pages/MySupportPage';

import Trial from './pages/Trial';

import LoginPage from './pages/LoginPage';
import Signup from './components/Authentication/Signup';

import Services from './pages/Services';
import Sparesandaccessories from './pages/Sparesandaccessories';
import Vendor from './pages/Vendor';
import Cart from './pages/Cart';
import Thankyou from './pages/Thankyou';
import Error from './components/Error/Error';
import Modification from './pages/Modification';
import Modification_Thankyou from './pages/Modification_thankyou';
//admin panel
import Adminauthenticate from './pages/Adminauthenticate';
import Adminauth from './components/AdminPanel/Auth';
import Addvendor from './components/AdminPanel/Addvendor';
import Career from './pages/Career';
import EditProfilePage from './pages/EditProfilePage';


/* state managemtn throught context */
import NoteState from './context/NoteState';
import Bikemodification from './pages/Bikemodification';
import Carmodification from './pages/Carmodification';
import Modificationservices from './pages/Modificationservices';

import Vendorlogin from './components/AdminPanel/Vendorlogin';
import Test from './pages/Test';
import Vendordashboard from './vendorDashboard/VendorDashboard';
import { useEffect, useState } from 'react';


// contact us

import Contactus from './components/Contactus/Contactus';
import EditMyPage from './vendorDashboard/EditMyPage';

import Vendoraccount from './vendorDashboard/Vendoraccount';

function App() {

  return (
    <AuthProvider>
    <NoteState>
      
      <Router>
  
        <Routes>

          <Route exact path="*" element={<Error />} ></Route>

          <Route exact path="/" element={<Home />} ></Route>
    
          <Route exact path="/careers" element={<Career />} ></Route>
    
          
          <Route exact path="/about" element={<About />} ></Route>
          <Route exact path="/my_order" element={<MyOrder />} ></Route>
          <Route exact path="/my_support" element={<MySupportPage />} ></Route>
          <Route exact path="/edit_profile" element={<EditProfilePage />} ></Route>
          <Route exact path="/login" element={<LoginPage  />} ></Route>
          <Route exact path="/signup" element={<Signup />} ></Route>
          <Route exact path="/servicing" element={<Services service_name='servicing' description={"servicing"} />} ></Route>
          <Route exact path="/modification" element={<Modification service_name='modification' description={"modification"} />} ></Route>
          <Route exact path="/spares" element={<Sparesandaccessories service_name='spares' description={"spares"} />} ></Route>
          <Route exact path="/accessories" element={<Sparesandaccessories service_name='accessories' description={"accessories"} />} ></Route>
          <Route exact path="/vendor" element={<Vendor />} ></Route>
          <Route exact path="/bikemodification" element={<Bikemodification />} ></Route>
          <Route exact path="/carmodification" element={<Carmodification />} ></Route>

          <Route exact path="/cart" element={<Cart />} ></Route>
          <Route exact path="/order_complete" element={<Thankyou />} ></Route>
          <Route exact path="/admin" element={<Adminauth />} ></Route>
          <Route exact path="/admin/addvendor" element={<Addvendor />} ></Route>


          {/* modification */}
          <Route exact path="/wraping" element={<Modificationservices service_name={"Wraping"} />} ></Route>
          <Route exact path="/painting" element={<Modificationservices service_name={"Painting"} />} ></Route>
          <Route exact path="/coating" element={<Modificationservices service_name={"Coating"} />} ></Route>
          <Route exact path="/modification_order" element={<Modification_Thankyou/>} ></Route>


          {/* testing */}
          <Route exact path="/test" element={<Test />} ></Route>



        {/* //admin */}
          <Route exact path="/vendorlogin" element={<Vendorlogin />} ></Route>
          <Route exact path="/vendor_dashboard/:id" element={<Vendordashboard />} ></Route>
          <Route exact path="/contactus" element={<Contactus />} ></Route>
          <Route exact path="/edit_my_page/:id" element={<EditMyPage />} ></Route>
          <Route exact path="/vendor_account/:id" element={<Vendoraccount/>} ></Route>
          <Route exact path="/vendor_form/:id" element={<Addvendor/>} ></Route>

           <Route exact path="/trial" element={<Trial />} ></Route>
        </Routes>

      

      </Router>
    </NoteState>
    </AuthProvider>
  );
}

export default App;


/* const ProtectedRoute=({user,children})=>{
  if(user){
    return children;
  }
  else{
    return <Navigate to={'/signup'}/>
  }
} */

