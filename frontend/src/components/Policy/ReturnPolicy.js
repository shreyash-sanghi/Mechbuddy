import React, { useState } from "react";
import Navbar from "..//Navbars/Navbar"
import BottomNavbar from "../Navbars/BottomNavbar.js"
import Footer from "../Footer/Footer.js";

const ReturnPolicy =()=>{
    
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const openLoginModal = () => {
        setLoginModalOpen(true);
      };
    return(
        <>
      <Navbar onLoginClick={openLoginModal} />
     <BottomNavbar />
  
  <div className="flex flex-col mt-10">
        <div class="p-8">

  <h1 class="text-4xl font-medium text-gray-200 text-center mt-6">
    Privale Policy
  </h1>
  <p class="text-center mt-5 lg:mt-10 mb-3 lg:mb-6 text-lg  text-gray-100">
    The time is now for it to be okay to be great. For being a bright color. For
    standing out.
  </p>
</div>
<div class="flex flex-col  md:flex-row md:w-[80%] items-center mx-auto">
  <div class="border-2 border-white md:max-w-[25vw] p-2 md:p-5 md:px-2 mx-3">
    <div
      class="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <h2 class="uppercase mt-6 text-indigo-500 font-medium mb-3">
      Social conversations
    </h2>
    <p class=" font-semibold  text-gray-200 text-lg mb-3">
      We get insulted by others, lose trust for those others. We get back
      stabbed by friends. It becomes harder for us to give others a hand.
    </p>
    <a class="text-indigo-500 flex items-center hover:text-indigo-600" href="/">
      More about us icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </div>

  <div class="border-2 border-white md:max-w-[25vw] p-2 md:py-5 md:px-2 md:mx-3">
    <div
      class="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <h2 class="uppercase mt-6 text-green-500 font-medium mb-3">
      Social conversations
    </h2>
    <p class=" font-semibold  text-gray-200 text-lg mb-3">
      We get insulted by others, lose trust for those others. We get back
      stabbed by friends. It becomes harder for us to give others a hand.
    </p>
    <a class="text-green-500 flex items-center hover:text-green-600" href="/">
      More about us icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </div>
  <div class="border-2 border-white md:max-w-[25vw] p-2 md:py-5 md:px-2 md:mx-3">
    <div
      class="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <h2 class="uppercase mt-6 text-red-500 font-medium mb-3">
      Social conversations
    </h2>
    <p class="font-semibold  text-gray-200 text-lg mb-3">
      We get insulted by others, lose trust for those others. We get back
      stabbed by friends. It becomes harder for us to give others a hand.
    </p>
    <a class="text-red-500 flex items-center hover:text-red-600" href="/">
      More about us icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </div>
</div>
</div>
<Footer/>
        </>
    )
}

export default  ReturnPolicy;