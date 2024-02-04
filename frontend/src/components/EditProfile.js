import React, { useContext, useState } from "react";
import SPDEMO from "../assets/SPDEMO.jpg";
import { BiSupport } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import settinghero from "../assets/settinghero.png";

import NoteState from '../context/NoteState';

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  Cog6ToothIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import noteContext from "../context/noteContext";

const EditProfile = () => {
  const history = useNavigate();
 
  const bgStyle = {
    backgroundImage: `url(${settinghero})`,
  };
  
   
   
   const {logoutUser} = useContext(noteContext);
  
   const handleLogout = () => {
    axios.post('http://localhost:8000/api/auth/logout')
    logoutUser();
    history('/');
  };
  
  

  return (
     <>
      <section
        style={bgStyle}
        className="relative h-[250px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >  
         
        <div className="absolute inset-0 sm:bg-transparent"></div>

        <div className="relative lg:p-16 mx-auto sm:px-6 lg:flex lg:items-center w-full">
          <div className="flex flex-col w-full lg:gap-[28rem] lg:p-6 lg:flex-row text-center">
            <div className="lg:w-1/2 lg:mr-4 rmd:text-center">
              <h1 className="text-3xl text-white rmd:text-center font-extrabold sm:text-5xl text-left">
                
                life
                <strong className="  rmd:text-center block font-extrabold text-rose-700">
                  Saver.
                </strong>
              </h1>
            </div>
            <div className=" lg:w-1/2 mt-4 lg:mt-0 lg:ml-4">
              <p className="rmd:text-center text-white sm:text-xl/relaxed text-right">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row h-full bg-[#000515]">
        {/* Left side or top side */}

        <Card className=" bg-[#000515] rounded-none	 md:h-[calc(100vh-2rem)] w-full md:max-w-[20rem] py-4 shadow-xl shadow-blue-gray-900/5 md:w-full md:flex md:flex-col flex-row  rmd:justify-between rmd:items-center">
          {/* left card */}
          <div className=" flex items-center justify-center">
            <div className="text-white  p-4 flex items-center">
              <Cog6ToothIcon className="text-xl h-5 w-5 mr-2" />{" "}
              {/* Add margin-right */}
              <Typography variant="h5" color="blue-gray">
                Settings
              </Typography>
            </div>
          </div>

          {/* right */}

          <div className="m-0 p-0 ">
            <List className="bg-[#F31D32] rmd:bg-black rmd:flex rmd:flex-row rmd:text-white rmd:p-0 rmd:text-3xl rmd:items-center">
            <Link to='/edit_profile'>
              <ListItem className=" hover:bg-[red] transition-colors p-5 rmd:p-1">
                <ListItemPrefix>
                  <PencilSquareIcon className="h-8 w-8" />
                </ListItemPrefix>
                <span className="rmd:hidden">Edit Profile</span>
              </ListItem>

              </Link>

              <Link to='/my_order'>
              <ListItem className="hover:bg-[red]  transition-colors p-5 rmd:p-1">
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-8 w-8" />
                </ListItemPrefix>
                <span className=" rmd:hidden">My Orders</span>
              </ListItem>

              </Link>

              <Link to='/my_support'>
              <ListItem className="  hover:bg-[red] transition-colors p-5 rmd:p-1">
                <ListItemPrefix>
                  <BiSupport className="h-8 w-8" />
                </ListItemPrefix>
                <span className="rmd:hidden">Support</span>
                <ListItemSuffix>
                  <Chip
                    value=""
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              </Link>
              <ListItem onClick={handleLogout} className="hover:bg-[red] transition-colors p-5 rmd:p-1 cursor-pointer">
              <ListItemPrefix>
                <Cog6ToothIcon className="h-8 w-8" />
              </ListItemPrefix>
              <span className="rmd:hidden">Logout</span>
            </ListItem>
         
            </List>
          </div>
          
        </Card>

        {/* ==================  right side or bottom =======*/}
        <div className="flex flex-col gap-10  w-full  p-4 shadow-xl shadow-blue-gray-900/5 rmd:flex-col bg-[#ffffff]">
          <div className=" flex items-center w-full h-20 ">
            <div className="   w-20  px-4">
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                alt="..."
                className="shadow-lg rounded-full max-w-full  align-middle border-none"
              />
            </div>
            <div className="">
              <span className="text-lg font-semibold">My Profile</span>
            </div>
          </div>
          {/* ================================= */}

          <div className="ml-3">
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Mech"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Buddy"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="mechbuddy@gmail.com"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-addresh"
                  >
                    Addresh
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-addresh"
                    type="text"
                    placeholder="Jabalpur Incubation Center"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-contact"
                  >
                    Contact
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-contact"
                    type="text"
                    placeholder="91XXXXXX70"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    City
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Jabalpur"
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    State
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Madhya Pradesh</option>
                      {/* <option>Utter Pradesh</option>
                      <option>Bihar</option> */}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-zip"
                  >
                    Zip
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder="482001"
                  />
                </div>
              </div>

              <button
                className="mt-6 linear flex flex-row items-center rounded-xl bg-green-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-green-600 active:bg-green-700 dark:bg-green-400 dark:text-white dark:hover:bg-green-300 dark:active:bg-green-200"
                data-ripple-light
              >
                <svg
                  className="mr-2 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  height="16"
                  width="16"
                >
                  <path d="M7.979 14.771Q7.792 14.771 7.615 14.698Q7.438 14.625 7.271 14.458L3.75 10.938Q3.458 10.646 3.469 10.219Q3.479 9.792 3.771 9.5Q4.062 9.208 4.49 9.208Q4.917 9.208 5.188 9.5L8.021 12.333L14.833 5.521Q15.104 5.229 15.521 5.229Q15.938 5.229 16.229 5.521Q16.5 5.812 16.5 6.219Q16.5 6.625 16.229 6.917L8.688 14.458Q8.521 14.625 8.344 14.698Q8.167 14.771 7.979 14.771Z" />
                </svg>
                Save all changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;