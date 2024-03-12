import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import noteContext from "../context/noteContext";
import axios from "axios";

const VendorDashboardNav = ()=>{
  const {id} = useParams();

   const history = useNavigate();

    const {logoutUser} = useContext(noteContext);
  
    const handleLogout = () => {
     axios.post('http://localhost:8000/api/auth/logout')
     logoutUser();
     history('/');
   };

   useEffect(()=>{
    const token = localStorage.getItem('token');
    axios.defaults.headers.common["Authorization"] = token;
   })
    return(
        <>
    <div class="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 ">
          <div class="flex w-full items-center">
            <div class="flex items-center text-3xl text-gray-900 dark:text-white">
              {/* <img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512" class="w-12 mr-4 rounded-full" alt="profile" /> */}
              MechBuddy
            </div>
            <div class="ml-auto sm:flex hidden items-center justify-end">
              <div class="text-right">
                <div class="text-sm md:text-lg text-white">Name</div>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-3 sm:mt-7 mt-4">
            <Link to={`/vendor_dashboard/${id}`} class="px-3   text-white  hover:border-b-2 hover:border-white pb-1.5">User</Link>
            <Link to={`/vendor_plan/${id}`} class="px-3   text-white  hover:border-b-2 hover:border-white pb-1.5">Plans</Link>
            <Link to={`/edit_my_page/${id}`} class="px-3 whitespace-nowrap  border-b-2 border-transparent text-white pb-1.5">My Offer</Link>
            <Link to={`/vendor_account/${id}`} class="px-3 border-b-2 border-transparent text-white pb-1.5 ">Profile</Link>
            <button onClick={handleLogout} class="px-3 whitespace-nowrap border-b-2 border-transparent text-white pb-1.5 ">Log Out</button>

          </div>
        </div>

        </>
    )
}

export default VendorDashboardNav;