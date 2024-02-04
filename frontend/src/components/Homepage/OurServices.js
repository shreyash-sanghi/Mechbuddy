import React from "react";
import { Link } from "react-router-dom";
import bgcars from "./assets/bgcarsjpg.jpg"
import servicing from './assets/servicing.svg'
import spares from './assets/spares.svg'
import modification from './assets/modification.svg';
import accessories from './assets/accessories.svg'
const OurServices = () => {

  const bgStyle = {
    backgroundImage: `url(${bgcars})`,
  };


  return (
    <div className="bg-[#000000]  h-full pb-10 " id="service_section " >
      {/* Title */}
      <div className="flex justify-center">
      <h1 className="flex justify-center text-[#F31D32] items-center w-full  h-12 text-center mb-8 bg-[#000000] text-2xl font-bold border-y-2 space-x-[7px]" ><span>
        OUR</span>
         <span className="text-white word-spacing">SERVICES</span>
        </h1>
      
      </div>

      {/* card for larger size */}
      <div className="hidden sm:grid sm:grid-cols-2 sm:gap-y-4 sm:gap-x-4  md:gap-y-12 md:gap-x-12 xl:gap-y-12 xl:gap-x-8  sm:p-4 md:p-8 place-items-center ">

        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={servicing} alt="" srcset="" />

            </div>
          </div>
          <div className="p-2">
            <div className="p-6 rounded-lg" style={bgStyle} >
              <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                Servicing
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                Schedule Your Service in advanced With Us And Get It Done In Time.
              </p>
              <Link to='/servicing' className="inline-block" href="#">
                <button
                  className="flex flex-row items-center rounded-xl bg-gray-100 px-4 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
                  type="button"
                >
                  Get Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>


        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={modification} alt="" srcset="" />

            </div>
          </div>
          <div className="p-2">
            <div className="p-6 rounded-lg" style={bgStyle} >
              <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                Modification
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                You Can Get Your Vehicle Modified According To Your Own Need.
              </p>
              <Link to='/modification' className="inline-block" href="#">
                <button
                  className="flex flex-row items-center rounded-xl bg-gray-100 px-4 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
                  type="button"
                >
                  Get Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>



        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={spares} alt="" srcset="" />

            </div>
          </div>
          <div className="p-2">
            <div className="p-6 rounded-lg" style={bgStyle} >
              <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                Spare Parts
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                You can get all the spares you needed for your vehicle.
              </p>
              <Link to='/spares' className="inline-block" href="#">
                <button
                  className="flex flex-row items-center rounded-xl bg-gray-100 px-4 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
                  type="button"
                >
                  Get Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>


        <div className="  relative flex w-full max-w-[24rem] lg:max-w-[33rem] flex-row rounded bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <div className="flex justify-center items-center h-full">
              <img src={accessories} alt="" srcset="" />

            </div>
          </div>
          <div className="p-2">
            <div className="p-6 rounded-lg" style={bgStyle} >
              <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                Accessories
              </h6>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                Find All The Accessories You Need Need For Car.
              </p>
              <Link to='/accessories' className="inline-block" href="#">
                <button
                  className="flex flex-row items-center rounded-xl bg-gray-100 px-4 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
                  type="button"
                >
                  Get Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* end card for larger size */}

      {/* ///////////////// */}

      {/*small size screen*/}
      <div className="sm:hidden grid grid-cols-2 gap-6 p-4 500:p-6 500:gap-16 font-semibold">
        {/* card1 */}

        <Link to="/servicing" className="rounded-lg  flex flex-col bg-cover" style={bgStyle}>
          <div className="flex justify-center">
            <div class="relative top-[10%] flex-shrink-0 w-20 h-20 mt-2  bg-red-600 border border-white text-red-500 rounded-full inline-flex items-center justify-center">
              <img className="w-14 h-14" src={servicing} alt="" srcset="" />
            </div>
          </div>

          <div className="bg-white rounded-b-lg text-center p-2">
            Servicing
          </div>
        </Link>
        {/* card2 */}
        <Link
          to="/modification"
          className="rounded-lg bg-cover flex flex-col"
          style={bgStyle}
        >
          <div className="flex justify-center">
            <div class="relative top-[10%] flex-shrink-0 w-20 h-20 mt-2  bg-red-600 border border-white text-red-500 rounded-full inline-flex items-center justify-center">
              <img className="w-14 h-14" src={modification} alt="" srcset="" />
            </div>
          </div>

          <div className="bg-white rounded-b-lg text-center p-2">
            Modification
          </div>
        </Link>
        {/* card3 */}
        <Link to="/spares" className="rounded-lg bg-cover flex flex-col" style={bgStyle}>
          <div className="flex justify-center">
            <div class="relative top-[10%] flex-shrink-0 w-20 h-20 mt-2  bg-red-600 border border-white text-red-500 rounded-full inline-flex items-center justify-center">
              <img className="w-14 h-14" src={spares} alt="" srcset="" />
            </div>
          </div>

          <div className="bg-white rounded-b-lg text-center p-2">
            Spare Parts
          </div>
        </Link>
        {/* card4 */}
        <Link to="/accessories" className="rounded-lg bg-cover flex flex-col" style={bgStyle}>
          <div className="flex justify-center">
            <div class="relative top-[10%] flex-shrink-0 w-20 h-20 mt-2  bg-red-600 border border-white text-red-500 rounded-full inline-flex items-center justify-center">
              <img className="w-14 h-14" src={accessories} alt="" srcset="" />
            </div>
          </div>

          <div className="bg-white rounded-b-lg text-center p-2">
            Accessories
          </div>
        </Link>
      </div>


    </div>
  );
};

export default OurServices;
