import React, { useEffect, useState } from "react";
import SPDEMO from "../assets/SPDEMO.jpg";
import settinghero from "../assets/settinghero.png";
import { BiSupport } from "react-icons/bi";

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
import { Link } from "react-router-dom";

const MyOrder = () => {
  const bgStyle = {
    backgroundImage: `url(${settinghero})`,
  };

  const [loading, setloading] = useState(false);
  const [historyitem, setHistory] = useState();
  const handlegetorder = async (e) => {
    setloading(true);
    console.log("happening sometin");
    try {
      const response = await fetch(`http://localhost:8000/api/payment/getorder`, {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem('token')
        }

      });
      const json = await response.json();
      if (json.success) {
        setloading(false);
        setHistory(json.history);
      }
      else {
        setloading(false);
        alert("fail");

      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handlegetorder();
  }, []);


  return (

    <>
      <section
        style={bgStyle}
        className="relative h-[250px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        <div className="absolute inset-0 sm:bg-transparent"></div>

        <div className="relative lg:p-16 mx-auto sm:px-6 lg:flex lg:items-center w-full">
          <div className="flex flex-col w-full lg:gap-[28rem] lg:p-6 lg:flex-row text-center">
            <div className="lg:w-1/2 lg:mr-4">
              <h1 className="text-3xl text-white rmd:text-center font-extrabold sm:text-5xl text-left">
                Life
                <strong className="block font-extrabold text-rose-700">
                  Saver.
                </strong>
              </h1>
            </div>
            <div className=" lg:w-1/2 mt-4 lg:mt-0 lg:ml-4">
              <p className=" text-white rmd:text-center sm:text-xl/relaxed text-right">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row h-full bg-[#000515]">
        {/* Left side or top side */}

        <Card className=" bg-[#000515] md:h-[calc(100vh-2rem)] w-full md:max-w-[20rem] py-4 shadow-xl shadow-blue-gray-900/5 md:w-full md:flex md:flex-col flex-row  rmd:justify-between rmd:items-center">
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
            <List className="bg-[#F31D32] rmd:flex rmd:flex-row  text-center rmd:text-white rmd:bg-[black] rmd:p-0 rmd:text-3xl rmd:items-center">

              <Link to='/edit_profile'>
                <ListItem className=" hover:bg-[red] transition-colors p-5 rmd:p-1">
                  <ListItemPrefix>
                    <PencilSquareIcon className="h-8 w-8" />
                  </ListItemPrefix>
                  <span className="rmd:hidden">Edit Profile</span>
                </ListItem>
              </Link>


              <Link to='/my_order'>
                <ListItem className="hover:bg-[red] transition-colors p-5 rmd:p-1">
                  <ListItemPrefix>
                    <ShoppingBagIcon className="h-8 w-8" />
                  </ListItemPrefix>
                  <span className=" rmd:hidden">My Orders</span>
                </ListItem>

              </Link>
              <Link to='/my_support'>
                <ListItem className="hover:bg-[red] transition-colors p-5 rmd:p-1">
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
        <div className="h-[calc(100vh-2rem)] overflow-auto no-scrollbar w-full  p-4 shadow-xl shadow-blue-gray-900/5 bg-[#FFFFFF]">
          <h2 className="mt-10 font-semibold  text-xl">My Orders</h2>

          <div className="bg-[#FFFFFF] grayscale-0 mt-5 p-7">
            <div>
              <span className=" bg-[#FFFFFF ] text-base  rounded-full">
                {" "}
                Ordered services{" "}
              </span>

              {/* =======================  Container image and descreption and button */}

              {
                historyitem && historyitem.map((item) => {
                  return (
                    <div className=" flex  items-center  gap-8  mt-10 border-y border-gray-400 p-4 ">
                      <div className="w-[160px] h-[160px]">
                        <img
                          className="object-cover w-full h-full"
                          src={SPDEMO}
                          alt="Your Imag Alt Text"
                        />
                      </div>

                      <div className="">
                        <p className="my-3">
                          {item.products.map((temp=>{
                            return (
                              temp.item_title + '+'
                            )
                          }))}
                          {/* Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem */}
                        </p>

                        <button
                          type="button"
                          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                          {item.orderStatus}
                        </button>
                      </div>
                    </div>
                  )
                })
              }


              {/* =======================  Container end */}
              {/* =======================  Container image and descreption and button */}

              {/* <div className=" flex  items-center  gap-8  mt-10 border-y border-gray-400 p-4 ">
                <div className="w-[160px] h-[160px]">
                  <img
                    className="object-cover w-full h-full"
                    src={SPDEMO}
                    alt="Your Image Alt Text"
                  />
                </div>

                <div className="">
                  <p className="my-3">
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  </p>

                  <button
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Date Of Delivery
                  </button>
                </div>
              </div> */}

              {/* =======================  Container end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
