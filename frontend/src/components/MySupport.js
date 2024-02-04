import React, { useState } from "react";
import SPDEMO from "../assets/SPDEMO.jpg";
import { BiSupport } from "react-icons/bi";
import settinghero from "../assets/settinghero.png";
import { Link } from "react-router-dom";

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


const MySupport = () => {
  const bgStyle = {
    backgroundImage: `url(${settinghero})`,
  };

  const [initial, final] = useState({
    floating_name: "",
    floating_contact: "",
    repeat_query: ""
  })
  
  const setdata =(event)=>{
     const {name,value} = event.target;
     final((info)=>{
      return{
      ...info,
      [name] :value
      }
     })
  }

  const save_request = async (event)=>{
    event.preventDefault();
    try {
      const {floating_name,floating_contact,repeat_query} = initial;
       const response = await axios.post("http://localhost:8000/api/support/mysupport",{
        floating_name,floating_contact,repeat_query
       })
       console.log(response);
       alert("Send Successfully...");
    } catch (error) {
      console.log("My Support Error is "+ error);
    }
  }
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
              <h1 className="text-3xl rmd:text-center text-white font-extrabold sm:text-5xl text-left">
                Life
                <strong className="block font-extrabold rmd:text-center text-rose-700">
                  Saver.
                </strong>
              </h1>
            </div>
            <div className=" rmd:text-center lg:w-1/2 mt-4 lg:mt-0 lg:ml-4">
              <p className=" rmd:text-center text-white sm:text-xl/relaxed text-right">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row h-full bg-white">
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
            <List className="bg-[#F31D32] rmd:flex rmd:flex-row rmd:bg-black rmd:text-white rmd:p-0 rmd:text-3xl rmd:items-center">
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
            </List>
          </div>
        </Card>

        {/* ==================  right side or bottom =======*/}
        <div className="bg-[#FFFFFF] w-full">
          <div className=" bg-[#FFFFFF] ml-2 flex gap-10 mt-4 w-full  p-4 rmd:flex-col ">
            <div>
              <div className=" ">
                <h2 className="mt-10 font-semibold  text-5xl">
                  HOW CAN <br /> WE HELP YOU ?
                </h2>
              </div>

              <div className="mt-20 rmd:flex rmd:justify-center">
                <img className="w-[230px] h-[230px]" src={SPDEMO} alt="" />
              </div>
            </div>

            {/* ======================= form */}

            <div className="bg-white grayscale-0 mt-5 p-3 shadow-xl shadow-blue-gray-900/5  " >
              <div className=" flex  items-center  gap-8   p-4 ">
                <div className="">
                  <span className="my-3">
                    Please fill the form and describe your problem!
                  </span>

                  <form className="mt-8">
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        value={initial.floating_name}
                        name="floating_name"
                        id="floating_name"
                        class="block py-2.5 px-0 w-full text-sm  text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={setdata}
                      />
                      <label
                        for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Name
                      </label>
                    </div>

                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="floating_contact"
                        id="floating_contact"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={setdata}
                      />
                      <label
                        for="floating_password"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Contact
                      </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="repeat_query"
                        id="floating_repeat_query"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={setdata}
                      />
                      <label
                        for="floating_repeat_password"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Describe your query/queries
                      </label>
                    </div>

                    <div class="">
                      <span>Services</span>

                      <div className="flex flex-wrap my-8">
                        <div className="felx justify-center text-center align-middle  w-20  px-4">
                          <img
                            src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                            alt="..."
                            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                          />
                          <span className="mt-5">Reeta</span>
                        </div>
                        <div className="felx justify-center text-center align-middle  w-20  px-4">
                          <img
                            src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                            alt="..."
                            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                          />
                          <span className="mt-5">Reeta</span>
                        </div>
                        <div className="felx justify-center text-center align-middle  w-20  px-4">
                          <img
                            src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                            alt="..."
                            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                          />
                          <span className="mt-5">Reeta</span>
                        </div>
                        <div className="felx justify-center text-center align-middle  w-20  px-4">
                          <img
                            src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                            alt="..."
                            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                          />
                          <span className="mt-5">Reeta</span>
                        </div>
                      </div>
                    </div>

                    <input
                      type="submit" value={"Submit Query"} onClick={save_request}
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    />            
                  </form>
                </div>
              </div>
            </div>

            {/* =======================  from end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySupport;
