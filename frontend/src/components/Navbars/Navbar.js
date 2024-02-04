import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import noteContext from "../../context/noteContext";
import { ReactDialogBox } from "react-js-dialog-box";
import "react-js-dialog-box/dist/index.css";
import Locationtoggle from "./Locationtoggle";


import logo from "./assets/logo.png";

export default function Navbar() {
  const { fetchData, login, name } = useContext(noteContext);
  const { item, handlegetcart } = useContext(noteContext);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false)
  // const [showModal, setShowModal] = React.useState(false);

   
  const search_suggestion = [
    {
      service_name: "Servicing",
      link: "/servicing",
    },
    {
      service_name: "Modification",
      link: "/modification",
    },
    {
      service_name: "Spares",
      link: "/spares",
    },
    {
      service_name: "Accessories",
      link: "/accessories",
    },
    {
      service_name: "Contact",
      link: "/contact",
    },
    {
      service_name: "Testimonials",
      link: "/servicing",
    },
  ];



  const openBox = () => {
    setIsOpen(true);
  };

  const closeBox = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    handlegetcart();
    fetchData();
    
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handlelogout = () => {
    localStorage.removeItem("token");
  };

  /* const handleService = () => {
    const element = document.getElementById('service_section');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } */

  return (
    
    /* ===========This Navbar will only show on large screen size =========*/
    <div className="hidden sm:flex justify-center h-[11vh]">
      {/* Top most navbar which contains branding and cart and login option */}
         {/*change the background color to black*
                and also logo has been removed*/ }
                {/* color of mech and buddy has been changed*/ }
      <nav class=" h-[11vh] bg-[#000000] fixed w-full z-20 top-0 left-0 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center ">
            
            <span class="self-center text-2xl  whitespace-nowrap text-[#F31D32] font-bold">
              MECH <span class = "self-center text-2xl  whitespace-nowrap text-[#edeaeb] font-bold" > BUDDY </span>
            </span>
          </a>

          <div className="text-white flex items-center gap-12">
            <Link to="/cart" className="flex">
              <div className="mr-2 flex">
                <svg
                  class="w-6 h-6 text-[#F31D32] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
                  />
                </svg>
                <span class="relative right-0 top-[-4px] rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {item.length}
                </span>
              </div>
              <div className="text-[#f9fafc] font-medium text-xl">Cart</div>
            </Link>

            {/* ofjoj */}
            <button onClick={openBox} className="flex">
              <div className="mr-2">
                <svg
                  class="w-6 h-6 text-[#F31D32]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
              </div>
              <div className="text-[#f9fafc] font-medium text-xl">
                {localStorage.getItem("city")
                  ? localStorage.getItem("city")
                  : "Choose City"}
              </div>
            </button>
            {isOpen && (
              <>
                <ReactDialogBox
                  closeBox={closeBox}
                  modalWidth="60%"
                  headerBackgroundColor="red"
                  headerTextColor="white"
                  headerHeight="50"
                  closeButtonColor="white"
                  bodyBackgroundColor="white"
                  bodyTextColor="black"
                  bodyHeight="200px"
                >
                  <div>
                    <Locationtoggle handleclose={closeBox}></Locationtoggle>
                  </div>
                </ReactDialogBox>
              </>
            )}
            <div>
              {login ? (
                <>
                  <Link
                    to="/edit_profile"
                    class="text-white bg-[#F31D32] hover:bg-[#c34552] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                    type="button"
                  >
                    {name}{" "}
                    <svg
                      class="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </Link>
                </>
              ) : (
                <Link to = "/login"
                  class="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 sm:mr-0 bg-[#F31D32] hover:bg-[#F31D32] "
                  
                >
                  Login
                </Link>
              )}
            </div>
           {/*  <Link
              onClick={handlelogout}
              type="button"
              class="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 sm:mr-0 bg-[#F31D32] hover:bg-[#F31D32] "
            >
              Logout
            </Link> */}
          </div>

        </div>
      </nav>  

      {/* Top most 2nd navbar with options of search and menu */}
      {/*added sm:w-[80vw] */}
      <nav class=" fixed top-[8vh] h-[8vh] z-20 sm:w-[80vw] rounded-2xl md:w-[80vw] bg-[#000000] mix-blend-normal">
        <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div class="flex sm:order-2 sm : mr-4 sm:ml-4 mt-[-8px]">
            <div class="relative hidden sm:block">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-[#000515]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  value={value}
                  id="search-navbar"
                  class="block w-full p-2 pl-10 text-sm  border rounded-lg   bg-[#ffffff] border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search..."
                  onChange={handleChange}
                />
                <div className="absolute mt-10 bg-white w-full ">
                  {search_suggestion
                    .filter((item) => {
                      const searchterm = value.toLowerCase();
                      const service_name = item.service_name.toLowerCase();

                      return searchterm && service_name.startsWith(searchterm);
                    })
                    .map((item) => {
                      return (
                        <Link to={item.link}>
                          <div className="border-2 p-1 border-red-500 hover:bg-red-500 hover:border-white">
                            {item.service_name}
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div
            class="items-center justify-between w-full sm:w-auto"
            id="navbar-search"
          >
            <div class="relative mt-3 sm:hidden text-white w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 pl-10 pr-3 text-sm  border  rounded-lg  bg-[#ffffff] border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ok Search..."
              />
              <div className="absolute mt-10 bg-white w-full ">
                {search_suggestion
                  .filter((item) => {
                    const searchterm = value.toLowerCase();
                    const service_name = item.service_name.toLowerCase();

                    return searchterm && service_name.startsWith(searchterm);
                  })
                  .map((item) => {
                    return (
                      <Link to={item.link} key={item.service_name}>
                        <div className="border-2 p-1 border-red-500 hover:bg-red-500 hover:border-white">
                          {item.service_name}
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
            <ul class="flex flex-col p-4 sm:p-0 mt-1 font-medium border rounded-lg  sm:flex-row sm:space-x-8 sm:mt-[-8px] sm:border-0   border-gray-700">
              <li className="">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 ${isActive ? "sm:text-[#F31D32]" : "sm:text-white"
                    } bg-blue-700 rounded sm:bg-transparent  sm:p-0 `
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="border-r">
                <div
                  to="/"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded sm:bg-transparent  sm:p-0 sm:text-white"
                  aria-current="page"
                ></div>
              </li>
              <li className="  ">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 ${isActive ? "sm:text-[#F31D32]" : "sm:text-white"
                    } bg-blue-700 rounded sm:bg-transparent  sm:p-0 `
                  }
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li className="border-r">
                <div
                  to="/"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded sm:bg-transparent  sm:p-0 sm:text-white"
                  aria-current="page"
                ></div>
              </li>
              
              <li className="">
                <NavLink
                  to="/careers"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 ${isActive ? "sm:text-[#F31D32]" : "sm:text-white"
                    } bg-blue-700 rounded sm:bg-transparent  sm:p-0 `
                  }
                  aria-current="page"
                >
                  Careers
                </NavLink>
              </li>
              <li className="border-r">
                <div
                  to="/"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded sm:bg-transparent  sm:p-0 sm:text-white"
                  aria-current="page"
                ></div>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 ${isActive ? "sm:text-[#F31D32]" : "sm:text-white"
                    } bg-blue-700 rounded sm:bg-transparent  sm:p-0 `
                  }
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
              <li className="border-r">
                <div
                  to="/"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded sm:bg-transparent  sm:p-0 sm:text-white"
                  aria-current="page"
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* =========================== modal */}

      <div
        id="popup-modal"
        tabindex="-1"
        className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>

              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                id="user"
              >
                <g fill-rule="evenodd" transform="translate(0 -1004.362)">
                  <circle cx="24" cy="1028.362" r="24" fill="#239fdb"></circle>
                  <path
                    fill="#0b5ecd"
                    style={{
                      lineHeight: "normal",
                      textIndent: 0,
                      textAlign: "start",
                      textDecorationLine: "none",
                      textDecorationStyle: "solid",
                      textDecorationColor: "#000",
                      textTransform: "none",
                      blockProgression: "tb",
                      isolation: "auto",
                      mixBlendMode: "normal",
                    }}
                    d="M23.736 47.986 24 48a24 24 0 0 0 6.42-.875 24 24 0 0 0 6.547-2.93 24 24 0 0 0 8.096-8.69 24 24 0 0 0 1.865-4.413c.075-.274.196-.647.261-.924l-8.566-8.578c.049 0-.047.01 0-.004l8.572 8.588c.13-.452.223-.947.326-1.406.054-.312.102-.625.143-.938l-9.51-9.508a.5.5 0 0 0 0-.709l-1.06-1.06a.5.5 0 0 0-.707 0l-.23.23-.553-.553a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5v.51c-.145.05-.285.108-.422.174l-.362-.361a.5.5 0 0 0-.707 0l-1.06 1.06a.5.5 0 0 0-.086.112l-6.113-6.114-.008-.007a5.53 5.53 0 0 0-.381-.348l-.008-.006a5.506 5.506 0 0 0-.422-.314c-.103-.07-.212-.133-.32-.196-.044-.025-.086-.055-.131-.08a5.42 5.42 0 0 0-.473-.228l-.004-.002c-.162-.07-.33-.13-.5-.184-.1-.032-.206-.054-.31-.08a5.403 5.403 0 0 0-1.317-.168c-3.021 0-5.48 2.47-5.48 5.5 0 .19.01.376.03.56v.003c.018.183.045.366.081.544.013.063.032.122.047.184.028.115.053.23.088.342l.002.004c.053.17.115.339.184.502l.002.004c.069.163.144.322.228.476l.004.006c.084.155.176.304.274.45.024.036.052.069.078.105.076.107.153.215.236.316l.006.006c.111.135.228.265.351.389l.004.004 2.606 2.605H17.5c-4.148 0-7.5 3.368-7.5 7.53v4.515c0 .138.055.263.146.354zM37.5 20.627l-3.418-3.418Zm-5.63-1.697c-.025.042-.045.087-.067.13l-.002-.001c.022-.044.044-.087.068-.13z"
                    color="#000"
                    font-family="sans-serif"
                    font-weight="400"
                    transform="translate(0 1004.362)"
                  ></path>
                  <path
                    fill="#fff"
                    style={{
                      lineHeight: "normal",
                      textIndent: "0",
                      textAlign: "start",
                      textDecorationLine: "none",
                      textDecorationStyle: "solid",
                      textDecorationColor: "#000",
                      textTransform: "none",
                      isolation: "auto",
                      mixBlendMode: "normal",
                    }}
                    d="M11.502 2c-3.022 0-5.48 2.47-5.48 5.5S8.48 13 11.501 13c3.022 0 5.48-2.47 5.48-5.5S14.524 2 11.502 2Zm0 1c2.48 0 4.48 2.007 4.48 4.5 0 2.492-2 4.5-4.48 4.5a4.483 4.483 0 0 1-4.48-4.5c0-2.492 2-4.5 4.48-4.5Zm13.123 4.73a.5.5 0 0 0-.5.5v.512a3.96 3.96 0 0 0-.422.172l-.361-.36a.5.5 0 0 0-.707 0l-1.06 1.061a.5.5 0 0 0 0 .707l.36.362a3.852 3.852 0 0 0-.175.421h-.51a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h.512c.05.145.105.285.172.422l-.36.362a.5.5 0 0 0 0 .707l1.06 1.06a.5.5 0 0 0 .708 0l.361-.361c.138.067.278.124.422.174v.511a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-.511c.144-.05.284-.108.422-.174l.361.361a.5.5 0 0 0 .707 0l1.06-1.06a.5.5 0 0 0 0-.707l-.36-.362a3.86 3.86 0 0 0 .175-.422h.51a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5h-.512a3.856 3.856 0 0 0-.174-.421l.362-.362a.5.5 0 0 0 0-.707l-1.06-1.06a.5.5 0 0 0-.708 0l-.361.361a3.797 3.797 0 0 0-.422-.176v-.51a.5.5 0 0 0-.5-.5h-1.5zm.5 1h.5v.338a.5.5 0 0 0 .389.489c.315.072.617.195.89.367a.5.5 0 0 0 .62-.07l.238-.239.353.354-.238.236a.5.5 0 0 0-.07.62c.17.274.296.574.367.89a.5.5 0 0 0 .486.39H29v.5h-.338a.5.5 0 0 0-.488.39 2.879 2.879 0 0 1-.367.89.5.5 0 0 0 .07.619l.238.238-.353.354-.237-.239a.5.5 0 0 0-.619-.07 2.872 2.872 0 0 1-.89.365.5.5 0 0 0-.391.489v.34h-.5v-.338a.5.5 0 0 0-.389-.489 2.881 2.881 0 0 1-.89-.367.5.5 0 0 0-.62.068l-.238.239-.353-.354.238-.238a.5.5 0 0 0 .07-.617 2.876 2.876 0 0 1-.367-.89.5.5 0 0 0-.486-.391h-.34v-.5h.338a.5.5 0 0 0 .488-.39c.072-.314.196-.616.367-.89a.5.5 0 0 0-.07-.619l-.238-.238.353-.354.237.237a.5.5 0 0 0 .619.072c.274-.171.575-.296.89-.367a.5.5 0 0 0 .391-.487V8.73zm.25 1.979c-.903 0-1.646.743-1.646 1.646 0 .903.743 1.647 1.646 1.647.903 0 1.646-.744 1.646-1.647s-.743-1.646-1.646-1.646zm0 1a.647.647 0 1 1 0 1.294.647.647 0 0 1 0-1.294zM8.521 14c-4.147 0-7.5 3.368-7.5 7.53v4.515a.5.5 0 0 0 .5.5h3.854a.5.5 0 0 0 .293 0h8.453c.06-.181.148-.353.274-.506a1.57 1.57 0 0 1-.993-.494h-7.38v-4.022a.5.5 0 0 0-.508-.507.5.5 0 0 0-.493.507v4.022h-3v-4.016c0-3.626 2.892-6.529 6.5-6.529h6c1.505 0 2.881.51 3.979 1.361.25-.222.57-.361.93-.361h.174a7.447 7.447 0 0 0-5.083-2h-6zm10.909 3.002a.5.5 0 0 0-.5.5v.893c-.31.096-.609.219-.897.369l-.629-.63a.5.5 0 0 0-.707 0l-1.543 1.544a.5.5 0 0 0 0 .707l.63.629c-.151.287-.275.586-.372.896h-.89a.5.5 0 0 0-.5.5v2.182a.5.5 0 0 0 .5.5h.892c.096.31.217.61.367.898l-.627.63a.5.5 0 0 0 0 .706l1.543 1.543a.5.5 0 0 0 .707 0l.63-.63c.287.15.585.274.896.37v.893a.5.5 0 0 0 .5.5h2.181a.5.5 0 0 0 .5-.5v-.895c.31-.096.61-.217.899-.367l.629.63a.5.5 0 0 0 .707 0l1.543-1.544a.5.5 0 0 0 0-.707l-.631-.63c.15-.289.274-.587.37-.897h.893a.5.5 0 0 0 .5-.5V22.41a.5.5 0 0 0-.5-.5h-.894a5.38 5.38 0 0 0-.367-.896l.629-.63a.5.5 0 0 0 0-.706l-1.543-1.543a.5.5 0 0 0-.707 0l-.631.63a5.38 5.38 0 0 0-.897-.372v-.891a.5.5 0 0 0-.5-.5H19.43zm.5 1h1.181v.719a.5.5 0 0 0 .389.486c.483.11.945.301 1.365.564a.5.5 0 0 0 .62-.068l.507-.508.836.836-.506.504a.5.5 0 0 0-.07.62c.262.42.452.88.56 1.365a.5.5 0 0 0 .489.39h.72v1.182h-.718a.5.5 0 0 0-.489.388c-.11.484-.3.946-.564 1.366a.5.5 0 0 0 .07.619l.508.508-.836.836-.506-.506a.5.5 0 0 0-.617-.07c-.42.262-.883.451-1.367.56a.5.5 0 0 0-.39.488v.721H19.93v-.719a.5.5 0 0 0-.389-.488 4.413 4.413 0 0 1-1.365-.565.5.5 0 0 0-.62.07l-.505.509-.836-.836.504-.506a.5.5 0 0 0 .072-.617 4.413 4.413 0 0 1-.56-1.368.5.5 0 0 0-.489-.39h-.72V22.91h.718a.5.5 0 0 0 .487-.389c.11-.483.3-.945.564-1.365a.5.5 0 0 0-.068-.619l-.508-.506.836-.836.504.504a.5.5 0 0 0 .619.072c.42-.262.881-.451 1.365-.56a.5.5 0 0 0 .39-.488v-.721zm.591 3a2.51 2.51 0 0 0-2.5 2.498 2.513 2.513 0 0 0 2.5 2.502A2.51 2.51 0 0 0 23.02 23.5a2.508 2.508 0 0 0-2.499-2.498zm0 1a1.5 1.5 0 0 1 0 3c-.825 0-1.5-.676-1.5-1.502s.674-1.498 1.5-1.498z"
                    color="#000"
                    font-family="sans-serif"
                    font-weight="400"
                    overflow="visible"
                    transform="translate(8.979 1012.361)"
                  ></path>
                </g>
              </svg>

              <h3 className="mb-5 text-4xl  font-normal text-[#050F2CE0] dark:text-gray-400">
                I am a
              </h3>
              <Link
                to="/login"
                data-modal-hide="popup-modal"
                type="button"
                className="text-white  shadow-lg bg-[#FFFFFF] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex flex-col items-center px-5 py-2.5 text-center mr-2"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="139"
                    height="104"
                    viewBox="0 0 139 104"
                    fill="none"
                  >
                    <path
                      d="M138.438 90.6484H0V90.7177H138.438V90.6484Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M124.565 95.1016H115.395V95.1708H124.565V95.1016Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M91.7068 95.8555H89.3008V95.9247H91.7068V95.8555Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M115.118 92.5352H109.805V92.6044H115.118V92.5352Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M26.4817 93H14.5234V93.0692H26.4817V93Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M30.7018 93H28.9492V93.0692H30.7018V93Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M62.34 94.168H36.4023V94.2372H62.34V94.168Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M65.6181 78.3003H12.1563C11.7375 78.2996 11.3361 78.1327 11.0402 77.8363C10.7443 77.5399 10.5781 77.1382 10.5781 76.7193V1.56711C10.5818 1.1507 10.7496 0.752541 11.0451 0.45912C11.3406 0.165698 11.7399 0.000713338 12.1563 0H65.6181C66.0374 0 66.4396 0.166565 66.736 0.463052C67.0325 0.759539 67.1991 1.16166 67.1991 1.58096V76.7193C67.1991 77.1386 67.0325 77.5408 66.736 77.8373C66.4396 78.1337 66.0374 78.3003 65.6181 78.3003ZM12.1563 0.0553753C11.7559 0.0561087 11.3721 0.215704 11.0891 0.49913C10.8062 0.782557 10.6473 1.16665 10.6473 1.56711V76.7193C10.6473 77.1198 10.8062 77.5039 11.0891 77.7873C11.3721 78.0708 11.7559 78.2303 12.1563 78.2311H65.6181C66.0188 78.2304 66.4029 78.0708 66.6863 77.7875C66.9696 77.5042 67.1291 77.1201 67.1299 76.7193V1.56711C67.1291 1.1664 66.9696 0.782309 66.6863 0.498961C66.4029 0.215614 66.0188 0.0561071 65.6181 0.0553753H12.1563Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M125.51 78.3003H72.0458C71.6267 78.2996 71.225 78.1328 70.9287 77.8364C70.6324 77.5401 70.4656 77.1384 70.4648 76.7193V1.56711C70.4692 1.15045 70.6376 0.752291 70.9336 0.458946C71.2295 0.165601 71.6291 0.000705558 72.0458 0H125.51C125.926 0.001441 126.325 0.166748 126.62 0.460091C126.915 0.753435 127.082 1.15118 127.086 1.56711V76.7193C127.086 77.1377 126.92 77.539 126.625 77.8353C126.329 78.1316 125.929 78.2988 125.51 78.3003ZM72.0458 0.0553753C71.6451 0.0561071 71.261 0.215614 70.9776 0.498961C70.6943 0.782309 70.5348 1.1664 70.5341 1.56711V76.7193C70.5348 77.1201 70.6943 77.5042 70.9776 77.7875C71.261 78.0708 71.6451 78.2304 72.0458 78.2311H125.51C125.911 78.2304 126.295 78.0708 126.579 77.7875C126.862 77.5042 127.021 77.1201 127.022 76.7193V1.56711C127.021 1.1664 126.862 0.782309 126.579 0.498961C126.295 0.215614 125.911 0.0561071 125.51 0.0553753H72.0458Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M107.983 72.5421V63.4384H92.7215V43.4896H90.0441V54.9218H82.7485V51.7598H69.6107V40.8122H67.177V27.4336H65.2306V40.5686H60.6095V60.0301H51.852V40.5686H36.0396V60.0301H28.2539V86.3056H111.696V74.7571L107.983 72.5421Z"
                      fill="#E0E0E0"
                    />
                    <path
                      d="M69.4266 70.0511L63.8863 58.6992H29.2825L23.7422 70.0511H27.9645V86.3867H65.0658V70.0511H69.4266Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M87.3282 71.5391H61.7422V86.3851H87.3282V71.5391Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M86.8731 72.543H65.8555V75.1954H86.8731V72.543Z"
                      fill="#E6E6E6"
                    />
                    <path
                      d="M86.8731 76.4414H65.8555V79.0939H86.8731V76.4414Z"
                      fill="#E6E6E6"
                    />
                    <path
                      d="M86.8731 80.3398H65.8555V82.9923H86.8731V80.3398Z"
                      fill="#E6E6E6"
                    />
                    <path
                      d="M86.8731 84.2422H65.8555V86.3824H86.8731V84.2422Z"
                      fill="#E6E6E6"
                    />
                    <path
                      d="M58.976 70.0511H26.8584L23.1926 58.6992L17.6523 70.0511H21.8747V86.3867H35.7184L58.976 72.3575V70.0511Z"
                      fill="#E6E6E6"
                    />
                    <path
                      d="M117.157 21.668H115.285V86.382H117.157V21.668Z"
                      fill="#E6E6E6"
                    />
                    <path
                      d="M123.29 27.5158C123.923 23.6155 121.274 19.9405 117.374 19.3074C113.474 18.6743 109.799 21.3229 109.166 25.2231C108.533 29.1234 111.181 32.7984 115.082 33.4315C118.982 34.0646 122.657 31.416 123.29 27.5158Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M113.809 28.336L114.141 27.6355C114.724 28.1109 115.454 28.3675 116.206 28.3609C117.292 28.3609 117.757 27.9401 117.757 27.3946C117.757 25.8663 113.961 26.8409 113.961 24.5041C113.961 23.5378 114.714 22.7155 116.359 22.7155C117.07 22.7026 117.77 22.8948 118.374 23.2692L118.078 23.9863C117.564 23.6578 116.968 23.4812 116.359 23.4769C115.295 23.4769 114.839 23.9226 114.839 24.4681C114.839 25.9992 118.632 25.0412 118.632 27.342C118.632 28.3 117.862 29.1223 116.206 29.1223C115.251 29.1223 114.31 28.7956 113.809 28.336Z"
                      fill="white"
                    />
                    <path
                      d="M122.393 27.3652C122.945 23.9616 120.634 20.7545 117.23 20.202C113.826 19.6495 110.619 21.9608 110.067 25.3645C109.514 28.7681 111.826 31.9752 115.229 32.5277C118.633 33.0802 121.84 30.7689 122.393 27.3652Z"
                      stroke="white"
                      stroke-width="0.0710687"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M69.2185 103.151C98.867 103.151 122.902 101.748 122.902 100.017C122.902 98.286 98.867 96.8828 69.2185 96.8828C39.57 96.8828 15.5352 98.286 15.5352 100.017C15.5352 101.748 39.57 103.151 69.2185 103.151Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M122.657 86.7452V90.5384H15.7829V86.7452C15.7747 86.5937 15.7971 86.4421 15.8488 86.2994C15.9005 86.1567 15.9804 86.0259 16.0838 85.9147C16.1872 85.8036 16.3119 85.7145 16.4504 85.6526C16.589 85.5907 16.7387 85.5574 16.8904 85.5547H121.549C121.701 85.5574 121.851 85.5907 121.989 85.6526C122.128 85.7145 122.252 85.8036 122.356 85.9147C122.459 86.0259 122.539 86.1567 122.591 86.2994C122.643 86.4421 122.665 86.5937 122.657 86.7452Z"
                      fill="#2E353A"
                    />
                    <path
                      d="M28.52 85.5547H21.875V90.5384H28.52V85.5547Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M40.9775 85.5547H34.6094V90.5384H40.9775V85.5547Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M53.7153 85.5547H47.0703V90.5384H53.7153V85.5547Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M66.1728 85.5547H59.8047V90.5384H66.1728V85.5547Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M78.6338 85.5547H72.2656V90.5384H78.6338V85.5547Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M91.3677 85.5547H84.7227V90.5384H91.3677V85.5547Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M103.829 85.5547H97.4609V90.5384H103.829V85.5547Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M116.567 85.5547H109.922V90.5384H116.567V85.5547Z"
                      fill="#F31D32"
                    />
                    <g opacity="0.6">
                      <path
                        d="M28.52 85.5547H21.875V90.5384H28.52V85.5547Z"
                        fill="white"
                      />
                      <path
                        d="M40.9814 85.5547H34.6133V90.5384H40.9814V85.5547Z"
                        fill="white"
                      />
                      <path
                        d="M53.7153 85.5547H47.0703V90.5384H53.7153V85.5547Z"
                        fill="white"
                      />
                      <path
                        d="M66.1767 85.5547H59.8086V90.5384H66.1767V85.5547Z"
                        fill="white"
                      />
                      <path
                        d="M78.6338 85.5547H72.2656V90.5384H78.6338V85.5547Z"
                        fill="white"
                      />
                      <path
                        d="M91.3716 85.5547H84.7266V90.5384H91.3716V85.5547Z"
                        fill="white"
                      />
                      <path
                        d="M103.829 85.5547H97.4609V90.5384H103.829V85.5547Z"
                        fill="white"
                      />
                      <path
                        d="M116.567 85.5547H109.922V90.5384H116.567V85.5547Z"
                        fill="white"
                      />
                    </g>
                    <path
                      opacity="0.1"
                      d="M122.657 86.7452V90.5384H15.7829V86.7452C15.7747 86.5937 15.7971 86.4421 15.8488 86.2994C15.9005 86.1567 15.9804 86.0259 16.0838 85.9147C16.1872 85.8036 16.3119 85.7145 16.4504 85.6526C16.589 85.5907 16.7387 85.5574 16.8904 85.5547H121.549C121.701 85.5574 121.851 85.5907 121.989 85.6526C122.128 85.7145 122.252 85.8036 122.356 85.9147C122.459 86.0259 122.539 86.1567 122.591 86.2994C122.643 86.4421 122.665 86.5937 122.657 86.7452Z"
                      fill="white"
                    />
                    <path
                      d="M44.8519 11.8052V51.9521C44.8412 52.1342 44.7601 52.305 44.6258 52.4285C44.4915 52.552 44.3144 52.6184 44.132 52.6138H20.1186C19.7753 52.6138 19.6562 52.3508 19.6562 52.0074V11.7498C19.6562 11.4535 19.7365 11.0742 20.0328 11.0742H26.0244C26.1131 11.0881 26.1962 11.1262 26.2646 11.1844C26.333 11.2425 26.384 11.3184 26.412 11.4037L26.6584 11.9575C26.6925 12.0293 26.7482 12.0888 26.8177 12.1275C26.8872 12.1662 26.967 12.1822 27.046 12.1734H37.2655C37.4372 12.1734 37.5895 12.1485 37.6531 11.9907L37.9023 11.3566C37.9331 11.2784 37.9857 11.2106 38.054 11.1615C38.1222 11.1124 38.2032 11.084 38.2872 11.0798H44.2151C44.3887 11.1085 44.547 11.1964 44.6631 11.3287C44.7792 11.4609 44.8459 11.6293 44.8519 11.8052Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.2"
                      d="M44.8519 11.8052V51.9521C44.8412 52.1342 44.7601 52.305 44.6258 52.4285C44.4915 52.552 44.3144 52.6184 44.132 52.6138H20.1186C19.7753 52.6138 19.6562 52.3508 19.6562 52.0074V11.7498C19.6562 11.4535 19.7365 11.0742 20.0328 11.0742H26.0244C26.1131 11.0881 26.1962 11.1262 26.2646 11.1844C26.333 11.2425 26.384 11.3184 26.412 11.4037L26.6584 11.9575C26.6925 12.0293 26.7482 12.0888 26.8177 12.1275C26.8872 12.1662 26.967 12.1822 27.046 12.1734H37.2655C37.4372 12.1734 37.5895 12.1485 37.6531 11.9907L37.9023 11.3566C37.9331 11.2784 37.9857 11.2106 38.054 11.1615C38.1222 11.1124 38.2032 11.084 38.2872 11.0798H44.2151C44.3887 11.1085 44.547 11.1964 44.6631 11.3287C44.7792 11.4609 44.8459 11.6293 44.8519 11.8052Z"
                      fill="white"
                    />
                    <path
                      opacity="0.4"
                      d="M43.8864 15.5H20.6289V44.295H43.8864V15.5Z"
                      fill="white"
                    />
                    <path
                      d="M39.3147 19.0509C39.1717 18.9072 39.0017 18.7933 38.8145 18.7155C38.6273 18.6377 38.4265 18.5977 38.2238 18.5977C38.0211 18.5977 37.8204 18.6377 37.6332 18.7155C37.446 18.7933 37.276 18.9072 37.1329 19.0509C36.9893 19.1939 36.8753 19.3639 36.7975 19.5511C36.7197 19.7383 36.6797 19.9391 36.6797 20.1418C36.6797 20.3445 36.7197 20.5452 36.7975 20.7324C36.8753 20.9196 36.9893 21.0896 37.1329 21.2327L38.2238 22.3236L39.3147 21.2327C39.6035 20.9431 39.7657 20.5508 39.7657 20.1418C39.7657 19.7328 39.6035 19.3405 39.3147 19.0509ZM38.761 20.6678C38.6209 20.8073 38.4312 20.8856 38.2335 20.8856C38.0358 20.8856 37.8462 20.8073 37.7061 20.6678C37.5667 20.5282 37.4885 20.339 37.4885 20.1418C37.4885 19.9445 37.5667 19.7554 37.7061 19.6157C37.8462 19.4762 38.0358 19.3979 38.2335 19.3979C38.4312 19.3979 38.6209 19.4762 38.761 19.6157C38.9003 19.7554 38.9785 19.9445 38.9785 20.1418C38.9785 20.339 38.9003 20.5282 38.761 20.6678Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M24.8944 38.5486C24.6048 38.2598 24.2125 38.0977 23.8036 38.0977C23.3946 38.0977 23.0023 38.2598 22.7127 38.5486C22.4239 38.8382 22.2617 39.2305 22.2617 39.6395C22.2617 40.0485 22.4239 40.4408 22.7127 40.7304L23.8091 41.8213L24.9 40.7304C25.0433 40.587 25.1568 40.4167 25.2341 40.2293C25.3114 40.0419 25.351 39.8411 25.3505 39.6383C25.3499 39.4356 25.3094 39.235 25.2311 39.048C25.1529 38.861 25.0385 38.6913 24.8944 38.5486ZM24.3407 40.1656C24.2719 40.2352 24.19 40.2905 24.0997 40.3282C24.0094 40.366 23.9125 40.3854 23.8146 40.3854C23.7168 40.3854 23.6199 40.366 23.5295 40.3282C23.4392 40.2905 23.3573 40.2352 23.2886 40.1656C23.1492 40.0259 23.071 39.8367 23.071 39.6395C23.071 39.4422 23.1492 39.2531 23.2886 39.1134C23.4282 38.9741 23.6174 38.8959 23.8146 38.8959C24.0119 38.8959 24.2011 38.9741 24.3407 39.1134C24.4785 39.2545 24.5548 39.4445 24.5527 39.6418C24.5507 39.839 24.4704 40.0274 24.3296 40.1656H24.3407Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M40.5445 15.5039H39.1297L40.6138 22.6639L33.5977 24.4082L31.7538 15.5039H30.3361L32.2521 24.7432L24.8236 26.5789L22.5283 15.5039H21.1217L23.5029 26.9222L20.6289 27.6421V29.0708L23.8102 28.2762L25.2472 35.2756L20.64 36.4274V37.856L25.5296 36.6323L27.0829 44.2989H28.4977L26.8364 36.3028L28.8078 35.8127C28.8735 35.7949 28.9422 35.7911 29.0095 35.8016C29.0768 35.8121 29.1411 35.8366 29.1982 35.8736C29.2557 35.9091 29.3055 35.9558 29.3445 36.011C29.3836 36.0662 29.411 36.1287 29.4252 36.1948L31.1972 44.2989H32.6121L30.7791 35.9013C30.7251 35.6539 30.6221 35.4199 30.4761 35.213C30.33 35.0061 30.144 34.8307 29.929 34.6969C29.7139 34.5632 29.4743 34.474 29.2242 34.4345C28.974 34.395 28.7185 34.4061 28.4728 34.4671L26.554 34.9461L25.1032 27.9439L32.5318 26.0999L33.1824 29.2397C33.2675 29.6549 33.4822 30.0323 33.7958 30.3175C34.1093 30.6027 34.5054 30.7808 34.9267 30.8262L42.4771 31.6568L43.8837 38.4402V30.4109L35.079 29.4363C34.9486 29.4215 34.8261 29.3659 34.7292 29.2774C34.6322 29.1889 34.5657 29.072 34.5391 28.9434L33.8746 25.7483L43.8837 23.2564V21.8277L41.9455 22.3067L40.5445 15.5039Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M37.3901 49.8821H27.1319C26.6602 49.8821 26.2078 49.6949 25.874 49.3616C25.5402 49.0283 25.3523 48.5762 25.3516 48.1045C25.3516 47.6324 25.5391 47.1795 25.873 46.8457C26.2069 46.5118 26.6597 46.3242 27.1319 46.3242H37.3956C37.8673 46.325 38.3194 46.5128 38.6527 46.8466C38.986 47.1804 39.1732 47.6328 39.1732 48.1045C39.1728 48.3383 39.1264 48.5698 39.0366 48.7856C38.9468 49.0015 38.8153 49.1975 38.6498 49.3626C38.4842 49.5276 38.2877 49.6585 38.0716 49.7476C37.8555 49.8367 37.6239 49.8824 37.3901 49.8821Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M27.4616 48.1976C27.4544 48.0052 27.5049 47.8151 27.6065 47.6516C27.7081 47.4881 27.8562 47.3587 28.0319 47.2799C28.2075 47.2011 28.4027 47.1766 28.5924 47.2095C28.782 47.2424 28.9576 47.3312 29.0964 47.4645C29.2353 47.5978 29.3312 47.7696 29.3718 47.9578C29.4124 48.1459 29.3959 48.342 29.3243 48.5207C29.2528 48.6994 29.1295 48.8527 28.9703 48.9609C28.8111 49.069 28.6232 49.1272 28.4307 49.1279C28.3051 49.1339 28.1796 49.1143 28.0619 49.0702C27.9441 49.026 27.8366 48.9584 27.7459 48.8713C27.6552 48.7842 27.5832 48.6796 27.5343 48.5638C27.4855 48.4479 27.4607 48.3233 27.4616 48.1976ZM29.1229 48.1976C29.124 48.0576 29.0834 47.9205 29.0064 47.8036C28.9293 47.6867 28.8193 47.5953 28.6902 47.5411C28.5612 47.4869 28.4189 47.4723 28.2815 47.4991C28.1441 47.526 28.0178 47.593 27.9186 47.6918C27.8194 47.7906 27.7518 47.9167 27.7245 48.054C27.6971 48.1913 27.7111 48.3336 27.7648 48.4629C27.8185 48.5922 27.9094 48.7026 28.026 48.7801C28.1426 48.8576 28.2796 48.8986 28.4196 48.8981C28.5135 48.9027 28.6072 48.8879 28.6951 48.8545C28.7829 48.8211 28.8629 48.7699 28.93 48.7041C28.9971 48.6383 29.0499 48.5594 29.0849 48.4722C29.12 48.385 29.1367 48.2915 29.1339 48.1976H29.1229Z"
                      fill="white"
                    />
                    <path
                      d="M31.0085 49.1081L30.6181 48.5544H30.5045H30.0532V49.1081H29.793V47.2891H30.5045C30.9752 47.2891 31.2632 47.5272 31.2632 47.9231C31.2685 48.0495 31.232 48.1741 31.1595 48.2776C31.0869 48.3812 30.9823 48.458 30.8617 48.4962L31.2936 49.1081H31.0085ZM31.0085 47.9231C31.0085 47.6628 30.834 47.5133 30.5018 47.5133H30.0588V48.344H30.5018C30.8257 48.3329 31.0085 48.1751 31.0085 47.9231Z"
                      fill="white"
                    />
                    <path
                      d="M31.6797 47.2904H32.4466C32.5703 47.2836 32.6941 47.3021 32.8103 47.3447C32.9266 47.3873 33.033 47.4532 33.123 47.5384C33.2129 47.6235 33.2846 47.7261 33.3335 47.8398C33.3825 47.9536 33.4078 48.0761 33.4078 48.2C33.4078 48.3238 33.3825 48.4464 33.3335 48.5601C33.2846 48.6739 33.2129 48.7765 33.123 48.8616C33.033 48.9467 32.9266 49.0126 32.8103 49.0553C32.6941 49.0979 32.5703 49.1163 32.4466 49.1095H31.6797V47.2904ZM32.43 48.8825C32.525 48.891 32.6207 48.8797 32.7111 48.8492C32.8014 48.8188 32.8845 48.7698 32.9549 48.7054C33.0253 48.6411 33.0815 48.5628 33.1199 48.4755C33.1584 48.3883 33.1783 48.294 33.1783 48.1986C33.1783 48.1032 33.1584 48.0089 33.1199 47.9216C33.0815 47.8344 33.0253 47.7561 32.9549 47.6918C32.8845 47.6274 32.8014 47.5784 32.7111 47.548C32.6207 47.5175 32.525 47.5062 32.43 47.5147H31.94V48.8825H32.43Z"
                      fill="white"
                    />
                    <path
                      d="M35.1421 48.8811V49.1081H33.8242V47.2891H35.1062V47.5133H34.0817V48.0671H34.9954V48.2886H34.0817V48.8756L35.1421 48.8811Z"
                      fill="white"
                    />
                    <path
                      d="M36.778 49.1081L36.3848 48.5544H36.2713H35.8228V49.1081H35.5625V47.2891H36.2685C36.742 47.2891 37.0272 47.5272 37.0272 47.9231C37.0331 48.0492 36.9973 48.1738 36.9252 48.2774C36.8531 48.381 36.7488 48.458 36.6285 48.4962L37.0576 49.1081H36.778ZM36.778 47.9231C36.778 47.6628 36.6035 47.5133 36.2713 47.5133H35.8311V48.344H36.2685C36.5952 48.3329 36.7697 48.1751 36.7697 47.9231H36.778Z"
                      fill="white"
                    />
                    <path
                      opacity="0.2"
                      d="M44.8525 28.4219V51.876C44.8517 52.0696 44.7745 52.2551 44.6376 52.392C44.5006 52.5289 44.3152 52.6062 44.1215 52.6069H39.7773V30.2216C39.7773 29.7443 39.967 29.2865 40.3045 28.949C40.642 28.6115 41.0997 28.4219 41.577 28.4219H44.8525Z"
                      fill="black"
                    />
                    <path
                      d="M67.0042 33.6768V73.8237C66.9928 74.006 66.9112 74.1769 66.7764 74.3003C66.6416 74.4237 66.4643 74.49 66.2816 74.4854H42.2682C41.9249 74.4854 41.8086 74.2224 41.8086 73.879V33.6214C41.8086 33.3251 41.8834 32.9458 42.1824 32.9458H48.1767C48.2654 32.9597 48.3485 32.9978 48.4169 33.0559C48.4853 33.1141 48.5364 33.19 48.5643 33.2753L48.8108 33.829C48.8449 33.9009 48.9005 33.9603 48.97 33.9991C49.0395 34.0378 49.1193 34.0538 49.1984 34.045H59.4179C59.5868 34.045 59.7418 34.0201 59.8055 33.8623L60.0547 33.2282C60.0833 33.1474 60.135 33.0767 60.2034 33.025C60.2718 32.9733 60.3539 32.9429 60.4395 32.9375H66.3563C66.5338 32.9653 66.6959 33.0546 66.8143 33.1897C66.9327 33.3248 66.9999 33.4972 67.0042 33.6768Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.2"
                      d="M67.0042 33.6768V73.8237C66.9928 74.006 66.9112 74.1769 66.7764 74.3003C66.6416 74.4237 66.4643 74.49 66.2816 74.4854H42.2682C41.9249 74.4854 41.8086 74.2224 41.8086 73.879V33.6214C41.8086 33.3251 41.8834 32.9458 42.1824 32.9458H48.1767C48.2654 32.9597 48.3485 32.9978 48.4169 33.0559C48.4853 33.1141 48.5364 33.19 48.5643 33.2753L48.8108 33.829C48.8449 33.9009 48.9005 33.9603 48.97 33.9991C49.0395 34.0378 49.1193 34.0538 49.1984 34.045H59.4179C59.5868 34.045 59.7418 34.0201 59.8055 33.8623L60.0547 33.2282C60.0833 33.1474 60.135 33.0767 60.2034 33.025C60.2718 32.9733 60.3539 32.9429 60.4395 32.9375H66.3563C66.5338 32.9653 66.6959 33.0546 66.8143 33.1897C66.9327 33.3248 66.9999 33.4972 67.0042 33.6768Z"
                      fill="white"
                    />
                    <path
                      d="M66.0329 37.3477H42.5898V44.5049H66.0329V37.3477Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.4"
                      d="M66.0329 45.0586H42.5898V72.3529H66.0329V45.0586Z"
                      fill="white"
                    />
                    <g opacity="0.4">
                      <path
                        d="M45.0131 39.1546V39.5948H45.6361V39.7471H45.0131V40.251H44.8359V39.0078H45.7109V39.1629L45.0131 39.1546Z"
                        fill="white"
                      />
                      <path
                        d="M46.7955 40.2427L46.5186 39.8717H46.1337V40.251H45.9648V39.0078H46.4494C46.7706 39.0078 46.9671 39.1712 46.9671 39.4397C46.9715 39.5268 46.9466 39.6128 46.8964 39.684C46.8462 39.7553 46.7737 39.8077 46.6903 39.8329L46.9837 40.251L46.7955 40.2427ZM46.7955 39.4314C46.7955 39.2542 46.6764 39.1546 46.4494 39.1546H46.1476V39.7083H46.4494C46.6709 39.7138 46.7955 39.6086 46.7955 39.4314Z"
                        fill="white"
                      />
                      <path
                        d="M47.1489 39.6163C47.1439 39.4845 47.1785 39.3542 47.2481 39.2422C47.3177 39.1301 47.4193 39.0414 47.5397 38.9875C47.6601 38.9336 47.7938 38.9169 47.9238 38.9395C48.0537 38.9622 48.174 39.0231 48.269 39.1146C48.3641 39.2061 48.4296 39.3239 48.4572 39.4529C48.4849 39.5819 48.4733 39.7162 48.424 39.8386C48.3748 39.9609 48.29 40.0658 48.1807 40.1397C48.0714 40.2135 47.9426 40.2531 47.8106 40.2531C47.7247 40.2573 47.6389 40.2439 47.5584 40.2137C47.4779 40.1834 47.4044 40.1371 47.3424 40.0775C47.2805 40.0178 47.2313 39.9462 47.1981 39.8669C47.1648 39.7876 47.1481 39.7023 47.1489 39.6163ZM48.2924 39.6163C48.2935 39.5202 48.2659 39.4258 48.2133 39.3454C48.1606 39.2649 48.0851 39.2019 47.9965 39.1645C47.9079 39.1271 47.8102 39.1168 47.7158 39.1351C47.6213 39.1534 47.5345 39.1994 47.4663 39.2672C47.3981 39.335 47.3516 39.4216 47.3328 39.5159C47.3139 39.6102 47.3236 39.708 47.3605 39.7968C47.3974 39.8857 47.46 39.9615 47.5401 40.0146C47.6203 40.0678 47.7145 40.0959 47.8106 40.0953C47.8743 40.0976 47.9377 40.0868 47.997 40.0636C48.0564 40.0404 48.1103 40.0053 48.1554 39.9603C48.2006 39.9154 48.2361 39.8617 48.2596 39.8026C48.2832 39.7434 48.2943 39.68 48.2924 39.6163Z"
                        fill="white"
                      />
                      <path
                        d="M49.8933 40.2393V39.3339L49.4448 40.087H49.3617L48.9132 39.3394V40.2393H48.7305V38.9961H48.8772L49.395 39.8682L49.9072 38.9961H50.0512V40.2393H49.8933Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M61.2305 61.4956C61.2305 62.448 58.1322 63.2205 54.3086 63.2205C50.485 63.2205 47.3867 62.448 47.3867 61.4956C47.3867 60.5431 50.485 59.7734 54.3086 59.7734C58.1322 59.7734 61.2305 60.5431 61.2305 61.4956Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.2"
                      d="M61.2305 61.4956C61.2305 62.448 58.1322 63.2205 54.3086 63.2205C50.485 63.2205 47.3867 62.448 47.3867 61.4956C47.3867 60.5431 50.485 59.7734 54.3086 59.7734C58.1322 59.7734 61.2305 60.5431 61.2305 61.4956Z"
                      fill="black"
                    />
                    <path
                      d="M58.0252 49.4663C57.039 48.4823 55.7027 47.9297 54.3095 47.9297C52.9164 47.9297 51.5801 48.4823 50.5939 49.4663C49.6107 50.4524 49.0586 51.7881 49.0586 53.1806C49.0586 54.5731 49.6107 55.9088 50.5939 56.8949L54.3095 60.6106L58.0252 56.8949C59.0084 55.9088 59.5605 54.5731 59.5605 53.1806C59.5605 51.7881 59.0084 50.4524 58.0252 49.4663ZM56.1037 54.9734C55.8679 55.2108 55.5876 55.3992 55.2787 55.5278C54.9698 55.6564 54.6386 55.7226 54.304 55.7226C53.9694 55.7226 53.6382 55.6564 53.3293 55.5278C53.0204 55.3992 52.74 55.2108 52.5043 54.9734C52.2666 54.7378 52.0778 54.4575 51.949 54.1486C51.8203 53.8397 51.7539 53.5084 51.7539 53.1737C51.7539 52.839 51.8203 52.5077 51.949 52.1988C52.0778 51.8899 52.2666 51.6095 52.5043 51.374C52.74 51.1366 53.0204 50.9482 53.3293 50.8196C53.6382 50.691 53.9694 50.6248 54.304 50.6248C54.6386 50.6248 54.9698 50.691 55.2787 50.8196C55.5876 50.9482 55.8679 51.1366 56.1037 51.374C56.3414 51.6095 56.5301 51.8899 56.6589 52.1988C56.7877 52.5077 56.854 52.839 56.854 53.1737C56.854 53.5084 56.7877 53.8397 56.6589 54.1486C56.5301 54.4575 56.3414 54.7378 56.1037 54.9734Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M57.2257 69.559H51.3947C51.1612 69.5593 50.9299 69.5136 50.7141 69.4244C50.4982 69.3352 50.3021 69.2043 50.137 69.0392C49.9719 68.874 49.841 68.6779 49.7518 68.4621C49.6626 68.2463 49.6168 68.015 49.6172 67.7814C49.6168 67.5479 49.6626 67.3166 49.7518 67.1008C49.841 66.885 49.9719 66.6888 50.137 66.5237C50.3021 66.3586 50.4982 66.2277 50.7141 66.1385C50.9299 66.0493 51.1612 66.0035 51.3947 66.0039H57.2257C57.4592 66.0035 57.6906 66.0493 57.9064 66.1385C58.1222 66.2277 58.3183 66.3586 58.4834 66.5237C58.6486 66.6888 58.7795 66.885 58.8687 67.1008C58.9579 67.3166 59.0036 67.5479 59.0033 67.7814C59.0036 68.015 58.9579 68.2463 58.8687 68.4621C58.7795 68.6779 58.6486 68.874 58.4834 69.0392C58.3183 69.2043 58.1222 69.3352 57.9064 69.4244C57.6906 69.5136 57.4592 69.5593 57.2257 69.559Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M51.9766 68.5781L52.0735 68.376C52.242 68.514 52.4537 68.5885 52.6715 68.5864C52.9872 68.5864 53.1228 68.4646 53.1228 68.3096C53.1228 67.8666 52.0153 68.1462 52.0153 67.4789C52.0153 67.2021 52.2341 66.9612 52.7103 66.9612C52.9174 66.9568 53.1212 67.0126 53.2973 67.1218L53.2114 67.3294C53.0619 67.2331 52.8881 67.1813 52.7103 67.1799C52.403 67.1799 52.27 67.31 52.27 67.4706C52.27 67.9136 53.3776 67.6367 53.3776 68.3012C53.3776 68.5781 53.1533 68.819 52.6715 68.819C52.4187 68.8232 52.1725 68.7379 51.9766 68.5781Z"
                      fill="white"
                    />
                    <path
                      d="M55.0746 68.5569V68.7839H53.7539V66.9648H55.0386V67.1919H54.0142V67.7456H54.9279V67.9644H54.0142V68.5513L55.0746 68.5569Z"
                      fill="white"
                    />
                    <path
                      d="M55.8573 67.1919H55.2344V66.9648H56.7378V67.1919H56.1148V68.7839H55.8573V67.1919Z"
                      fill="white"
                    />
                    <path
                      opacity="0.2"
                      d="M67.0048 51.8642V33.6763C67.0041 33.4826 66.9268 33.2971 66.7899 33.1602C66.653 33.0233 66.4675 32.946 66.2739 32.9453H61.9297V50.0645C61.9297 50.5418 62.1193 50.9996 62.4568 51.3371C62.7943 51.6746 63.2521 51.8642 63.7294 51.8642H67.0048Z"
                      fill="black"
                    />
                    <g opacity="0.4">
                      <path
                        d="M45.0826 41.9179H44.6562V41.7656H45.6862V41.9179H45.2598V43.006H45.0854L45.0826 41.9179Z"
                        fill="white"
                      />
                      <path
                        d="M45.7584 42.3886C45.7529 42.2567 45.7869 42.1262 45.8562 42.0138C45.9255 41.9014 46.0268 41.8123 46.1471 41.7579C46.2674 41.7035 46.4013 41.6864 46.5314 41.7087C46.6615 41.7311 46.782 41.7918 46.8774 41.8831C46.9727 41.9745 47.0385 42.0923 47.0664 42.2213C47.0942 42.3504 47.0829 42.4848 47.0337 42.6074C46.9845 42.7299 46.8998 42.8349 46.7905 42.9089C46.6811 42.983 46.5522 43.0226 46.4201 43.0227C46.3345 43.0268 46.2489 43.0135 46.1685 42.9834C46.0882 42.9534 46.0148 42.9073 45.9529 42.848C45.891 42.7886 45.8418 42.7173 45.8084 42.6383C45.7749 42.5594 45.7579 42.4744 45.7584 42.3886ZM46.9019 42.3886C46.9035 42.2924 46.8765 42.1978 46.8241 42.1169C46.7718 42.0361 46.6965 41.9727 46.608 41.9348C46.5194 41.897 46.4216 41.8863 46.327 41.9043C46.2324 41.9223 46.1453 41.9681 46.0768 42.0357C46.0083 42.1034 45.9616 42.19 45.9425 42.2844C45.9234 42.3788 45.9329 42.4767 45.9698 42.5657C46.0066 42.6547 46.0691 42.7307 46.1493 42.7839C46.2296 42.8372 46.3238 42.8654 46.4201 42.8649C46.4834 42.8668 46.5465 42.8558 46.6054 42.8326C46.6643 42.8094 46.718 42.7745 46.763 42.7299C46.808 42.6854 46.8436 42.6322 46.8675 42.5735C46.8913 42.5149 46.903 42.452 46.9019 42.3886Z"
                        fill="white"
                      />
                    </g>
                    <path
                      opacity="0.4"
                      d="M63.0742 38.5156H51.833C51.6986 38.5153 51.5655 38.5414 51.4412 38.5926C51.3169 38.6438 51.204 38.719 51.1088 38.8139C51.0137 38.9088 50.9382 39.0215 50.8866 39.1457C50.8351 39.2698 50.8086 39.4029 50.8086 39.5373C50.8082 39.6719 50.8345 39.8053 50.8858 39.9298C50.9372 40.0542 51.0126 40.1673 51.1078 40.2625C51.203 40.3577 51.3161 40.4331 51.4406 40.4845C51.565 40.5359 51.6984 40.5621 51.833 40.5617H63.0742C63.2088 40.5621 63.3422 40.5359 63.4666 40.4845C63.5911 40.4331 63.7042 40.3577 63.7994 40.2625C63.8946 40.1673 63.97 40.0542 64.0214 39.9298C64.0727 39.8053 64.099 39.6719 64.0986 39.5373C64.0986 39.4029 64.0721 39.2698 64.0206 39.1457C63.9691 39.0215 63.8936 38.9088 63.7984 38.8139C63.7032 38.719 63.5903 38.6438 63.466 38.5926C63.3417 38.5414 63.2086 38.5153 63.0742 38.5156Z"
                      fill="white"
                    />
                    <path
                      opacity="0.4"
                      d="M63.0742 41.2852H51.833C51.6986 41.2848 51.5655 41.311 51.4412 41.3621C51.3169 41.4133 51.204 41.4885 51.1088 41.5834C51.0136 41.6783 50.9381 41.7911 50.8866 41.9152C50.8351 42.0393 50.8086 42.1724 50.8086 42.3068C50.8086 42.5785 50.9165 42.8391 51.1086 43.0312C51.3008 43.2233 51.5613 43.3313 51.833 43.3313H63.0742C63.3459 43.3313 63.6064 43.2233 63.7985 43.0312C63.9907 42.8391 64.0986 42.5785 64.0986 42.3068C64.0986 42.1724 64.0721 42.0393 64.0206 41.9152C63.969 41.7911 63.8935 41.6783 63.7984 41.5834C63.7032 41.4885 63.5903 41.4133 63.466 41.3621C63.3417 41.311 63.2086 41.2848 63.0742 41.2852Z"
                      fill="white"
                    />
                    <path
                      d="M88.8755 4.88329V45.0302C88.8856 45.1128 88.8782 45.1966 88.8537 45.2761C88.8292 45.3556 88.7881 45.429 88.7332 45.4915C88.6783 45.554 88.6107 45.6041 88.5351 45.6387C88.4594 45.6732 88.3772 45.6914 88.2941 45.6919H64.2807C64.201 45.6931 64.1219 45.6781 64.0481 45.648C63.9743 45.6178 63.9074 45.5731 63.8513 45.5165C63.7952 45.4599 63.7511 45.3926 63.7217 45.3185C63.6922 45.2445 63.678 45.1652 63.6799 45.0856V4.82792C63.6799 4.53166 63.8986 4.15234 64.1948 4.15234H70.1975C70.2863 4.16593 70.3696 4.20394 70.438 4.26212C70.5065 4.3203 70.5574 4.39637 70.5851 4.48183L70.8343 5.03558C70.8679 5.10722 70.9231 5.16656 70.9921 5.20529C71.0611 5.24401 71.1405 5.26018 71.2192 5.25154H81.4414C81.6103 5.25154 81.7626 5.22662 81.8263 5.0688L82.0754 4.43476C82.1067 4.35628 82.1598 4.28845 82.2286 4.23936C82.2973 4.19027 82.3787 4.16198 82.4631 4.15788H88.3799C88.7066 4.15234 88.8755 4.55381 88.8755 4.88329Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.2"
                      d="M88.8755 4.88329V45.0302C88.8856 45.1128 88.8782 45.1966 88.8537 45.2761C88.8292 45.3556 88.7881 45.429 88.7332 45.4915C88.6783 45.554 88.6107 45.6041 88.5351 45.6387C88.4594 45.6732 88.3772 45.6914 88.2941 45.6919H64.2807C64.201 45.6931 64.1219 45.6781 64.0481 45.648C63.9743 45.6178 63.9074 45.5731 63.8513 45.5165C63.7952 45.4599 63.7511 45.3926 63.7217 45.3185C63.6922 45.2445 63.678 45.1652 63.6799 45.0856V4.82792C63.6799 4.53166 63.8986 4.15234 64.1948 4.15234H70.1975C70.2863 4.16593 70.3696 4.20394 70.438 4.26212C70.5065 4.3203 70.5574 4.39637 70.5851 4.48183L70.8343 5.03558C70.8679 5.10722 70.9231 5.16656 70.9921 5.20529C71.0611 5.24401 71.1405 5.26018 71.2192 5.25154H81.4414C81.6103 5.25154 81.7626 5.22662 81.8263 5.0688L82.0754 4.43476C82.1067 4.35628 82.1598 4.28845 82.2286 4.23936C82.2973 4.19027 82.3787 4.16198 82.4631 4.15788H88.3799C88.7066 4.15234 88.8755 4.55381 88.8755 4.88329Z"
                      fill="white"
                    />
                    <path
                      d="M76.1709 30.8692C81.2553 30.8692 85.377 26.7475 85.377 21.6631C85.377 16.5787 81.2553 12.457 76.1709 12.457C71.0866 12.457 66.9648 16.5787 66.9648 21.6631C66.9648 26.7475 71.0866 30.8692 76.1709 30.8692Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.4"
                      d="M85.4161 21.6631C85.4161 23.4839 84.8762 25.2638 83.8646 26.7778C82.853 28.2917 81.4152 29.4717 79.733 30.1685C78.0508 30.8653 76.1998 31.0476 74.414 30.6924C72.6282 30.3371 70.9878 29.4603 69.7003 28.1728C68.4128 26.8853 67.536 25.245 67.1808 23.4592C66.8256 21.6734 67.0079 19.8223 67.7047 18.1401C68.4015 16.4579 69.5814 15.0201 71.0954 14.0086C72.6093 12.997 74.3892 12.457 76.21 12.457C77.4196 12.4549 78.6177 12.6915 79.7356 13.1534C80.8535 13.6152 81.8693 14.2933 82.7246 15.1486C83.5799 16.0039 84.2579 17.0196 84.7198 18.1375C85.1817 19.2555 85.4183 20.4536 85.4161 21.6631Z"
                      fill="white"
                    />
                    <path
                      d="M77.5915 18.7499H76.0078L76.2376 18.0938H77.3617L77.5915 18.7499Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M83.3776 24.6423H68.3516L68.7226 22.2418C68.7467 22.0832 68.8219 21.9368 68.9369 21.8248C69.0518 21.7129 69.2002 21.6415 69.3594 21.6216L72.3441 21.2395L74.1466 19.1741C74.2789 19.0202 74.4594 18.9158 74.6588 18.8778C75.3621 18.7695 76.0738 18.7241 76.7852 18.7421C77.4816 18.7308 78.1779 18.7752 78.8673 18.875C79.1442 18.9166 79.457 19.0827 79.457 19.3263C79.457 19.3263 79.4764 19.3457 79.4792 19.354L80.3098 21.1066L80.2877 21.1316L80.4621 21.2478L82.7463 21.641C82.8468 21.6562 82.9397 21.7035 83.011 21.7759C83.0824 21.8483 83.1284 21.9418 83.1422 22.0425L83.3776 24.6423Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.2"
                      d="M83.3776 24.6423H68.3516L68.7226 22.2418C68.7467 22.0832 68.8219 21.9368 68.9369 21.8248C69.0518 21.7129 69.2002 21.6415 69.3594 21.6216L72.3441 21.2395L74.1466 19.1741C74.2789 19.0202 74.4594 18.9158 74.6588 18.8778C75.3621 18.7695 76.0738 18.7241 76.7852 18.7421C77.4816 18.7308 78.1779 18.7752 78.8673 18.875C79.1442 18.9166 79.457 19.0827 79.457 19.3263C79.457 19.3263 79.4764 19.3457 79.4792 19.354L80.3098 21.1066L80.2877 21.1316L80.4621 21.2478L82.7463 21.641C82.8468 21.6562 82.9397 21.7035 83.011 21.7759C83.0824 21.8483 83.1284 21.9418 83.1422 22.0425L83.3776 24.6423Z"
                      fill="black"
                    />
                    <path
                      d="M72.5642 24.7098C72.5642 24.9662 72.4881 25.2169 72.3456 25.43C72.2031 25.6432 72.0006 25.8093 71.7637 25.9072C71.5267 26.0052 71.266 26.0307 71.0146 25.9805C70.7632 25.9303 70.5323 25.8066 70.3512 25.6251C70.1701 25.4436 70.0469 25.2125 69.9972 24.9609C69.9475 24.7094 69.9736 24.4488 70.0721 24.2121C70.1706 23.9753 70.3371 23.7731 70.5506 23.6311C70.764 23.489 71.0148 23.4135 71.2712 23.4141C71.4412 23.4141 71.6096 23.4476 71.7667 23.5128C71.9237 23.5779 72.0664 23.6734 72.1865 23.7938C72.3066 23.9141 72.4018 24.057 72.4666 24.2142C72.5314 24.3714 72.5646 24.5398 72.5642 24.7098Z"
                      fill="#2E353A"
                    />
                    <path
                      d="M71.9169 24.7104C71.9169 24.8387 71.8788 24.964 71.8075 25.0706C71.7362 25.1772 71.6348 25.2603 71.5163 25.3092C71.3977 25.3582 71.2673 25.3709 71.1416 25.3456C71.0158 25.3204 70.9004 25.2584 70.8099 25.1675C70.7194 25.0766 70.6579 24.9609 70.6332 24.8351C70.6085 24.7092 70.6217 24.5789 70.6712 24.4605C70.7207 24.3422 70.8041 24.2412 70.9111 24.1703C71.018 24.0995 71.1435 24.062 71.2718 24.0625C71.3567 24.0625 71.4408 24.0793 71.5193 24.1119C71.5977 24.1445 71.669 24.1922 71.7289 24.2524C71.7888 24.3126 71.8363 24.3841 71.8686 24.4627C71.9008 24.5413 71.9172 24.6254 71.9169 24.7104Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M81.9063 24.7098C81.9058 24.9655 81.8295 25.2152 81.6871 25.4274C81.5447 25.6397 81.3425 25.805 81.1062 25.9024C80.8699 25.9999 80.61 26.0251 80.3594 25.9749C80.1087 25.9247 79.8786 25.8013 79.698 25.6204C79.5175 25.4394 79.3946 25.2091 79.345 24.9583C79.2953 24.7076 79.3211 24.4477 79.419 24.2116C79.5169 23.9755 79.6827 23.7737 79.8953 23.6318C80.1078 23.4898 80.3577 23.4141 80.6133 23.4141C80.7834 23.4141 80.9517 23.4476 81.1088 23.5128C81.2658 23.5779 81.4085 23.6734 81.5286 23.7938C81.6487 23.9141 81.7439 24.057 81.8087 24.2142C81.8735 24.3714 81.9067 24.5398 81.9063 24.7098Z"
                      fill="#2E353A"
                    />
                    <path
                      d="M81.2606 24.7104C81.2606 24.8385 81.2226 24.9638 81.1514 25.0703C81.0802 25.1769 80.9791 25.2599 80.8607 25.309C80.7423 25.358 80.612 25.3708 80.4863 25.3458C80.3607 25.3208 80.2452 25.2591 80.1546 25.1685C80.064 25.0779 80.0023 24.9625 79.9773 24.8368C79.9523 24.7111 79.9651 24.5808 80.0142 24.4625C80.0632 24.3441 80.1462 24.2429 80.2528 24.1717C80.3593 24.1005 80.4846 24.0625 80.6127 24.0625C80.6979 24.0621 80.7823 24.0786 80.8611 24.1111C80.9399 24.1435 81.0114 24.1912 81.0717 24.2515C81.1319 24.3117 81.1796 24.3833 81.2121 24.462C81.2445 24.5408 81.261 24.6252 81.2606 24.7104Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M69.6424 24.0625H68.3107C68.2189 24.0625 68.1445 24.1369 68.1445 24.2286V24.6439C68.1445 24.7357 68.2189 24.8101 68.3107 24.8101H69.6424C69.7342 24.8101 69.8085 24.7357 69.8085 24.6439V24.2286C69.8085 24.1369 69.7342 24.0625 69.6424 24.0625Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M83.3119 24.0625H82.2403C82.1486 24.0625 82.0742 24.1369 82.0742 24.2286V24.6439C82.0742 24.7357 82.1486 24.8101 82.2403 24.8101H83.3119C83.4036 24.8101 83.478 24.7357 83.478 24.6439V24.2286C83.478 24.1369 83.4036 24.0625 83.3119 24.0625Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M69.1845 23.2544C69.1845 23.5313 69.0821 23.7666 68.9575 23.7666C68.8329 23.7666 68.7305 23.5368 68.7305 23.2544C68.7305 22.972 68.8301 22.7422 68.9575 22.7422C69.0849 22.7422 69.1845 22.9775 69.1845 23.2544Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M83.1844 23.8608H82.7773V22.7422H83.0902L83.1844 23.8608Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M69.6601 22.3047H69.2227V22.7422H69.6601V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M70.0976 22.7422H69.6602V23.1797H70.0976V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M70.5351 22.3047H70.0977V22.7422H70.5351V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M70.9687 22.7422H70.5312V23.1797H70.9687V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M71.4062 22.3047H70.9688V22.7422H71.4062V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M71.8437 22.7422H71.4062V23.1797H71.8437V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M72.2812 22.3047H71.8438V22.7422H72.2812V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M72.7187 22.7422H72.2812V23.1797H72.7187V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M73.1523 22.3047H72.7148V22.7422H73.1523V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M73.5898 22.7422H73.1523V23.1797H73.5898V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M74.0234 22.3047H73.5859V22.7422H74.0234V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M74.4609 22.7422H74.0234V23.1797H74.4609V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M74.8984 22.3047H74.4609V22.7422H74.8984V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M75.332 22.7422H74.8945V23.1797H75.332V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M75.7695 22.3047H75.332V22.7422H75.7695V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M76.207 22.7422H75.7695V23.1797H76.207V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M76.6445 22.3047H76.207V22.7422H76.6445V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M77.082 22.7422H76.6445V23.1797H77.082V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M77.5156 22.3047H77.0781V22.7422H77.5156V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M77.9531 22.7422H77.5156V23.1797H77.9531V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M78.3867 22.3047H77.9492V22.7422H78.3867V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M78.8242 22.7422H78.3867V23.1797H78.8242V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M79.2617 22.3047H78.8242V22.7422H79.2617V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M79.6953 22.7422H79.2578V23.1797H79.6953V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M80.1328 22.3047H79.6953V22.7422H80.1328V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M80.5703 22.7422H80.1328V23.1797H80.5703V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M81.0078 22.3047H80.5703V22.7422H81.0078V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M81.4453 22.7422H81.0078V23.1797H81.4453V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M81.8789 22.3047H81.4414V22.7422H81.8789V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M82.3164 22.7422H81.8789V23.1797H82.3164V22.7422Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M82.7539 22.3047H82.3164V22.7422H82.7539V22.3047Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M76.9688 21.0132V19.1914L78.4694 19.2191C78.5587 19.2203 78.6457 19.247 78.7203 19.2961C78.7948 19.3451 78.8538 19.4145 78.8903 19.496L79.5741 21.0132H76.9688Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M73.3398 21.0101L74.5885 19.4762C74.6617 19.3881 74.7536 19.3175 74.8576 19.2696C74.9615 19.2217 75.0749 19.1977 75.1894 19.1993H76.5073V21.0211L73.3398 21.0101Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M74.4591 19.1924L72.9335 21.1028C72.9335 21.1028 72.9335 21.1665 72.3438 21.244L74.1462 19.1758L74.4591 19.1924Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M80.4073 21.0992L80.0058 21.0106L79.0977 19.2773C79.2204 19.2815 79.3426 19.2954 79.4631 19.3189C79.4631 19.3189 79.4825 19.3383 79.4853 19.3466L80.4073 21.0992Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.2"
                      d="M69.1845 23.2544C69.1845 23.5313 69.0821 23.7666 68.9575 23.7666C68.8329 23.7666 68.7305 23.5368 68.7305 23.2544C68.7305 22.972 68.8301 22.7422 68.9575 22.7422C69.0849 22.7422 69.1845 22.9775 69.1845 23.2544Z"
                      fill="white"
                    />
                    <path
                      opacity="0.2"
                      d="M83.1844 23.8608H82.7773V22.7422H83.0902L83.1844 23.8608Z"
                      fill="white"
                    />
                    <path
                      d="M84.333 26.0273C82.7825 28.7961 79.7258 30.8976 76.2095 30.8976C72.6931 30.8976 69.6364 28.7961 68.0859 26.0273H84.333Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M77.9852 16.6121H75.9252C75.829 16.6121 75.7367 16.5739 75.6687 16.5059C75.6007 16.4379 75.5625 16.3456 75.5625 16.2494C75.5625 16.1532 75.6007 16.061 75.6687 15.993C75.7367 15.9249 75.829 15.8867 75.9252 15.8867H77.9852C78.0814 15.8867 78.1736 15.9249 78.2416 15.993C78.3096 16.061 78.3479 16.1532 78.3479 16.2494C78.3479 16.3456 78.3096 16.4379 78.2416 16.5059C78.1736 16.5739 78.0814 16.6121 77.9852 16.6121Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M77.431 15.8834C77.431 16.0242 77.3892 16.1618 77.311 16.2788C77.2328 16.3958 77.1217 16.487 76.9917 16.5408C76.8617 16.5947 76.7186 16.6088 76.5806 16.5813C76.4425 16.5539 76.3157 16.4861 76.2162 16.3866C76.1167 16.2871 76.0489 16.1603 76.0215 16.0223C75.994 15.8842 76.0081 15.7412 76.062 15.6111C76.1158 15.4811 76.207 15.37 76.3241 15.2918C76.4411 15.2136 76.5787 15.1719 76.7194 15.1719C76.9081 15.1719 77.0891 15.2468 77.2225 15.3803C77.356 15.5137 77.431 15.6947 77.431 15.8834Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M77.3569 16.2958C77.5755 16.2958 77.7528 16.1185 77.7528 15.8998C77.7528 15.6812 77.5755 15.5039 77.3569 15.5039C77.1382 15.5039 76.9609 15.6812 76.9609 15.8998C76.9609 16.1185 77.1382 16.2958 77.3569 16.2958Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M82.9128 19.4717H81.3706C81.2972 19.4717 81.2268 19.4425 81.1748 19.3906C81.1229 19.3387 81.0938 19.2683 81.0938 19.1948C81.0938 19.1214 81.1229 19.051 81.1748 18.9991C81.2268 18.9471 81.2972 18.918 81.3706 18.918H82.9128C82.9863 18.918 83.0567 18.9471 83.1086 18.9991C83.1605 19.051 83.1897 19.1214 83.1897 19.1948C83.1897 19.2683 83.1605 19.3387 83.1086 19.3906C83.0567 19.4425 82.9863 19.4717 82.9128 19.4717Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M81.9691 19.4577C82.2627 19.4577 82.5007 19.2197 82.5007 18.9261C82.5007 18.6325 82.2627 18.3945 81.9691 18.3945C81.6755 18.3945 81.4375 18.6325 81.4375 18.9261C81.4375 19.2197 81.6755 19.4577 81.9691 19.4577Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M82.4447 19.2331C82.6083 19.2331 82.7409 19.1005 82.7409 18.9369C82.7409 18.7733 82.6083 18.6406 82.4447 18.6406C82.2811 18.6406 82.1484 18.7733 82.1484 18.9369C82.1484 19.1005 82.2811 19.2331 82.4447 19.2331Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M71.0036 19.361H68.9408C68.8446 19.361 68.7524 19.3228 68.6844 19.2548C68.6163 19.1867 68.5781 19.0945 68.5781 18.9983C68.5781 18.9018 68.6162 18.8093 68.6842 18.7408C68.7521 18.6724 68.8444 18.6335 68.9408 18.6328H71.0036C71.1 18.6335 71.1923 18.6724 71.2602 18.7408C71.3281 18.8093 71.3663 18.9018 71.3663 18.9983C71.3663 19.0459 71.3569 19.0931 71.3386 19.1371C71.3204 19.1811 71.2937 19.2211 71.26 19.2548C71.2263 19.2884 71.1864 19.3152 71.1424 19.3334C71.0983 19.3516 71.0512 19.361 71.0036 19.361Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M69.7389 19.345C70.1319 19.345 70.4505 19.0264 70.4505 18.6334C70.4505 18.2405 70.1319 17.9219 69.7389 17.9219C69.3459 17.9219 69.0273 18.2405 69.0273 18.6334C69.0273 19.0264 69.3459 19.345 69.7389 19.345Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M70.3764 19.0419C70.5951 19.0419 70.7723 18.8646 70.7723 18.6459C70.7723 18.4273 70.5951 18.25 70.3764 18.25C70.1577 18.25 69.9805 18.4273 69.9805 18.6459C69.9805 18.8646 70.1577 19.0419 70.3764 19.0419Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M81.2835 39.1282H71.0197C70.5483 39.1282 70.0962 38.9409 69.7628 38.6075C69.4295 38.2742 69.2422 37.8221 69.2422 37.3506C69.2418 37.117 69.2875 36.8855 69.3767 36.6695C69.4659 36.4536 69.5967 36.2573 69.7618 36.0919C69.9269 35.9266 70.123 35.7954 70.3389 35.7059C70.5547 35.6164 70.7861 35.5703 71.0197 35.5703H81.2835C81.5172 35.5703 81.7485 35.6164 81.9644 35.7059C82.1802 35.7954 82.3763 35.9266 82.5414 36.0919C82.7065 36.2573 82.8374 36.4536 82.9265 36.6695C83.0157 36.8855 83.0614 37.117 83.061 37.3506C83.061 37.8221 82.8738 38.2742 82.5404 38.6075C82.2071 38.9409 81.7549 39.1282 81.2835 39.1282Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M72.6211 38.1433L72.718 37.9411C72.8876 38.0791 73.1001 38.1535 73.3188 38.1516C73.6317 38.1516 73.7674 38.0297 73.7674 37.8747C73.7674 37.4289 72.6599 37.7113 72.6599 37.0441C72.6599 36.7672 72.8786 36.5235 73.3576 36.5235C73.5636 36.5208 73.7661 36.5765 73.9418 36.6841L73.856 36.8918C73.7065 36.7979 73.5341 36.7471 73.3576 36.745C73.0475 36.745 72.9146 36.8752 72.9146 37.0219C72.9146 37.4677 74.0221 37.188 74.0221 37.8525C74.0221 38.1294 73.7978 38.3703 73.3188 38.3703C73.0669 38.3784 72.82 38.2981 72.6211 38.1433Z"
                      fill="white"
                    />
                    <path
                      d="M74.7351 36.7601H74.1094V36.5469H75.6156V36.7711H74.9898V38.3659H74.7351V36.7601Z"
                      fill="white"
                    />
                    <path
                      d="M76.9699 37.8974H76.0036L75.8042 38.3542H75.5273L76.358 36.5352H76.6155L77.4461 38.3542H77.1692L76.9699 37.8974ZM76.8785 37.6897L76.4881 36.7982L76.0949 37.6897H76.8785Z"
                      fill="white"
                    />
                    <path
                      d="M78.9225 38.3549L78.5321 37.8011H78.4158H77.9673V38.3549H77.707V36.5469H78.4158C78.8893 36.5469 79.1745 36.785 79.1745 37.1809C79.1804 37.307 79.1446 37.4316 79.0725 37.5352C79.0004 37.6388 78.8961 37.7158 78.7758 37.7541L79.2077 38.3659L78.9225 38.3549ZM78.9225 37.1698C78.9225 36.9096 78.7481 36.7601 78.4158 36.7601H77.9728V37.5907H78.4158C78.7425 37.5796 78.9087 37.4273 78.9087 37.1698H78.9225Z"
                      fill="white"
                    />
                    <path
                      d="M79.9316 36.7601H79.3086V36.5469H80.812V36.7711H80.1891V38.3659H79.9316V36.7601Z"
                      fill="white"
                    />
                    <path
                      d="M109.646 56.2487C109.593 57.3562 102.25 59.1088 101.306 58.555C100.362 58.0013 101.306 50.5257 101.306 50.5257L106.963 49.3711C107.068 49.5843 109.704 55.1606 109.646 56.2487Z"
                      fill="#2E353A"
                    />
                    <path
                      d="M108.12 50.2488C106.619 51.1901 104.7 49.5649 103.283 47.9147C102.56 47.0652 101.9 46.1639 101.309 45.2179L102.948 42.7925L105.213 45.1653L105.628 45.528L105.351 45.0297L103.596 42.2609L105.473 36.8203C105.473 36.8203 110.841 48.5404 108.12 50.2488Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.2"
                      d="M102.951 42.7891L105.216 45.1619C104.939 46.4161 104.261 47.4433 103.228 47.9085C102.505 47.059 101.845 46.1577 101.254 45.2117L102.951 42.7891Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M105.371 45.0324L103.602 42.2637L105.493 36.8203C105.493 36.8203 106.323 41.6712 105.371 45.0324Z"
                      fill="black"
                    />
                    <path
                      d="M81.3422 39.2768L78.662 38.723C78.662 38.723 77.7262 37.8232 77.3884 37.5546C77.0506 37.286 75.8102 36.8624 75.5998 36.9759C75.3894 37.0895 76.5467 37.6294 76.5467 37.6294C76.5467 37.6294 75.993 38.8199 76.1009 39.1826C76.2089 39.5453 77.8452 40.0133 77.9948 39.9523L80.7026 40.9879L81.3422 39.2768Z"
                      fill="#EBB376"
                    />
                    <path
                      d="M80.5032 38.8797L79.2461 38.6914L78.6758 40.4025L79.7251 40.8344L80.5032 38.8797Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.6"
                      d="M80.5032 38.8797L79.2461 38.6914L78.6758 40.4025L79.7251 40.8344L80.5032 38.8797Z"
                      fill="white"
                    />
                    <path
                      d="M110.012 96.667L108.168 96.991L107.412 94.4769L106.723 92.1678L108.849 91.4258L109.466 94.2001L110.012 96.667Z"
                      fill="#E4897B"
                    />
                    <path
                      opacity="0.2"
                      d="M109.476 94.2533L107.422 94.5247L106.727 92.1934L108.85 91.4375L109.476 94.2533Z"
                      fill="black"
                    />
                    <path
                      d="M97.7008 97.4568H95.8292L95.5218 94.8487L95.2422 92.4565L97.4655 92.0938L97.5929 94.9345L97.7008 97.4568Z"
                      fill="#E4897B"
                    />
                    <path
                      opacity="0.2"
                      d="M97.5929 94.9905L95.5218 94.8991L95.2422 92.4793L97.4655 92.1055L97.5929 94.9905Z"
                      fill="black"
                    />
                    <path
                      d="M109.644 92.7931L106.612 93.3274C103.552 85.7051 101.376 79.3425 99.8396 74.0625C99.009 71.2134 98.3666 68.68 97.871 66.4318L98.0095 74.738V93.5794H94.9361C87.4467 57.8625 92.7544 49.7002 92.7544 49.7002L101.714 48.1719C102.069 49.826 102.319 51.5007 102.464 53.1861L102.869 56.1486L106.371 74.2341L109.644 92.7931Z"
                      fill="#F31D32"
                    />
                    <g opacity="0.5">
                      <path
                        d="M109.644 92.7931L106.612 93.3274C103.818 86.364 101.758 80.4527 100.244 75.4579L99.8286 74.0735C99.0783 71.4875 98.555 69.1618 98.0013 67.0741C97.9773 66.861 97.93 66.6512 97.8601 66.4484L98.0013 74.7547V93.5794H94.9362C90.3623 71.7644 90.5616 60.2298 91.4089 54.5538C91.9626 50.9351 92.7545 49.7002 92.7545 49.7002L101.714 48.1719C102.069 49.826 102.319 51.5007 102.464 53.1861L102.586 54.0776L102.863 56.1486L106.366 74.2341L109.644 92.7931Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M106.141 92.9557L109.903 91.707L109.851 93.3074L106.741 94.2986L106.141 92.9557Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.6"
                      d="M106.141 92.9557L109.903 91.707L109.851 93.3074L106.741 94.2986L106.141 92.9557Z"
                      fill="white"
                    />
                    <path
                      d="M94.5352 93.1267L98.4557 92.5508L98.1262 94.1179L94.8923 94.5526L94.5352 93.1267Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.6"
                      d="M94.5352 93.1267L98.4557 92.5508L98.1262 94.1179L94.8923 94.5526L94.5352 93.1267Z"
                      fill="white"
                    />
                    <path
                      opacity="0.2"
                      d="M100.26 75.4568L99.845 74.0724C99.0947 71.4864 98.5714 69.1607 98.0176 67.073L97.6992 63.23C97.6992 63.23 99.6124 59.0077 98.8953 56.0312C98.9618 56.2001 100.227 59.4368 99.7259 62.6763C99.6132 66.9436 99.7918 71.2137 100.26 75.4568Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M102.588 54.0749L91.4102 54.5538C91.9639 50.9351 92.7558 49.7002 92.7558 49.7002L101.715 48.1719C102.07 49.826 102.321 51.5007 102.466 53.1861L102.588 54.0749Z"
                      fill="black"
                    />
                    <path
                      d="M101.366 32.7622C101.344 32.7822 101.32 32.7998 101.294 32.8148C100.949 33.0783 100.556 33.2711 100.137 33.3824C98.9129 33.6593 98.0767 33.4959 97.5313 32.9422C96.7671 32.1116 96.5761 30.6414 96.6841 28.8638C96.7026 28.1573 96.8335 27.4582 97.0717 26.7928C97.0717 26.7928 97.0717 26.7651 97.0717 26.7596C97.0717 26.754 97.0911 26.707 97.1021 26.6848C97.252 26.3094 97.4934 25.9775 97.8043 25.7192C98.1153 25.461 98.4859 25.2847 98.8824 25.2063C99.227 25.13 99.5789 25.091 99.9318 25.09C103.396 25.054 104.018 30.7853 101.366 32.7622Z"
                      fill="#EBB376"
                    />
                    <path
                      opacity="0.2"
                      d="M101.294 32.8175C100.946 33.0652 100.553 33.2412 100.137 33.3353C98.9129 33.6121 98.0767 33.41 97.5312 32.8479C98.2631 33.0295 99.0343 32.9663 99.7269 32.668C100.231 32.4409 100.785 32.5572 101.294 32.8175Z"
                      fill="black"
                    />
                    <path
                      d="M101.644 35.9426C101.857 36.9283 100.581 37.327 100.581 37.327C98.4931 36.4355 98.1055 35.3252 98.1055 35.3252C99.847 34.4171 99.3431 31.8477 99.3431 31.8477L99.6975 32.0221L102.189 32.5094C102.189 32.5094 101.5 33.8329 101.409 34.1346C100.932 35.7128 101.644 35.9426 101.644 35.9426Z"
                      fill="#EBB376"
                    />
                    <path
                      d="M97.0662 26.7664C97.0662 26.7664 96.878 29.1946 99.176 30.2384C99.176 30.2384 100.164 32.7579 101.618 32.7939C103.6 32.8438 105.348 30.0252 104.664 27.1484C103.769 23.4245 98.1267 23.1199 97.0662 26.7664Z"
                      fill="#2E353A"
                    />
                    <path
                      d="M100.939 23.9443C100.939 23.9443 97.1678 22.906 96.6528 25.5363C95.9384 29.1855 98.8235 29.5759 98.8235 29.5759C98.8235 29.5759 99.1363 32.6215 98.0178 33.7152C98.0178 33.7152 100.598 35.5232 104.812 34.1305C107.567 33.2196 104.984 28.928 104.984 28.928C104.984 28.928 106.507 23.2992 100.939 23.9443Z"
                      fill="#2E353A"
                    />
                    <path
                      d="M98.0156 29.5414C98.0156 29.162 98.3202 28.5252 98.9072 28.6138C99.4941 28.7024 99.8541 30.2031 98.3534 30.5381C98.1402 30.5879 98.0156 30.3305 98.0156 29.5414Z"
                      fill="#EBB376"
                    />
                    <path
                      d="M98.4018 24.193C98.4018 24.193 96.5384 23.7168 96.029 26.0232C95.5195 28.3295 97.2168 29.2017 97.2168 29.2017"
                      stroke="#2E353A"
                      stroke-width="0.0177672"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M97.0625 35.0464C97.0625 35.0464 99.0809 33.9583 101.293 34.7197C103.505 35.4811 102.999 36.9568 102.999 36.9568L97.0625 35.0464Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.5"
                      d="M97.0625 35.0464C97.0625 35.0464 99.0809 33.9583 101.293 34.7197C103.505 35.4811 102.999 36.9568 102.999 36.9568L97.0625 35.0464Z"
                      fill="white"
                    />
                    <path
                      d="M105.492 36.8185C105.492 36.8185 103.579 36.0682 101.865 35.5975C100.527 35.2616 99.167 35.022 97.7949 34.8804C96.5009 34.7346 95.198 34.6828 93.8965 34.7254C93.9353 35.3511 93.9602 35.9436 93.9851 36.5001C94.0183 37.2338 94.0405 37.915 94.0571 38.5462C94.0875 39.7313 94.0848 40.7446 94.0571 41.6472C94.01 43.6102 93.7727 45.5639 93.3483 47.481L91.4102 52.1879L103 53.6608L102.341 49.0453C104.279 43.4469 105.088 40.4982 105.387 38.8259C105.747 36.9625 105.492 36.8185 105.492 36.8185Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M93.8973 34.7344C94.5513 36.224 94.6147 37.9066 94.0745 39.4413C94.0745 39.4413 87.7728 43.9488 85.9731 43.6027C84.1734 43.2566 79.3281 41.0194 79.3281 41.0194L80.0895 38.7463C80.0895 38.7463 85.6963 39.8538 86.1808 40.0725C86.6653 40.2913 93.8973 34.7344 93.8973 34.7344Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M104.217 36.3501C104.217 36.3501 106.922 44.6259 107.567 51.4758L106.684 51.3623C106.684 51.3623 105.424 40.1073 103.805 36.3086L104.217 36.3501Z"
                      fill="#2E353A"
                    />
                    <path
                      opacity="0.2"
                      d="M104.217 36.3501C104.217 36.3501 106.922 44.6259 107.567 51.4758L106.684 51.3623C106.684 51.3623 105.424 40.1073 103.805 36.3086L104.217 36.3501Z"
                      fill="black"
                    />
                    <path
                      d="M106.971 49.375L103.324 50.1087L104.523 58.3181C106.874 57.8335 109.618 56.9171 109.651 56.2415C109.703 55.1589 107.068 49.5827 106.971 49.375Z"
                      fill="#2E353A"
                    />
                    <path
                      opacity="0.1"
                      d="M109.645 56.2487C109.091 56.6446 108.078 57.3091 107.153 56.4314C106.228 55.5537 106.967 49.3711 106.967 49.3711C107.067 49.5843 109.703 55.1606 109.645 56.2487Z"
                      fill="white"
                    />
                    <path
                      d="M105.271 50.938C105.271 50.938 104.692 38.0328 103.43 36.1445L103.803 36.3051C103.803 36.3051 105.578 38.3401 106.082 50.938H105.271Z"
                      fill="#2E353A"
                    />
                    <path
                      d="M92.9221 101.533C93.2041 101.306 93.5249 101.132 93.869 101.018C93.869 101.018 94.899 99.9967 95.3946 96.9207L96.743 96.5718C96.9716 96.516 97.2118 96.5318 97.4312 96.617C97.6505 96.7021 97.8385 96.8526 97.9695 97.048C98.0058 97.103 98.0347 97.1626 98.0554 97.2252C98.1239 97.5551 98.1719 97.8889 98.1994 98.2247C98.335 99.2686 98.2187 101.605 98.2187 101.605H97.9751L97.8782 99.4845C97.8422 98.7646 97.2912 99.6063 97.1334 100.384C96.9756 101.162 96.6405 101.982 95.0624 102.023C93.2211 102.057 92.457 101.985 92.9221 101.533Z"
                      fill="#2E353A"
                    />
                    <path
                      d="M98.0162 97.0729C98.1048 96.353 98.1325 95.1016 98.1325 95.1016L95.1367 95.4338C95.1367 95.4338 95.4994 96.857 95.2004 97.9257C96.7094 97.5298 98.0162 97.0729 98.0162 97.0729Z"
                      fill="#2E353A"
                    />
                    <path
                      d="M105.112 101.533C105.394 101.305 105.715 101.131 106.059 101.018C106.059 101.018 107.089 99.9967 107.585 96.9207L108.933 96.5718C109.162 96.516 109.402 96.5318 109.621 96.617C109.841 96.7021 110.029 96.8526 110.16 97.048C110.196 97.103 110.225 97.1626 110.246 97.2252C110.314 97.5551 110.362 97.8889 110.389 98.2247C110.525 99.2686 110.409 101.605 110.409 101.605H110.165L110.068 99.4845C110.032 98.7646 109.481 99.6063 109.324 100.384C109.166 101.162 108.831 101.982 107.252 102.023C105.411 102.057 104.661 101.985 105.112 101.533Z"
                      fill="#2E353A"
                    />
                    <path
                      d="M110.2 97.0729C110.288 96.353 110.316 95.1016 110.316 95.1016L107.32 95.4338C107.32 95.4338 107.683 96.857 107.384 97.9257C108.901 97.5298 110.2 97.0729 110.2 97.0729Z"
                      fill="#2E353A"
                    />
                  </svg>
                </div>{" "}
                <br />
                <div className="text-black text-lg">User</div>
              </Link>
              <Link
                to="/vendorlogin"
                data-modal-hide="popup-modal"
                type="button"
                className="text-white  shadow-lg bg-[#FFFFFF] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex flex-col items-center px-5 py-2.5 text-center mr-2"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="116"
                    height="109"
                    viewBox="0 0 116 109"
                    fill="none"
                  >
                    <path
                      d="M8.20561 29.0305C8.31611 28.9625 8.44335 28.9264 8.57313 28.9264C8.70292 28.9264 8.83016 28.9625 8.94066 29.0305L9.13103 29.139L9.32669 29.2368C9.44469 29.2902 9.54552 29.3753 9.6179 29.4827C9.69027 29.5901 9.73135 29.7155 9.73652 29.8449L9.7656 30.7518L12.7164 30.6593L12.6873 29.755C12.6842 29.6263 12.7166 29.4993 12.781 29.3878C12.8453 29.2763 12.9392 29.1847 13.0522 29.1231C13.1791 29.0517 13.3166 28.975 13.425 28.8904C13.5308 28.8157 13.6554 28.7719 13.7848 28.7639C13.9141 28.756 14.0432 28.7842 14.1574 28.8455L14.9506 29.2712L16.3467 26.6694L15.5534 26.2411C15.4396 26.179 15.3453 26.0866 15.2808 25.9741C15.2164 25.8616 15.1845 25.7334 15.1886 25.6039C15.1912 25.4574 15.1859 25.3109 15.1727 25.1649C15.1611 25.0355 15.1853 24.9054 15.2427 24.7888C15.3 24.6723 15.3883 24.5737 15.4979 24.5039L16.27 24.0254L14.7126 21.5161L13.9379 21.9974C13.8274 22.0641 13.7008 22.0993 13.5717 22.0993C13.4426 22.0993 13.316 22.0641 13.2055 21.9974C13.1421 21.9603 13.0812 21.9233 13.0151 21.889L12.8221 21.7911C12.7038 21.7372 12.6026 21.6516 12.5299 21.5438C12.4571 21.4361 12.4155 21.3103 12.4097 21.1804L12.3832 20.2734L9.43245 20.366L9.45889 21.2676C9.46333 21.3976 9.43125 21.5262 9.36629 21.6388C9.30132 21.7514 9.20608 21.8436 9.09137 21.9048C8.96189 21.9752 8.83654 22.0529 8.71591 22.1375C8.60952 22.212 8.48469 22.2559 8.35506 22.2643C8.22542 22.2727 8.09598 22.2453 7.98086 22.1851L7.18765 21.7568L5.79688 24.3638L6.59009 24.7921C6.70545 24.8517 6.80208 24.942 6.86928 25.053C6.93648 25.1641 6.97163 25.2916 6.97084 25.4214C6.96163 25.5685 6.96163 25.7159 6.97084 25.863C6.98315 25.9921 6.95924 26.1221 6.90179 26.2384C6.84435 26.3547 6.75564 26.4527 6.64562 26.5213L5.87884 27.0078L7.43619 29.5171L8.20561 29.0305ZM8.9433 24.3638C9.16925 23.9421 9.51516 23.5969 9.93729 23.3717C10.3594 23.1466 10.8388 23.0517 11.3149 23.0989C11.791 23.1462 12.2423 23.3336 12.6119 23.6374C12.9815 23.9411 13.2528 24.3477 13.3914 24.8056C13.53 25.2635 13.5297 25.7522 13.3906 26.2099C13.2514 26.6677 12.9797 27.0739 12.6098 27.3772C12.2398 27.6806 11.7882 27.8674 11.3121 27.9141C10.836 27.9609 10.3567 27.8654 9.93482 27.6398C9.36925 27.3365 8.94716 26.8212 8.76126 26.2069C8.57535 25.5927 8.64083 24.9298 8.9433 24.3638Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M100.655 7.42726C100.733 7.47434 100.797 7.54183 100.839 7.62245C100.882 7.70307 100.901 7.79375 100.896 7.88468C100.896 7.93492 100.896 7.98516 100.896 8.03804C100.896 8.09092 100.896 8.13851 100.896 8.1914C100.902 8.28198 100.882 8.37233 100.84 8.45254C100.797 8.53276 100.733 8.59975 100.655 8.64617L100.105 8.96346L101.139 10.7535L101.689 10.4362C101.769 10.3915 101.859 10.3696 101.95 10.3729C102.041 10.3761 102.129 10.4045 102.205 10.4547C102.29 10.5117 102.378 10.5638 102.469 10.6107C102.549 10.6525 102.615 10.7152 102.662 10.7921C102.709 10.869 102.733 10.9571 102.734 11.047V11.6736H104.801V11.039C104.802 10.9492 104.826 10.861 104.873 10.7842C104.919 10.7073 104.986 10.6446 105.066 10.6028C105.157 10.5558 105.245 10.5037 105.33 10.4468C105.406 10.3965 105.494 10.3682 105.585 10.3649C105.676 10.3617 105.766 10.3836 105.846 10.4283L106.396 10.7456L107.445 8.96346L106.893 8.64353C106.815 8.59744 106.751 8.53043 106.709 8.45007C106.667 8.36971 106.648 8.2792 106.655 8.18875C106.655 8.13851 106.655 8.08828 106.655 8.03804C106.655 7.9878 106.655 7.93492 106.655 7.88468C106.649 7.79366 106.668 7.70276 106.711 7.62203C106.753 7.5413 106.817 7.47389 106.895 7.42726L107.445 7.10998L106.417 5.32788L105.859 5.63724C105.778 5.68456 105.685 5.70795 105.592 5.70467C105.498 5.7014 105.407 5.67159 105.33 5.61873C105.243 5.5632 105.153 5.51032 105.066 5.46273C104.986 5.42114 104.919 5.35848 104.873 5.28156C104.826 5.20464 104.801 5.11641 104.801 5.02646V4.39453H102.734V5.02646C102.734 5.11641 102.709 5.20464 102.662 5.28156C102.616 5.35848 102.549 5.42114 102.469 5.46273C102.377 5.51032 102.287 5.5632 102.205 5.61873C102.129 5.66898 102.041 5.6973 101.95 5.70056C101.859 5.70383 101.769 5.68191 101.689 5.63724L101.139 5.32788L100.105 7.11791L100.655 7.42726ZM103.778 6.34056C104.113 6.34056 104.441 6.43989 104.719 6.62601C104.998 6.81212 105.215 7.07666 105.344 7.3862C105.472 7.69574 105.506 8.03638 105.441 8.36507C105.375 8.69376 105.214 8.99576 104.977 9.23289C104.741 9.47003 104.439 9.63165 104.11 9.69735C103.782 9.76304 103.441 9.72985 103.131 9.60198C102.822 9.47411 102.557 9.25729 102.37 8.97892C102.184 8.70055 102.084 8.37313 102.083 8.03804C102.083 7.5883 102.262 7.15693 102.579 6.83867C102.897 6.52041 103.328 6.34126 103.778 6.34056Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M97.5352 46.8533C97.5352 48.4466 98.0076 50.0041 98.8927 51.329C99.7779 52.6538 101.036 53.6864 102.508 54.2962C103.98 54.9061 105.6 55.0658 107.162 54.7551C108.725 54.4445 110.161 53.6775 111.287 52.551C112.414 51.4246 113.182 49.9893 113.493 48.4267C113.804 46.864 113.645 45.2443 113.036 43.7721C112.426 42.2999 111.394 41.0415 110.069 40.1559C108.745 39.2703 107.188 38.7974 105.594 38.7969C104.536 38.7965 103.488 39.0047 102.51 39.4094C101.533 39.8141 100.644 40.4075 99.8958 41.1556C99.1474 41.9038 98.5537 42.792 98.1487 43.7696C97.7436 44.7473 97.5352 45.7951 97.5352 46.8533ZM101.826 46.8533C101.826 46.1086 102.046 45.3805 102.46 44.7611C102.873 44.1416 103.461 43.6586 104.148 43.3732C104.836 43.0877 105.593 43.0126 106.324 43.1574C107.054 43.3021 107.725 43.6603 108.252 44.1865C108.779 44.7126 109.138 45.3833 109.284 46.1135C109.43 46.8438 109.356 47.6009 109.071 48.2891C108.787 48.9773 108.304 49.5656 107.686 49.9798C107.067 50.3939 106.339 50.6153 105.594 50.6158C105.1 50.6162 104.61 50.5191 104.153 50.3302C103.696 50.1413 103.281 49.8643 102.931 49.5149C102.581 49.1655 102.304 48.7506 102.114 48.294C101.925 47.8373 101.827 47.3478 101.826 46.8533Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M104.043 39.1333H107.142L106.97 36.9414H104.215L104.043 39.1333Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M109.938 40.1765L112.129 42.3684L113.56 40.6948L111.609 38.7461L109.938 40.1765Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M113.371 45.082V48.1809L115.566 48.009V45.2539L113.371 45.082Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M112.326 50.9844L110.137 53.1737L111.808 54.6041L113.756 52.6554L112.326 50.9844Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M107.419 54.4141H104.32L104.492 56.606H107.247L107.419 54.4141Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M101.521 53.3716L99.3289 51.1797L97.8984 52.8534L99.8471 54.802L101.521 53.3716Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M98.0891 48.4621V45.3633L95.8945 45.5325V48.2903L98.0891 48.4621Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M99.1309 42.565L101.323 40.3757L99.6518 38.9453L97.7031 40.894L99.1309 42.565Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M19.4766 40.8064C19.476 42.4005 19.9483 43.9589 20.8335 45.2845C21.7187 46.6102 22.9772 47.6436 24.4497 48.2539C25.9223 48.8643 27.5428 49.0243 29.1063 48.7136C30.6698 48.403 32.106 47.6356 33.2333 46.5086C34.3607 45.3817 35.1285 43.9457 35.4397 42.3823C35.7509 40.8189 35.5914 39.1984 34.9815 37.7256C34.3716 36.2529 33.3387 34.994 32.0133 34.1084C30.6879 33.2227 29.1297 32.75 27.5356 32.75C25.3987 32.75 23.3492 33.5987 21.8379 35.1095C20.3267 36.6203 19.4773 38.6695 19.4766 40.8064ZM23.7705 40.8064C23.7695 40.0615 23.9894 39.3331 24.4025 38.7132C24.8156 38.0933 25.4032 37.6099 26.0911 37.3241C26.779 37.0384 27.5362 36.963 28.2669 37.1077C28.9977 37.2524 29.669 37.6106 30.1961 38.1369C30.7232 38.6633 31.0823 39.3342 31.228 40.0647C31.3737 40.7952 31.2995 41.5525 31.0147 42.2408C30.7299 42.9291 30.2473 43.5174 29.628 43.9314C29.0087 44.3453 28.2805 44.5663 27.5356 44.5663C26.5382 44.5656 25.5817 44.1694 24.8759 43.4646C24.1701 42.7598 23.7726 41.8039 23.7705 40.8064Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M25.9883 33.0852H29.0845L28.9153 30.8906H26.1575L25.9883 33.0852Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M31.8828 34.1296L34.0747 36.3189L35.5025 34.6479L33.5539 32.6992L31.8828 34.1296Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M35.3164 39.0312V42.1301L37.511 41.9582V39.2031L35.3164 39.0312Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M34.2713 44.9336L32.082 47.1255L33.7531 48.556L35.7017 46.6073L34.2713 44.9336Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M29.3645 48.3633H26.2656L26.4375 50.5578H29.1926L29.3645 48.3633Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M23.4661 47.3221L21.2742 45.1328L19.8438 46.8039L21.7924 48.7525L23.4661 47.3221Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M20.0344 42.4113V39.3125L17.8398 39.4844V42.2395L20.0344 42.4113Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M21.0789 36.5169L23.2682 34.325L21.5971 32.8945L19.6484 34.8432L21.0789 36.5169Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M45.0945 72.4688L44.801 74.2641L44.4864 76.1916L41.6202 93.7746H36.9297L39.7985 76.1916L40.1131 74.2641L40.404 72.4688H45.0945Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M44.4132 72.4688C44.1647 74.2508 43.9003 76.0276 43.62 77.8071L42.7951 83.1349L41.9278 88.46L41.481 91.1041L41.0156 93.7613L41.3964 91.0908L41.7956 88.4256L42.6232 83.0952L43.501 77.7754C43.7972 76.0118 44.096 74.2403 44.4132 72.4688Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M44.7994 74.2656L44.4848 76.1931H39.7969L40.1115 74.2656H44.7994Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M68.2461 72.4688L68.5369 74.2641L68.8516 76.1916L71.7177 93.7746H76.4083L73.5395 76.1916L73.2275 74.2641L72.934 72.4688H68.2461Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M68.9375 72.4688C69.1834 74.2508 69.4504 76.0276 69.7307 77.8071L70.5557 83.1349L71.4229 88.46L71.8698 91.1041L72.3351 93.7613L71.9544 91.0908L71.5551 88.4256L70.7275 83.0952L69.8497 77.7754C69.5536 76.0118 69.2548 74.2403 68.9375 72.4688Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M68.5352 74.2656H73.2257L73.5377 76.1931H68.8498L68.5352 74.2656Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M44.9207 67.521H41.2031L41.6658 64.0547H44.458L44.9207 67.521Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M46.5304 61.5796C46.5304 62.2652 46.3271 62.9354 45.9462 63.5054C45.5653 64.0755 45.0239 64.5198 44.3905 64.7821C43.7571 65.0445 43.0602 65.1131 42.3878 64.9794C41.7154 64.8456 41.0977 64.5155 40.6129 64.0307C40.1282 63.5459 39.798 62.9283 39.6643 62.2559C39.5305 61.5835 39.5992 60.8865 39.8615 60.2531C40.1239 59.6197 40.5682 59.0784 41.1382 58.6975C41.7082 58.3166 42.3784 58.1133 43.064 58.1133C43.5193 58.1129 43.9702 58.2024 44.3909 58.3764C44.8117 58.5505 45.1939 58.8058 45.5159 59.1278C45.8378 59.4497 46.0931 59.832 46.2672 60.2527C46.4413 60.6734 46.5307 61.1243 46.5304 61.5796Z"
                      fill="#DBDBDB"
                    />
                    <path
                      d="M45.6944 61.5776C45.6944 62.1006 45.5393 62.6118 45.2488 63.0466C44.9582 63.4814 44.5453 63.8203 44.0621 64.0204C43.579 64.2206 43.0474 64.2729 42.5345 64.1709C42.0216 64.0689 41.5505 63.8171 41.1807 63.4473C40.8109 63.0775 40.5591 62.6064 40.4571 62.0935C40.355 61.5806 40.4074 61.0489 40.6075 60.5658C40.8076 60.0827 41.1465 59.6697 41.5813 59.3792C42.0162 59.0887 42.5274 58.9336 43.0503 58.9336C43.7516 58.9336 44.4241 59.2122 44.9199 59.708C45.4158 60.2039 45.6944 60.8764 45.6944 61.5776Z"
                      fill="white"
                    />
                    <path
                      d="M45.2665 61.4268C45.242 61.1126 45.1528 60.8069 45.0045 60.5289C44.8561 60.2509 44.6519 60.0065 44.4045 59.8113C44.1563 59.6176 43.8712 59.4765 43.5666 59.3965C43.2621 59.3165 42.9444 59.2993 42.633 59.3459C42.3239 59.3953 42.0285 59.509 41.7662 59.6798C41.5038 59.8506 41.2803 60.0747 41.11 60.3374C40.9316 60.616 40.8146 60.9294 40.7667 61.2567C40.7188 61.5841 40.7412 61.9179 40.8324 62.2359C40.9908 62.7886 41.3602 63.2568 41.861 63.5394C42.3503 63.8161 42.9239 63.9045 43.4738 63.7879C44.0068 63.6744 44.4847 63.3813 44.8276 62.9577C45.1664 62.5414 45.3612 62.0265 45.3828 61.4902C45.3828 61.4664 45.3828 61.4453 45.3643 61.4426C45.3458 61.44 45.3405 61.4638 45.3379 61.4902C45.3269 61.7066 45.2851 61.9203 45.2136 62.1248C45.1413 62.3268 45.0436 62.5187 44.9228 62.6959C44.7991 62.8708 44.6543 63.0297 44.4918 63.1692C44.3237 63.3081 44.14 63.427 43.9445 63.5235C43.6647 63.657 43.3599 63.7298 43.05 63.737C42.7401 63.7443 42.4322 63.686 42.1465 63.5658C41.8585 63.4445 41.6003 63.2621 41.3898 63.0311C41.1793 62.8 41.0216 62.526 40.9276 62.2279C40.8304 61.9211 40.8006 61.5968 40.8403 61.2774C40.88 60.9579 40.9882 60.6508 41.1576 60.3771C41.3202 60.1174 41.5369 59.8958 41.7929 59.7274C42.0488 59.5591 42.3381 59.4479 42.641 59.4014C43.0492 59.3354 43.4678 59.3814 43.852 59.5346C44.2361 59.6878 44.5715 59.9424 44.8223 60.2713C44.9452 60.4392 45.044 60.6234 45.1158 60.8186C45.1865 61.016 45.2336 61.221 45.2559 61.4294C45.2559 61.4294 45.2665 61.4347 45.2665 61.4268Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M44.9535 61.4262C44.9302 61.1574 44.8521 60.8962 44.7238 60.6588C44.5956 60.4214 44.42 60.2129 44.2079 60.046C43.9947 59.8819 43.7509 59.7618 43.4908 59.6928C43.2307 59.6238 42.9594 59.6073 42.6928 59.6441C42.4257 59.6831 42.1697 59.7782 41.9419 59.9231C41.714 60.068 41.5194 60.2595 41.3708 60.4849C41.212 60.7244 41.1063 60.995 41.0607 61.2786C41.0151 61.5623 41.0307 61.8524 41.1064 62.1295C41.1729 62.369 41.2861 62.593 41.4395 62.7886C41.5928 62.9842 41.7834 63.1475 42.0001 63.2691C42.4269 63.5107 42.9278 63.586 43.4067 63.4807C43.8685 63.3786 44.2817 63.1221 44.5781 62.7535C44.8688 62.3911 45.0372 61.9459 45.0593 61.4818C45.0593 61.4606 45.0593 61.4421 45.0381 61.4395C45.017 61.4368 45.0143 61.458 45.0117 61.4791C44.9866 61.8526 44.8618 62.2126 44.6502 62.5214C44.4386 62.8302 44.1479 63.0766 43.8086 63.2348C43.5676 63.3523 43.3042 63.417 43.0361 63.4248C42.7681 63.4325 42.5014 63.3831 42.2539 63.2797C42.0033 63.1756 41.7787 63.0177 41.5959 62.8171C41.4132 62.6165 41.2767 62.3781 41.1963 62.119C41.1161 61.8548 41.0934 61.5765 41.1299 61.3028C41.1664 61.0291 41.2612 60.7665 41.4078 60.5325C41.5495 60.3121 41.7369 60.1247 41.9572 59.9828C42.1775 59.841 42.4256 59.748 42.6849 59.7102C43.0311 59.659 43.3846 59.7002 43.7097 59.8298C44.0348 59.9593 44.3198 60.1726 44.5358 60.4479C44.6428 60.5915 44.7316 60.7478 44.8002 60.9133C44.8605 61.0846 44.9022 61.2619 44.9244 61.4421C44.9244 61.4421 44.9562 61.4315 44.9535 61.4262Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M44.6455 61.4337C44.6233 61.2103 44.5558 60.9939 44.4471 60.7975C44.3385 60.6011 44.191 60.4289 44.0136 60.2914C43.6567 60.0179 43.2066 59.8954 42.7603 59.9503C42.5367 59.9806 42.322 60.0578 42.1302 60.1767C41.9384 60.2956 41.7738 60.4536 41.6472 60.6404C41.5113 60.8427 41.42 61.0715 41.3794 61.3118C41.3389 61.5521 41.3499 61.7982 41.4119 62.0339C41.466 62.2389 41.5611 62.4309 41.6915 62.5982C41.822 62.7654 41.985 62.9045 42.1707 63.0069C42.5354 63.2116 42.9632 63.2738 43.3711 63.1814C43.7619 63.0915 44.1106 62.8715 44.36 62.5574C44.6028 62.2491 44.7441 61.8732 44.7645 61.4813C44.7662 61.4736 44.765 61.4655 44.7611 61.4587C44.7572 61.4518 44.7509 61.4467 44.7434 61.4442C44.7434 61.4442 44.7196 61.4601 44.7196 61.4786C44.6945 61.7923 44.5875 62.0939 44.4093 62.3532C44.2312 62.6126 43.988 62.8207 43.7043 62.9566C43.5003 63.0592 43.2766 63.1166 43.0484 63.1248C42.8203 63.133 42.593 63.0919 42.3822 63.0042C42.1705 62.9156 41.9811 62.7812 41.8275 62.6107C41.6739 62.4402 41.5599 62.2378 41.4938 62.018C41.4291 61.7968 41.4126 61.5644 41.4455 61.3363C41.4783 61.1083 41.5597 60.8899 41.6842 60.696C41.8042 60.5133 41.9623 60.3588 42.1476 60.2429C42.3328 60.127 42.541 60.0524 42.7577 60.0244C43.0446 59.9912 43.3352 60.0256 43.6064 60.1249C43.8778 60.2292 44.1161 60.4046 44.2965 60.6325C44.384 60.7511 44.4567 60.8799 44.5133 61.0159C44.567 61.1566 44.6043 61.303 44.6244 61.4522C44.6244 61.4522 44.6482 61.439 44.6455 61.4337Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M44.3397 61.4344C44.3155 61.2559 44.2564 61.0839 44.1656 60.9283C44.0749 60.7726 43.9543 60.6364 43.8109 60.5275C43.5237 60.317 43.1678 60.2226 42.8141 60.2631C42.6338 60.2825 42.4597 60.3397 42.3031 60.4308C42.1464 60.5219 42.0106 60.6449 41.9045 60.7919C41.7904 60.9554 41.7125 61.1414 41.676 61.3375C41.6395 61.5336 41.6453 61.7352 41.693 61.9288C41.7355 62.0991 41.8127 62.2588 41.9195 62.398C42.0264 62.5371 42.1608 62.6529 42.3143 62.7379C42.6163 62.9081 42.9717 62.9573 43.3085 62.8754C43.6301 62.7972 43.915 62.6104 44.1149 62.3466C44.3134 62.0941 44.4297 61.7868 44.4481 61.4661C44.4489 61.4595 44.4471 61.4528 44.4432 61.4474C44.4393 61.442 44.4335 61.4383 44.4269 61.437C44.4269 61.437 44.4031 61.437 44.4005 61.4661C44.3767 61.7192 44.2886 61.9621 44.1447 62.1717C44.0009 62.3813 43.8058 62.5507 43.5782 62.6639C43.4138 62.7488 43.2331 62.7973 43.0482 62.806C42.8634 62.8147 42.6789 62.7833 42.5073 62.7141C42.3338 62.6424 42.1788 62.5324 42.0538 62.3922C41.9288 62.2521 41.8371 62.0856 41.7855 61.905C41.7335 61.7237 41.7217 61.5333 41.7509 61.3469C41.7801 61.1606 41.8497 60.9829 41.9547 60.8263C42.0525 60.6807 42.1807 60.558 42.3304 60.4668C42.4801 60.3755 42.6478 60.3177 42.822 60.2974C43.0485 60.2766 43.2768 60.3055 43.4909 60.3821C43.7053 60.4635 43.8948 60.5992 44.0409 60.776C44.1129 60.8688 44.1732 60.97 44.2207 61.0774C44.2635 61.1898 44.2963 61.3057 44.3185 61.4238C44.3185 61.4238 44.3397 61.437 44.3397 61.4344Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M72.0535 67.521H68.3359L68.7986 64.0547H71.5908L72.0535 67.521Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M73.6593 61.5796C73.6593 62.2652 73.456 62.9354 73.0751 63.5054C72.6942 64.0755 72.1528 64.5198 71.5194 64.7821C70.886 65.0445 70.1891 65.1131 69.5167 64.9794C68.8443 64.8456 68.2266 64.5155 67.7418 64.0307C67.2571 63.5459 66.9269 62.9283 66.7932 62.2559C66.6594 61.5835 66.7281 60.8865 66.9904 60.2531C67.2528 59.6197 67.6971 59.0784 68.2671 58.6975C68.8372 58.3166 69.5073 58.1133 70.1929 58.1133C70.6482 58.1129 71.0991 58.2024 71.5199 58.3764C71.9406 58.5505 72.3228 58.8058 72.6448 59.1278C72.9667 59.4497 73.222 59.832 73.3961 60.2527C73.5702 60.6734 73.6596 61.1243 73.6593 61.5796Z"
                      fill="#DBDBDB"
                    />
                    <path
                      d="M72.8272 61.5776C72.8272 62.1006 72.6721 62.6118 72.3816 63.0466C72.091 63.4814 71.6781 63.8203 71.195 64.0204C70.7118 64.2206 70.1802 64.2729 69.6673 64.1709C69.1544 64.0689 68.6833 63.8171 68.3135 63.4473C67.9437 63.0775 67.6919 62.6064 67.5899 62.0935C67.4878 61.5806 67.5402 61.0489 67.7403 60.5658C67.9405 60.0827 68.2794 59.6697 68.7142 59.3792C69.149 59.0887 69.6602 58.9336 70.1831 58.9336C70.8844 58.9336 71.5569 59.2122 72.0528 59.708C72.5486 60.2039 72.8272 60.8764 72.8272 61.5776Z"
                      fill="white"
                    />
                    <path
                      d="M72.3954 61.4268C72.3709 61.1126 72.2817 60.8069 72.1334 60.5289C71.985 60.2509 71.7808 60.0065 71.5334 59.8113C71.2852 59.6176 71.0001 59.4765 70.6955 59.3965C70.391 59.3165 70.0733 59.2993 69.7619 59.3459C69.4528 59.3953 69.1574 59.509 68.8951 59.6798C68.6327 59.8506 68.4092 60.0747 68.239 60.3374C68.0605 60.616 67.9435 60.9294 67.8956 61.2567C67.8477 61.5841 67.8701 61.9179 67.9613 62.2359C68.1197 62.7886 68.4892 63.2568 68.9899 63.5394C69.4792 63.8161 70.0528 63.9045 70.6027 63.7879C71.1357 63.6744 71.6136 63.3813 71.9565 62.9577C72.2953 62.5414 72.4902 62.0265 72.5117 61.4902C72.5117 61.4664 72.5117 61.4453 72.4932 61.4426C72.4747 61.44 72.4694 61.4638 72.4668 61.4902C72.4558 61.7066 72.414 61.9203 72.3425 62.1248C72.2713 62.3272 72.1735 62.5193 72.0517 62.6959C71.928 62.8708 71.7832 63.0297 71.6207 63.1692C71.4526 63.3081 71.2689 63.427 71.0734 63.5235C70.7936 63.657 70.4888 63.7298 70.1789 63.737C69.8691 63.7443 69.5611 63.686 69.2754 63.5658C68.9859 63.4455 68.7261 63.2634 68.5143 63.0324C68.3024 62.8013 68.1434 62.5268 68.0486 62.2279C67.9513 61.9211 67.9215 61.5968 67.9612 61.2774C68.0009 60.9579 68.1092 60.6508 68.2786 60.3771C68.4412 60.1174 68.6579 59.8958 68.9138 59.7274C69.1698 59.5591 69.4591 59.4479 69.7619 59.4014C70.1702 59.3354 70.5888 59.3814 70.9729 59.5346C71.3571 59.6878 71.6925 59.9424 71.9433 60.2713C72.0662 60.4392 72.165 60.6234 72.2368 60.8186C72.3075 61.016 72.3546 61.221 72.3769 61.4294C72.3769 61.4294 72.3954 61.4347 72.3954 61.4268Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M72.0863 61.4262C72.0631 61.1574 71.9849 60.8962 71.8566 60.6588C71.7284 60.4214 71.5528 60.2129 71.3407 60.046C71.1275 59.8819 70.8837 59.7618 70.6236 59.6928C70.3635 59.6238 70.0922 59.6073 69.8257 59.6441C69.5585 59.6831 69.3025 59.7782 69.0747 59.9231C68.8468 60.068 68.6522 60.2595 68.5036 60.4849C68.3449 60.7244 68.2391 60.995 68.1935 61.2786C68.1479 61.5623 68.1635 61.8524 68.2392 62.1295C68.3057 62.369 68.4189 62.593 68.5723 62.7886C68.7256 62.9842 68.9162 63.1475 69.1329 63.2691C69.5597 63.5107 70.0606 63.586 70.5396 63.4807C71.0014 63.3786 71.4145 63.1221 71.7109 62.7535C72.0016 62.3911 72.17 61.9459 72.1921 61.4818C72.1921 61.4606 72.1921 61.4421 72.1709 61.4395C72.1498 61.4368 72.1471 61.458 72.1445 61.4791C72.12 61.8501 71.9971 62.2078 71.7885 62.5154C71.5798 62.8231 71.2929 63.0696 70.9573 63.2295C70.7162 63.347 70.4529 63.4118 70.1848 63.4195C69.9167 63.4273 69.6501 63.3778 69.4026 63.2744C69.152 63.1703 68.9274 63.0124 68.7446 62.8118C68.5618 62.6112 68.4254 62.3729 68.345 62.1137C68.2647 61.8495 68.2421 61.5712 68.2786 61.2975C68.3151 61.0238 68.4098 60.7612 68.5565 60.5273C68.6982 60.3068 68.8855 60.1194 69.1058 59.9775C69.3261 59.8357 69.5743 59.7427 69.8336 59.705C70.1798 59.6537 70.5333 59.6949 70.8584 59.8245C71.1834 59.954 71.4684 60.1673 71.6844 60.4426C71.7915 60.5862 71.8803 60.7425 71.9488 60.908C72.0092 61.0793 72.0509 61.2566 72.0731 61.4368C72.0731 61.4368 72.089 61.4315 72.0863 61.4262Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M71.7784 61.4337C71.7561 61.2103 71.6886 60.9939 71.58 60.7975C71.4713 60.6011 71.3238 60.4289 71.1464 60.2914C70.7895 60.0179 70.3395 59.8954 69.8931 59.9503C69.6695 59.9806 69.4548 60.0578 69.263 60.1767C69.0712 60.2956 68.9066 60.4536 68.78 60.6404C68.6441 60.8427 68.5528 61.0715 68.5122 61.3118C68.4717 61.5521 68.4827 61.7982 68.5447 62.0339C68.5988 62.2389 68.6939 62.4309 68.8244 62.5982C68.9548 62.7654 69.1178 62.9045 69.3035 63.0069C69.6683 63.2116 70.096 63.2738 70.5039 63.1814C70.8947 63.0915 71.2434 62.8715 71.4928 62.5574C71.7356 62.2491 71.877 61.8732 71.8973 61.4813C71.899 61.4736 71.8978 61.4655 71.8939 61.4587C71.89 61.4518 71.8837 61.4467 71.8762 61.4442C71.8762 61.4442 71.8524 61.4601 71.8524 61.4786C71.8278 61.7924 71.721 62.0942 71.5428 62.3537C71.3646 62.6132 71.1212 62.8211 70.8371 62.9566C70.6331 63.0592 70.4094 63.1166 70.1813 63.1248C69.9531 63.133 69.7259 63.0919 69.515 63.0042C69.3033 62.9156 69.1139 62.7812 68.9603 62.6107C68.8067 62.4402 68.6927 62.2378 68.6266 62.018C68.5619 61.7968 68.5454 61.5644 68.5783 61.3363C68.6111 61.1083 68.6925 60.8899 68.817 60.696C68.937 60.5133 69.0951 60.3588 69.2804 60.2429C69.4656 60.127 69.6738 60.0524 69.8905 60.0244C70.1774 59.9912 70.468 60.0256 70.7392 60.1249C71.0106 60.2292 71.2489 60.4046 71.4293 60.6325C71.5168 60.7511 71.5896 60.8799 71.6462 61.0159C71.6999 61.1566 71.7371 61.303 71.7572 61.4522C71.7572 61.4522 71.781 61.439 71.7784 61.4337Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M71.4686 61.4344C71.4444 61.2559 71.3853 61.0839 71.2945 60.9283C71.2038 60.7726 71.0832 60.6364 70.9398 60.5275C70.6526 60.317 70.2967 60.2226 69.943 60.2631C69.7628 60.2825 69.5887 60.3397 69.432 60.4308C69.2753 60.5219 69.1395 60.6449 69.0334 60.7919C68.9193 60.9554 68.8414 61.1414 68.8049 61.3375C68.7684 61.5336 68.7742 61.7352 68.8219 61.9288C68.8644 62.0991 68.9416 62.2588 69.0484 62.398C69.1553 62.5371 69.2897 62.6529 69.4432 62.7379C69.7452 62.9081 70.1006 62.9573 70.4374 62.8754C70.7595 62.7965 71.045 62.6099 71.2465 62.3466C71.4431 62.0932 71.5583 61.7863 71.577 61.4661C71.5778 61.4595 71.576 61.4528 71.5721 61.4474C71.5682 61.442 71.5624 61.4383 71.5558 61.437C71.5426 61.437 71.532 61.437 71.5294 61.4661C71.5056 61.7192 71.4176 61.9621 71.2737 62.1717C71.1298 62.3813 70.9347 62.5507 70.7071 62.6639C70.5427 62.7488 70.362 62.7973 70.1772 62.806C69.9923 62.8147 69.8078 62.7833 69.6363 62.7141C69.4627 62.6424 69.3077 62.5324 69.1827 62.3922C69.0577 62.2521 68.966 62.0856 68.9144 61.905C68.8624 61.7237 68.8506 61.5333 68.8798 61.3469C68.9091 61.1606 68.9786 60.9829 69.0836 60.8263C69.1814 60.6807 69.3096 60.558 69.4593 60.4668C69.609 60.3755 69.7767 60.3177 69.9509 60.2974C70.1774 60.2766 70.4057 60.3055 70.6198 60.3821C70.8342 60.4635 71.0237 60.5992 71.1698 60.776C71.2418 60.8688 71.3021 60.97 71.3496 61.0774C71.3924 61.1898 71.4252 61.3057 71.4474 61.4238C71.4474 61.4238 71.4686 61.437 71.4686 61.4344Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M80.0304 65.7539H33.3047V74.6908H80.0304V65.7539Z"
                      fill="#DBDBDB"
                    />
                    <path
                      d="M42.9104 65.7539L39.5181 74.6935H33.4844L36.8741 65.7539H42.9104Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M55.2764 65.7539L51.8867 74.6935H45.8477L49.24 65.7539H55.2764Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M67.6448 65.7539L64.2525 74.6935H58.2188L61.6084 65.7539H67.6448Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M80.0146 65.7539L76.6223 74.6935H70.5859L73.9783 65.7539H80.0146Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M79.0853 82.957H34.25V88.6127H79.0853V82.957Z"
                      fill="#DBDBDB"
                    />
                    <path
                      d="M43.4645 82.957L40.2124 88.6127H34.4219L37.6767 82.957H43.4645Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M55.3344 82.957L52.0822 88.6127H46.2891L49.5439 82.957H55.3344Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M67.2016 82.957L63.9467 88.6127H58.1562L61.4111 82.957H67.2016Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M79.0714 82.957L75.8166 88.6127H70.0234L73.2783 82.957H79.0714Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M58.0011 108.126C88.5003 108.126 113.225 106.06 113.225 103.512C113.225 100.964 88.5003 98.8984 58.0011 98.8984C27.5019 98.8984 2.77734 100.964 2.77734 103.512C2.77734 106.06 27.5019 108.126 58.0011 108.126Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M0 93.7767L14.5 93.7133L29 93.6895L58 93.6445L87 93.6895L101.5 93.7133L116 93.7767L101.5 93.8428L87 93.864L58 93.9089L29 93.864L14.5 93.8402L0 93.7767Z"
                      fill="#263238"
                    />
                    <path
                      d="M81.3359 17.5916C81.3354 19.2375 81.823 20.8465 82.737 22.2152C83.6509 23.5839 84.9503 24.6508 86.4707 25.281C87.9911 25.9112 89.6642 26.0763 91.2785 25.7556C92.8927 25.4348 94.3756 24.6425 95.5396 23.4789C96.7035 22.3154 97.4963 20.8327 97.8175 19.2186C98.1388 17.6044 97.9742 15.9312 97.3445 14.4106C96.7148 12.8901 95.6483 11.5904 94.2799 10.6759C92.9115 9.76151 91.3026 9.27344 89.6568 9.27344C87.4504 9.27344 85.3344 10.1497 83.774 11.7096C82.2136 13.2695 81.3366 15.3853 81.3359 17.5916ZM85.77 17.5916C85.7695 16.8228 85.997 16.0711 86.4238 15.4315C86.8505 14.792 87.4574 14.2934 88.1675 13.9989C88.8777 13.7043 89.6593 13.6269 90.4134 13.7766C91.1676 13.9263 91.8604 14.2962 92.4042 14.8397C92.948 15.3832 93.3185 16.0757 93.4687 16.8297C93.6189 17.5838 93.542 18.3654 93.2479 19.0758C92.9538 19.7861 92.4557 20.3933 91.8164 20.8205C91.1772 21.2477 90.4256 21.4758 89.6568 21.4758C89.1459 21.4768 88.6399 21.3771 88.1676 21.1824C87.6952 20.9877 87.266 20.7018 86.9042 20.3411C86.5425 19.9803 86.2554 19.5518 86.0595 19.0801C85.8635 18.6083 85.7624 18.1025 85.7621 17.5916H85.77Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M88.0586 9.61488H91.2553L91.0807 7.35156H88.2357L88.0586 9.61488Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M94.1445 10.6968L96.4078 12.9574L97.8832 11.2309L95.8711 9.21875L94.1445 10.6968Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M97.6914 15.7617V18.961L99.9547 18.7865V15.9389L97.6914 15.7617Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M96.6122 21.8477L94.3516 24.111L96.0755 25.5864L98.0876 23.5742L96.6122 21.8477Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M91.5431 25.3945H88.3438L88.5209 27.6578H91.3659L91.5431 25.3945Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M85.4548 24.3141L83.1941 22.0508L81.7188 23.7773L83.7309 25.7895L85.4548 24.3141Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M81.9117 19.2501V16.0508L79.6484 16.2279V19.0729L81.9117 19.2501Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M82.9871 13.1567L85.2478 10.896L83.5238 9.41797L81.5117 11.4301L82.9871 13.1567Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M91.5359 15.7148L88.9685 15.0273L87.0859 16.9073L87.7734 19.4694L90.3381 20.1568L92.2181 18.2795L91.5359 15.7148ZM89.6586 18.4329C89.4923 18.4329 89.3297 18.3836 89.1915 18.2912C89.0532 18.1988 88.9454 18.0675 88.8818 17.9138C88.8182 17.7602 88.8015 17.5911 88.834 17.428C88.8664 17.2649 88.9465 17.1151 89.0641 16.9975C89.1817 16.8799 89.3315 16.7999 89.4946 16.7674C89.6577 16.735 89.8267 16.7516 89.9804 16.8153C90.134 16.8789 90.2653 16.9867 90.3577 17.1249C90.4501 17.2632 90.4994 17.4258 90.4994 17.5921C90.4994 17.8151 90.4108 18.0289 90.2531 18.1866C90.0955 18.3443 89.8816 18.4329 89.6586 18.4329Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M62.2327 37.0505C62.2333 38.6867 62.719 40.2861 63.6285 41.6464C64.538 43.0066 65.8305 44.0666 67.3424 44.6923C68.8543 45.318 70.5179 45.4813 72.1226 45.1616C73.7274 44.8418 75.2013 44.0534 76.3579 42.896C77.5146 41.7386 78.3021 40.2642 78.6208 38.6592C78.9395 37.0543 78.7751 35.3909 78.1485 33.8793C77.5218 32.3678 76.461 31.076 75.1002 30.1674C73.7393 29.2587 72.1396 28.774 70.5033 28.7746C68.31 28.7781 66.2076 29.6513 64.6571 31.2027C63.1067 32.7541 62.2348 34.8571 62.2327 37.0505ZM63.9937 37.0505C63.9932 35.7616 64.3749 34.5015 65.0907 33.4297C65.8065 32.3578 66.8241 31.5224 68.0149 31.029C69.2056 30.5357 70.5159 30.4066 71.78 30.6581C73.0441 30.9096 74.2052 31.5304 75.1163 32.442C76.0275 33.3535 76.6479 34.5149 76.8989 35.7791C77.1499 37.0433 77.0202 38.3535 76.5264 39.544C76.0326 40.7345 75.1967 41.7518 74.1246 42.4672C73.0524 43.1825 71.7922 43.5638 70.5033 43.5628C68.7773 43.5614 67.1225 42.8745 65.9028 41.6533C64.6831 40.4321 63.9983 38.7765 63.999 37.0505H63.9937ZM62.2327 37.0505C62.2333 38.6867 62.719 40.2861 63.6285 41.6464C64.538 43.0066 65.8305 44.0666 67.3424 44.6923C68.8543 45.318 70.5179 45.4813 72.1226 45.1616C73.7274 44.8418 75.2013 44.0534 76.3579 42.896C77.5146 41.7386 78.3021 40.2642 78.6208 38.6592C78.9395 37.0543 78.7751 35.3909 78.1485 33.8793C77.5218 32.3678 76.461 31.076 75.1002 30.1674C73.7393 29.2587 72.1396 28.774 70.5033 28.7746C68.31 28.7781 66.2076 29.6513 64.6571 31.2027C63.1067 32.7541 62.2348 34.8571 62.2327 37.0505ZM63.9937 37.0505C63.9932 35.7616 64.3749 34.5015 65.0907 33.4297C65.8065 32.3578 66.8241 31.5224 68.0149 31.029C69.2056 30.5357 70.5159 30.4066 71.78 30.6581C73.0441 30.9096 74.2052 31.5304 75.1163 32.442C76.0275 33.3535 76.6479 34.5149 76.8989 35.7791C77.1499 37.0433 77.0202 38.3535 76.5264 39.544C76.0326 40.7345 75.1967 41.7518 74.1246 42.4672C73.0524 43.1825 71.7922 43.5638 70.5033 43.5628C68.7773 43.5614 67.1225 42.8745 65.9028 41.6533C64.6831 40.4321 63.9983 38.7765 63.999 37.0505H63.9937ZM56.5586 37.0505C56.5612 39.8083 57.3814 42.5035 58.9154 44.7953C60.4494 47.0872 62.6285 48.8728 65.1771 49.9265C67.7257 50.9802 70.5295 51.2547 73.2341 50.7152C75.9387 50.1758 78.4227 48.8466 80.372 46.8958C82.3214 44.945 83.6486 42.46 84.186 39.755C84.7234 37.05 84.4468 34.2464 83.3912 31.6986C82.3356 29.1508 80.5483 26.9731 78.2553 25.4408C75.9623 23.9085 73.2665 23.0904 70.5086 23.0898C68.676 23.0898 66.8614 23.4511 65.1685 24.1528C63.4756 24.8546 61.9377 25.8832 60.6426 27.1798C59.3475 28.4763 58.3207 30.0155 57.6208 31.7092C56.921 33.4028 56.5618 35.2179 56.5639 37.0505H56.5586ZM61.4395 37.0505C61.439 35.2564 61.9706 33.5025 62.967 32.0107C63.9635 30.5188 65.38 29.356 67.0374 28.6693C68.6949 27.9826 70.5187 27.803 72.2783 28.153C74.0378 28.5031 75.654 29.3672 76.9224 30.6359C78.1908 31.9047 79.0544 33.5211 79.4039 35.2808C79.7535 37.0404 79.5733 38.8642 78.8861 40.5215C78.199 42.1787 77.0357 43.5949 75.5436 44.5909C74.0514 45.5869 72.2974 46.118 70.5033 46.1169C68.1003 46.1127 65.7969 45.1561 64.098 43.4566C62.399 41.7572 61.443 39.4535 61.4395 37.0505ZM62.2327 37.0505C62.2333 38.6867 62.719 40.2861 63.6285 41.6464C64.538 43.0066 65.8305 44.0666 67.3424 44.6923C68.8543 45.318 70.5179 45.4813 72.1226 45.1616C73.7274 44.8418 75.2013 44.0534 76.3579 42.896C77.5146 41.7386 78.3021 40.2642 78.6208 38.6592C78.9395 37.0543 78.7751 35.3909 78.1485 33.8793C77.5218 32.3678 76.461 31.076 75.1002 30.1674C73.7393 29.2587 72.1396 28.774 70.5033 28.7746C68.31 28.7781 66.2076 29.6513 64.6571 31.2027C63.1067 32.7541 62.2348 34.8571 62.2327 37.0505ZM63.9937 37.0505C63.9932 35.7616 64.3749 34.5015 65.0907 33.4297C65.8065 32.3578 66.8241 31.5224 68.0149 31.029C69.2056 30.5357 70.5159 30.4066 71.78 30.6581C73.0441 30.9096 74.2052 31.5304 75.1163 32.442C76.0275 33.3535 76.6479 34.5149 76.8989 35.7791C77.1499 37.0433 77.0202 38.3535 76.5264 39.544C76.0326 40.7345 75.1967 41.7518 74.1246 42.4672C73.0524 43.1825 71.7922 43.5638 70.5033 43.5628C68.7773 43.5614 67.1225 42.8745 65.9028 41.6533C64.6831 40.4321 63.9983 38.7765 63.999 37.0505H63.9937Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M68.8711 23.3462H72.0651L71.7452 20.1602H69.1884L68.8711 23.3462Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M75.9414 24.3596L78.7071 25.9539L80.0238 23.0349L77.8108 21.7578L75.9414 24.3596Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M81.5508 28.7764L83.1478 31.5421L85.7495 29.6728L84.4725 27.457L81.5508 28.7764Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M84.207 35.4023V38.5964L87.3958 38.2764V35.7196L84.207 35.4023Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M83.1908 42.4688L81.5938 45.2344L84.5128 46.5512L85.7925 44.3381L83.1908 42.4688Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M78.7774 48.082L76.0117 49.679L77.8811 52.2808L80.0941 51.0037L78.7774 48.082Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M72.1471 50.7383H68.9531L69.2704 53.927H71.8299L72.1471 50.7383Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M65.0812 49.7181L62.3155 48.1211L60.9961 51.0401L63.2118 52.3199L65.0812 49.7181Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M59.4683 45.3087L57.8713 42.543L55.2695 44.4123L56.5493 46.6254L59.4683 45.3087Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M56.815 38.6784V35.4844L53.6289 35.8017V38.3585L56.815 38.6784Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M57.8322 31.6163L59.4292 28.8506L56.5075 27.5312L55.2305 29.747L57.8322 31.6163Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M62.2452 25.9995L65.0109 24.4025L63.1415 21.8008L60.9258 23.0805L62.2452 25.9995Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M25.413 15.0122C26.1606 15.0801 26.9114 14.9249 27.5708 14.5662C28.2301 14.2075 28.7684 13.6614 29.1175 12.9969C29.4666 12.3324 29.6109 11.5794 29.5323 10.8329C29.4536 10.0864 29.1554 9.38004 28.6755 8.80296C28.1955 8.22588 27.5552 7.80401 26.8356 7.59065C26.1159 7.37729 25.3492 7.38202 24.6322 7.60424C23.9153 7.82647 23.2803 8.25621 22.8075 8.83917C22.3346 9.42214 22.0452 10.1322 21.9757 10.8795C21.9292 11.3768 21.9812 11.8783 22.1289 12.3553C22.2766 12.8324 22.517 13.2756 22.8363 13.6595C23.1557 14.0435 23.5477 14.3606 23.9898 14.5927C24.432 14.8249 24.9156 14.9674 25.413 15.0122ZM22.4464 10.9245C22.5073 10.2683 22.7615 9.64489 23.1768 9.13317C23.5921 8.62145 24.1498 8.24439 24.7795 8.04971C25.4091 7.85502 26.0823 7.85145 26.714 8.03944C27.3456 8.22743 27.9073 8.59854 28.328 9.10583C28.7487 9.61311 29.0095 10.2338 29.0774 10.8893C29.1453 11.5448 29.0173 12.2058 28.7095 12.7885C28.4017 13.3713 27.9279 13.8496 27.3482 14.1631C26.7685 14.4765 26.1088 14.611 25.4527 14.5495C25.0172 14.509 24.594 14.3831 24.2072 14.179C23.8204 13.9749 23.4776 13.6966 23.1984 13.3599C22.9192 13.0233 22.7091 12.6349 22.5801 12.217C22.451 11.7992 22.4056 11.3599 22.4464 10.9245ZM25.413 15.0122C26.1606 15.0801 26.9114 14.9249 27.5708 14.5662C28.2301 14.2075 28.7684 13.6614 29.1175 12.9969C29.4666 12.3324 29.6109 11.5794 29.5323 10.8329C29.4536 10.0864 29.1554 9.38004 28.6755 8.80296C28.1955 8.22588 27.5552 7.80401 26.8356 7.59065C26.1159 7.37729 25.3492 7.38202 24.6322 7.60424C23.9153 7.82647 23.2803 8.25621 22.8075 8.83917C22.3346 9.42214 22.0452 10.1322 21.9757 10.8795C21.9292 11.3768 21.9812 11.8783 22.1289 12.3553C22.2766 12.8324 22.517 13.2756 22.8363 13.6595C23.1557 14.0435 23.5477 14.3606 23.9898 14.5927C24.432 14.8249 24.9156 14.9674 25.413 15.0122ZM22.4464 10.9245C22.5073 10.2683 22.7615 9.64489 23.1768 9.13317C23.5921 8.62145 24.1498 8.24439 24.7795 8.04971C25.4091 7.85502 26.0823 7.85145 26.714 8.03944C27.3456 8.22743 27.9073 8.59854 28.328 9.10583C28.7487 9.61311 29.0095 10.2338 29.0774 10.8893C29.1453 11.5448 29.0173 12.2058 28.7095 12.7885C28.4017 13.3713 27.9279 13.8496 27.3482 14.1631C26.7685 14.4765 26.1088 14.611 25.4527 14.5495C25.0172 14.509 24.594 14.3831 24.2072 14.179C23.8204 13.9749 23.4776 13.6966 23.1984 13.3599C22.9192 13.0233 22.7091 12.6349 22.5801 12.217C22.451 11.7992 22.4056 11.3599 22.4464 10.9245ZM25.413 15.0122C26.1606 15.0801 26.9114 14.9249 27.5708 14.5662C28.2301 14.2075 28.7684 13.6614 29.1175 12.9969C29.4666 12.3324 29.6109 11.5794 29.5323 10.8329C29.4536 10.0864 29.1554 9.38004 28.6755 8.80296C28.1955 8.22588 27.5552 7.80401 26.8356 7.59065C26.1159 7.37729 25.3492 7.38202 24.6322 7.60424C23.9153 7.82647 23.2803 8.25621 22.8075 8.83917C22.3346 9.42214 22.0452 10.1322 21.9757 10.8795C21.9292 11.3768 21.9812 11.8783 22.1289 12.3553C22.2766 12.8324 22.517 13.2756 22.8363 13.6595C23.1557 14.0435 23.5477 14.3606 23.9898 14.5927C24.432 14.8249 24.9156 14.9674 25.413 15.0122ZM22.4464 10.9245C22.5073 10.2683 22.7615 9.64489 23.1768 9.13317C23.5921 8.62145 24.1498 8.24439 24.7795 8.04971C25.4091 7.85502 26.0823 7.85145 26.714 8.03944C27.3456 8.22743 27.9073 8.59854 28.328 9.10583C28.7487 9.61311 29.0095 10.2338 29.0774 10.8893C29.1453 11.5448 29.0173 12.2058 28.7095 12.7885C28.4017 13.3713 27.9279 13.8496 27.3482 14.1631C26.7685 14.4765 26.1088 14.611 25.4527 14.5495C25.0172 14.509 24.594 14.3831 24.2072 14.179C23.8204 13.9749 23.4776 13.6966 23.1984 13.3599C22.9192 13.0233 22.7091 12.6349 22.5801 12.217C22.451 11.7992 22.4056 11.3599 22.4464 10.9245ZM25.0217 19.2004C26.5977 19.35 28.1826 19.0287 29.5759 18.2772C30.9692 17.5258 32.1083 16.3779 32.8489 14.9788C33.5896 13.5797 33.8986 11.9923 33.7368 10.4176C33.575 8.84283 32.9497 7.35146 31.9401 6.13221C30.9304 4.91296 29.5817 4.02064 28.0647 3.56816C26.5477 3.11569 24.9306 3.1234 23.4179 3.59032C21.9053 4.05724 20.5652 4.96238 19.5672 6.19121C18.5692 7.42003 17.9581 8.91729 17.8114 10.4935C17.6163 12.6036 18.2657 14.7049 19.6173 16.337C20.9688 17.969 22.9123 18.9987 25.0217 19.2004ZM21.3967 10.8267C21.4741 9.96207 21.8064 9.13989 22.3513 8.46421C22.8963 7.78853 23.6295 7.28973 24.4581 7.03097C25.2867 6.7722 26.1734 6.76509 27.0061 7.01055C27.8387 7.25601 28.5798 7.743 29.1355 8.40986C29.6912 9.07672 30.0366 9.89348 30.1279 10.7567C30.2191 11.62 30.0523 12.4909 29.6483 13.2592C29.2444 14.0276 28.6215 14.6588 27.8587 15.073C27.0958 15.4872 26.2272 15.6657 25.3628 15.586C24.2069 15.4779 23.1408 14.9166 22.3976 14.0248C21.6544 13.1329 21.2945 11.9831 21.3967 10.8267ZM21.9863 10.8795C21.9189 11.6266 22.0745 12.3769 22.4333 13.0356C22.7922 13.6943 23.3382 14.2318 24.0024 14.5803C24.6667 14.9288 25.4193 15.0726 26.1652 14.9935C26.9111 14.9144 27.6169 14.616 28.1933 14.136C28.7697 13.656 29.1909 13.0159 29.4036 12.2966C29.6164 11.5773 29.6111 10.8111 29.3886 10.0948C29.166 9.37843 28.7362 8.74414 28.1533 8.27203C27.5704 7.79992 26.8606 7.51117 26.1137 7.44228C25.617 7.39608 25.1161 7.44834 24.6397 7.59606C24.1633 7.74378 23.7207 7.98405 23.3373 8.30311C22.9539 8.62217 22.6372 9.01374 22.4054 9.4554C22.1735 9.89706 22.0311 10.3801 21.9863 10.8769V10.8795ZM22.4464 10.9245C22.5073 10.2683 22.7615 9.64489 23.1768 9.13317C23.5921 8.62145 24.1498 8.24439 24.7795 8.04971C25.4091 7.85502 26.0823 7.85145 26.714 8.03944C27.3456 8.22743 27.9073 8.59854 28.328 9.10583C28.7487 9.61311 29.0095 10.2338 29.0774 10.8893C29.1453 11.5448 29.0173 12.2058 28.7095 12.7885C28.4017 13.3713 27.9279 13.8496 27.3482 14.1631C26.7685 14.4765 26.1088 14.611 25.4527 14.5495C25.0172 14.509 24.594 14.3831 24.2072 14.179C23.8204 13.9749 23.4776 13.6966 23.1984 13.3599C22.9192 13.0233 22.7091 12.6349 22.5801 12.217C22.451 11.7992 22.4056 11.3599 22.4464 10.9245ZM25.413 15.0122C26.1606 15.0801 26.9114 14.9249 27.5708 14.5662C28.2301 14.2075 28.7684 13.6614 29.1175 12.9969C29.4666 12.3324 29.6109 11.5794 29.5323 10.8329C29.4536 10.0864 29.1554 9.38004 28.6755 8.80296C28.1955 8.22588 27.5552 7.80401 26.8356 7.59065C26.1159 7.37729 25.3492 7.38202 24.6322 7.60424C23.9153 7.82647 23.2803 8.25621 22.8075 8.83917C22.3346 9.42214 22.0452 10.1322 21.9757 10.8795C21.9292 11.3768 21.9812 11.8783 22.1289 12.3553C22.2766 12.8324 22.517 13.2756 22.8363 13.6595C23.1557 14.0435 23.5477 14.3606 23.9898 14.5927C24.432 14.8249 24.9156 14.9674 25.413 15.0122ZM22.4464 10.9245C22.5073 10.2683 22.7615 9.64489 23.1768 9.13317C23.5921 8.62145 24.1498 8.24439 24.7795 8.04971C25.4091 7.85502 26.0823 7.85145 26.714 8.03944C27.3456 8.22743 27.9073 8.59854 28.328 9.10583C28.7487 9.61311 29.0095 10.2338 29.0774 10.8893C29.1453 11.5448 29.0173 12.2058 28.7095 12.7885C28.4017 13.3713 27.9279 13.8496 27.3482 14.1631C26.7685 14.4765 26.1088 14.611 25.4527 14.5495C25.0172 14.509 24.594 14.3831 24.2072 14.179C23.8204 13.9749 23.4776 13.6966 23.1984 13.3599C22.9192 13.0233 22.7091 12.6349 22.5801 12.217C22.451 11.7992 22.4056 11.3599 22.4464 10.9245ZM25.413 15.0122C26.1606 15.0801 26.9114 14.9249 27.5708 14.5662C28.2301 14.2075 28.7684 13.6614 29.1175 12.9969C29.4666 12.3324 29.6109 11.5794 29.5323 10.8329C29.4536 10.0864 29.1554 9.38004 28.6755 8.80296C28.1955 8.22588 27.5552 7.80401 26.8356 7.59065C26.1159 7.37729 25.3492 7.38202 24.6322 7.60424C23.9153 7.82647 23.2803 8.25621 22.8075 8.83917C22.3346 9.42214 22.0452 10.1322 21.9757 10.8795C21.9292 11.3768 21.9812 11.8783 22.1289 12.3553C22.2766 12.8324 22.517 13.2756 22.8363 13.6595C23.1557 14.0435 23.5477 14.3606 23.9898 14.5927C24.432 14.8249 24.9156 14.9674 25.413 15.0122ZM22.4464 10.9245C22.5073 10.2683 22.7615 9.64489 23.1768 9.13317C23.5921 8.62145 24.1498 8.24439 24.7795 8.04971C25.4091 7.85502 26.0823 7.85145 26.714 8.03944C27.3456 8.22743 27.9073 8.59854 28.328 9.10583C28.7487 9.61311 29.0095 10.2338 29.0774 10.8893C29.1453 11.5448 29.0173 12.2058 28.7095 12.7885C28.4017 13.3713 27.9279 13.8496 27.3482 14.1631C26.7685 14.4765 26.1088 14.611 25.4527 14.5495C25.0172 14.509 24.594 14.3831 24.2072 14.179C23.8204 13.9749 23.4776 13.6966 23.1984 13.3599C22.9192 13.0233 22.7091 12.6349 22.5801 12.217C22.451 11.7992 22.4056 11.3599 22.4464 10.9245Z"
                      fill="#455A64"
                    />
                    <path
                      d="M24.9414 3.45569L28.0032 3.7386L28.0376 1.55461L25.3116 1.30078L24.9414 3.45569Z"
                      fill="#455A64"
                    />
                    <path
                      d="M30.6758 5.03074L32.6403 7.39718L34.2056 5.87684L32.4605 3.76953L30.6758 5.03074Z"
                      fill="#455A64"
                    />
                    <path
                      d="M33.6149 10.1992L33.332 13.2637L35.516 13.2954L35.7698 10.572L33.6149 10.1992Z"
                      fill="#455A64"
                    />
                    <path
                      d="M32.0422 15.9297L29.6758 17.8942L31.1961 19.4621L33.3034 17.7144L32.0422 15.9297Z"
                      fill="#455A64"
                    />
                    <path
                      d="M26.8774 18.8715L23.813 18.5859L23.7812 20.7699L26.5046 21.0238L26.8774 18.8715Z"
                      fill="#455A64"
                    />
                    <path
                      d="M21.1418 17.2988L19.1773 14.9297L17.6094 16.4527L19.3571 18.5573L21.1418 17.2988Z"
                      fill="#455A64"
                    />
                    <path
                      d="M18.1991 12.1274L18.4847 9.06562L16.3007 9.03125L16.0469 11.7573L18.1991 12.1274Z"
                      fill="#455A64"
                    />
                    <path
                      d="M19.7742 6.39574L22.1433 4.43121L20.6203 2.86328L18.5156 4.61364L19.7742 6.39574Z"
                      fill="#455A64"
                    />
                    <path
                      d="M35.3393 24.5923C35.2892 26.4926 35.8038 28.3651 36.8179 29.973C37.8321 31.5808 39.3002 32.8518 41.0367 33.6252C42.7732 34.3986 44.7001 34.6397 46.5736 34.318C48.4472 33.9963 50.1832 33.1262 51.5623 31.8178C52.9413 30.5094 53.9014 28.8215 54.3211 26.9674C54.7407 25.1134 54.6012 23.1765 53.9201 21.4018C53.2389 19.627 52.0468 18.0941 50.4945 16.9969C48.9421 15.8997 47.0993 15.2875 45.199 15.2377C42.651 15.1709 40.1809 16.1189 38.3319 17.8732C36.4829 19.6275 35.4064 22.0444 35.3393 24.5923ZM40.4608 24.7272C40.4831 23.8379 40.7688 22.9753 41.2817 22.2485C41.7946 21.5217 42.5115 20.9634 43.3419 20.6443C44.1722 20.3252 45.0786 20.2596 45.9462 20.4559C46.8138 20.6522 47.6037 21.1015 48.2158 21.747C48.8279 22.3925 49.2347 23.205 49.3848 24.0818C49.5348 24.9586 49.4213 25.8602 49.0587 26.6725C48.696 27.4848 48.1005 28.1712 47.3475 28.6448C46.5946 29.1184 45.718 29.358 44.8288 29.3331C43.6393 29.2999 42.5116 28.7964 41.6928 27.933C40.874 27.0696 40.4309 25.9167 40.4608 24.7272Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M43.3398 15.5902L47.0336 15.688L46.8987 13.0677L43.6122 12.9805L43.3398 15.5902Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M50.3398 17.0197L52.8834 19.7034L54.6417 17.7548L52.3784 15.3672L50.3398 17.0197Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M54.2788 22.9805L54.1836 26.6742L56.8039 26.5394L56.8885 23.2528L54.2788 22.9805Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M52.8451 29.9766L50.1641 32.5201L52.1127 34.2758L54.4977 32.0151L52.8451 29.9766Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M46.8852 33.9181L43.1914 33.8203L43.3263 36.4406L46.6128 36.5278L46.8852 33.9181Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M39.8878 32.4819L37.3442 29.8008L35.5859 31.7494L37.8492 34.1344L39.8878 32.4819Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M35.9495 26.5258L36.0474 22.832L33.4245 22.9669L33.3398 26.2534L35.9495 26.5258Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M37.383 19.5245L40.0641 16.981L38.1154 15.2227L35.7305 17.486L37.383 19.5245Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M47.4975 22.488L44.3484 21.5547L41.9688 23.818L42.7355 27.0094L45.8846 27.9454L48.2642 25.6847L47.4975 22.488ZM45.0861 25.7905C44.8803 25.7847 44.6808 25.718 44.5129 25.5989C44.3449 25.4798 44.216 25.3136 44.1425 25.1212C44.0689 24.9289 44.054 24.7191 44.0996 24.5184C44.1452 24.3176 44.2493 24.1348 44.3987 23.9931C44.5481 23.8515 44.7362 23.7573 44.9391 23.7224C45.142 23.6875 45.3507 23.7136 45.5389 23.7973C45.727 23.8809 45.8861 24.0185 45.9961 24.1925C46.1061 24.3666 46.1621 24.5693 46.1569 24.7751C46.1539 24.9123 46.1237 25.0475 46.0681 25.1729C46.0125 25.2983 45.9326 25.4115 45.833 25.5059C45.7335 25.6003 45.6162 25.674 45.488 25.7229C45.3598 25.7717 45.2232 25.7947 45.0861 25.7905Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M74.8789 100.911L76.3516 90.7812L76.7773 90.9743L77.4595 91.2836L80.4129 92.6189L83.057 93.814L84.7994 94.6072L87.4435 95.805L88.895 96.4607C89.1464 96.5966 89.35 96.8065 89.4783 97.0618C89.6066 97.3172 89.6535 97.6058 89.6125 97.8886C89.5716 98.1715 89.4448 98.4349 89.2494 98.6434C89.0539 98.8519 88.7992 98.9954 88.5196 99.0545L87.9062 99.1391L86.9411 99.2713L84.0644 99.6626L82.1686 99.927L79.2866 100.321L78.0835 100.485L74.8789 100.911Z"
                      fill="#F31D32"
                    />
                    <g style={{ mixBlendMode: "multiply" }} opacity="0.1">
                      <path
                        d="M76.8508 91.0664C76.706 91.448 76.5245 91.8146 76.3087 92.161C75.4098 93.5598 74.7593 96.4312 75.2511 99.7363C75.279 100.092 75.3519 100.443 75.4679 100.781L76.084 100.741C76.084 100.741 78.9554 94.4402 88.3418 96.1932L87.4534 95.7913L84.8094 94.5962L83.0669 93.803L80.4229 92.6079L76.8508 91.0664Z"
                        fill="black"
                      />
                    </g>
                    <path
                      d="M84.0742 99.6609L84.8066 94.6055L87.456 95.8032L86.951 99.2696L84.0742 99.6609Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M79.293 100.306L80.4114 92.6172L83.0607 93.8123L82.175 99.9121L79.293 100.306Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M49.0433 100.658H39.1836L39.3079 100.224L39.5088 99.5312L40.3708 96.5434L41.1455 93.8544L41.6531 92.0829L42.4279 89.3939L42.8509 87.9185C42.9457 87.6595 43.1177 87.4359 43.3438 87.2779C43.5698 87.1199 43.839 87.0352 44.1148 87.0352C44.3905 87.0352 44.6597 87.1199 44.8857 87.2779C45.1118 87.4359 45.2838 87.6595 45.3786 87.9185L45.5425 88.4896L45.807 89.3912L46.579 92.0802L47.0867 93.8517L47.8561 96.5434L48.1787 97.6698L49.0433 100.658Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M49.3934 103.218H36.4375L38.5025 98.1016H51.461L49.3934 103.218Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M46.5729 92.0718H41.6523L42.4271 89.3828H45.8009L46.5729 92.0718Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M47.8564 96.5289H40.3711L41.1458 93.8398H47.0844L47.8564 96.5289Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M39.0469 99.9805C39.8444 100.338 40.6839 100.594 41.5455 100.742C42.4 100.89 43.2669 100.956 44.134 100.938C44.565 100.909 45.0013 100.906 45.4296 100.84C45.6464 100.811 45.8632 100.797 46.0774 100.758C46.2916 100.718 46.5031 100.678 46.7199 100.641C46.8257 100.62 46.9341 100.604 47.0399 100.581L47.3571 100.501L47.9944 100.348C48.4174 100.234 48.8325 100.084 49.2635 99.9805C48.8643 100.168 48.4703 100.359 48.0525 100.509L47.4232 100.726L47.106 100.829C47.0002 100.861 46.8918 100.885 46.7834 100.914L46.1356 101.07C45.9188 101.117 45.6967 101.141 45.4746 101.178C45.0362 101.241 44.595 101.282 44.1525 101.3C43.2583 101.316 42.3656 101.22 41.4953 101.014C40.6224 100.823 39.7923 100.473 39.0469 99.9805Z"
                      fill="#263238"
                    />
                    <g style={{ mixBlendMode: "multiply" }} opacity="0.1">
                      <path
                        d="M39.3828 100.139C39.7664 100.225 40.1409 100.347 40.5013 100.504C41.9608 101.165 44.7846 101.387 47.8702 100.462C48.2046 100.386 48.528 100.268 48.8327 100.11L48.7084 99.5287C48.7084 99.5287 42.3045 97.6779 42.6747 88.4766L42.4103 89.3782L41.6382 92.0672L41.1305 93.8387L40.3611 96.5409L39.3828 100.139Z"
                        fill="black"
                      />
                    </g>
                    <path
                      d="M72.1953 100.888L74.1308 87.5781L79.0804 90.4654L77.145 103.776L72.1953 100.888Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M77.129 95.9739C76.8646 98.4356 75.9603 100.352 75.1406 100.26C74.321 100.167 73.8768 98.0998 74.1518 95.6408C74.4267 93.1818 75.3204 91.2622 76.1427 91.3548C76.965 91.4473 77.4066 93.515 77.129 95.9739Z"
                      fill="#263238"
                    />
                    <path
                      d="M80.5696 104.883C81.0271 105.034 94.1178 104.997 94.6175 104.68C94.8052 104.563 94.911 102.654 94.9745 100.346C94.9877 99.8491 94.9983 99.3361 95.0062 98.8099C95.0062 98.1912 95.0247 97.5646 95.0273 96.9591C95.0432 94.2251 95.0062 91.8164 95.0062 91.8164H86.4844V98.8126L86.5293 100.349C86.5293 100.349 81.5241 102.607 81.0138 103.014C80.5035 103.421 80.1122 104.738 80.5696 104.883Z"
                      fill="#D3766A"
                    />
                    <path
                      d="M80.569 104.885C81.0265 105.036 94.1172 104.999 94.6169 104.682C94.8046 104.565 94.9104 102.656 94.9739 100.348C94.9871 99.8509 94.9976 99.3379 95.0056 98.8118C95.0056 98.1931 95.0241 97.5664 95.0267 96.9609H86.4864V98.8118L86.5314 100.348C86.5314 100.348 81.5262 102.606 81.0159 103.013C80.5056 103.42 80.1116 104.74 80.569 104.885Z"
                      fill="white"
                    />
                    <path
                      d="M80.5298 104.902C80.8286 105 86.4049 105.021 90.4635 104.936C91.4022 104.918 92.2615 104.891 92.9542 104.86C93.9114 104.817 94.5406 104.765 94.6543 104.698C94.887 104.55 94.9954 101.75 95.0483 98.7969H86.4842L86.5292 100.341C86.5292 100.341 81.5055 102.61 80.9766 103.017C80.4478 103.424 80.0724 104.738 80.5298 104.902Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M80.7193 104.381C82.9244 104.32 91.8243 104.283 94.0162 104.381C94.0347 104.381 94.0347 104.394 94.0162 104.394C91.8296 104.502 82.9244 104.468 80.7193 104.394C80.6717 104.415 80.6717 104.381 80.7193 104.381Z"
                      fill="#263238"
                    />
                    <path
                      d="M86.2161 99.854C87.0833 99.6901 88.1462 99.8197 88.8125 100.436C88.839 100.46 88.8125 100.497 88.7755 100.486C87.9452 100.22 87.089 100.043 86.2214 99.9571C86.2108 99.9536 86.2016 99.9469 86.1949 99.9381C86.1881 99.9292 86.1842 99.9185 86.1837 99.9074C86.1831 99.8963 86.1859 99.8852 86.1917 99.8757C86.1974 99.8662 86.2059 99.8586 86.2161 99.854Z"
                      fill="#263238"
                    />
                    <path
                      d="M85.592 100.245C86.4593 100.081 87.5222 100.21 88.1858 100.829C88.2123 100.853 88.1858 100.887 88.1488 100.879C87.3188 100.612 86.4625 100.435 85.5947 100.35C85.5833 100.347 85.5734 100.34 85.5662 100.331C85.559 100.322 85.555 100.31 85.5547 100.298C85.5544 100.287 85.5579 100.275 85.5646 100.265C85.5713 100.256 85.5809 100.248 85.592 100.245Z"
                      fill="#263238"
                    />
                    <path
                      d="M84.9709 100.612C85.8382 100.448 86.9011 100.577 87.5674 101.194C87.5912 101.217 87.5674 101.254 87.5304 101.246C86.6995 100.979 85.8423 100.802 84.9736 100.718C84.9623 100.714 84.9523 100.707 84.9451 100.698C84.9379 100.689 84.9339 100.677 84.9336 100.666C84.9333 100.654 84.9368 100.642 84.9435 100.633C84.9502 100.623 84.9598 100.616 84.9709 100.612Z"
                      fill="#263238"
                    />
                    <path
                      d="M84.337 100.995C85.2069 100.831 86.2671 100.96 86.9334 101.579C86.9599 101.603 86.9334 101.637 86.8964 101.629C86.0664 101.362 85.2101 101.185 84.3423 101.1C84.3308 101.097 84.3207 101.091 84.3132 101.082C84.3058 101.073 84.3014 101.061 84.3009 101.049C84.3003 101.038 84.3034 101.026 84.3099 101.016C84.3164 101.006 84.3259 100.999 84.337 100.995Z"
                      fill="#263238"
                    />
                    <path
                      d="M97.8484 55.5014C97.8484 55.5014 95.5454 78.2799 95.4899 78.5628C95.4899 78.5998 95.4661 79.0388 95.445 79.7553C95.3207 83.6764 95.1118 99.7814 95.1118 99.7814H85.7148C85.7148 99.7814 86.2304 81.4211 86.5821 78.042C87.0316 73.7321 89.8581 55.4961 89.8581 55.4961L97.8484 55.5014Z"
                      fill="#263238"
                    />
                    <path
                      d="M94.3693 79.3765C94.6601 74.4409 95.0964 69.5168 95.6781 64.6041C96.0086 61.8358 96.4052 59.078 96.7991 56.3177C96.7991 56.2939 96.8414 56.2965 96.8362 56.3177C96.109 61.2277 95.5935 66.1773 95.1519 71.1244C94.7103 76.0714 94.3983 81.0105 94.1948 85.9628C94.0811 88.7681 93.9938 94.9341 93.9039 97.7421C93.9012 97.7537 93.8947 97.7642 93.8853 97.7717C93.876 97.7791 93.8643 97.7832 93.8523 97.7832C93.8404 97.7832 93.8287 97.7791 93.8194 97.7717C93.81 97.7642 93.8034 97.7537 93.8008 97.7421C93.933 92.7342 94.0758 84.3843 94.3693 79.3765Z"
                      fill="#455A64"
                    />
                    <path
                      d="M86.2086 98.2605C86.4626 98.2366 86.7177 98.226 86.9728 98.2288C87.2557 98.2288 87.5386 98.2155 87.8189 98.205C88.3635 98.1838 88.9082 98.1697 89.4529 98.1627C90.5511 98.1433 91.6483 98.1512 92.7447 98.1865L93.649 98.2182C93.9716 98.2182 94.2942 98.2579 94.6167 98.2579C94.6405 98.2579 94.6379 98.2869 94.6167 98.2869C94.0641 98.2869 93.5062 98.3345 92.9536 98.353C92.401 98.3715 91.8643 98.3821 91.3196 98.3901C90.225 98.4059 89.125 98.3901 88.0278 98.3557L87.1235 98.3319L86.6396 98.3107C86.4968 98.3107 86.3541 98.3107 86.2113 98.2975C86.2064 98.2979 86.2015 98.2962 86.1978 98.293C86.1941 98.2898 86.1918 98.2852 86.1915 98.2803C86.1911 98.2754 86.1927 98.2706 86.1959 98.2668C86.1992 98.2631 86.2037 98.2608 86.2086 98.2605Z"
                      fill="#455A64"
                    />
                    <path
                      d="M97.8466 55.5014C97.8466 55.5014 95.5436 78.2799 95.4881 78.5628C95.4881 78.5998 95.4643 79.0388 95.4432 79.7553L91.0117 55.4961L97.8466 55.5014Z"
                      fill="#455A64"
                    />
                    <path
                      d="M95.3349 104.944C95.8082 105.044 108.82 103.566 109.277 103.199C109.449 103.059 109.346 101.15 109.153 98.852C109.113 98.3549 107.037 90.3672 107.037 90.3672L98.2671 91.3032L100.76 99.7774C100.76 99.7774 96.0329 102.572 95.5728 103.032C95.1128 103.492 94.8642 104.843 95.3349 104.944Z"
                      fill="#D3766A"
                    />
                    <path
                      d="M109.28 103.202C108.82 103.569 95.8115 105.053 95.3383 104.947C94.865 104.841 95.1215 103.493 95.5815 103.035C96.0416 102.578 100.769 99.7804 100.769 99.7804L99.9548 97.0148L108.429 95.7773C108.802 97.2659 109.143 98.6647 109.156 98.8524C109.349 101.155 109.452 103.062 109.28 103.202Z"
                      fill="white"
                    />
                    <path
                      d="M95.298 104.967C95.6074 105.031 101.149 104.438 105.176 103.91C106.107 103.788 106.958 103.666 107.643 103.561C108.59 103.412 109.23 103.296 109.317 103.214C109.489 103.074 109.407 101.115 109.153 98.8541C109.083 98.3282 108.966 97.8097 108.804 97.3047L100.372 98.4416L100.761 99.7637C100.761 99.7637 96.0014 102.572 95.5413 103.034C95.0812 103.497 94.8274 104.864 95.298 104.967Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M95.4283 104.424C97.6149 104.12 106.462 103.102 108.649 102.973C108.667 102.973 108.667 102.973 108.649 102.986C106.488 103.335 97.6334 104.276 95.4283 104.459C95.386 104.477 95.3807 104.43 95.4283 104.424Z"
                      fill="#263238"
                    />
                    <path
                      d="M100.398 99.3186C101.241 99.0542 102.312 99.0727 103.042 99.6121C103.071 99.6332 103.042 99.6729 103.013 99.6676C102.158 99.4947 101.288 99.415 100.416 99.4297C100.403 99.4285 100.391 99.4231 100.382 99.4144C100.372 99.4056 100.366 99.394 100.364 99.3813C100.362 99.3686 100.364 99.3555 100.37 99.3442C100.376 99.3329 100.386 99.3239 100.398 99.3186Z"
                      fill="#263238"
                    />
                    <path
                      d="M99.816 99.7678C100.662 99.5034 101.73 99.5219 102.46 100.061C102.489 100.082 102.46 100.122 102.428 100.117C101.574 99.9441 100.703 99.8635 99.8318 99.8762C99.8187 99.876 99.806 99.8711 99.7962 99.8624C99.7863 99.8537 99.7798 99.8418 99.7779 99.8288C99.776 99.8157 99.7788 99.8025 99.7858 99.7913C99.7927 99.7802 99.8034 99.7718 99.816 99.7678Z"
                      fill="#263238"
                    />
                    <path
                      d="M99.2457 100.213C100.089 99.9487 101.16 99.9672 101.89 100.507C101.916 100.528 101.89 100.567 101.858 100.562C101.004 100.39 100.133 100.309 99.2615 100.322C99.2484 100.321 99.2357 100.316 99.2259 100.308C99.216 100.299 99.2095 100.287 99.2076 100.274C99.2057 100.261 99.2085 100.248 99.2155 100.237C99.2224 100.225 99.2331 100.217 99.2457 100.213Z"
                      fill="#263238"
                    />
                    <path
                      d="M98.6561 100.662C99.5022 100.398 100.57 100.416 101.3 100.956C101.329 100.977 101.3 101.017 101.271 101.011C100.416 100.838 99.5444 100.759 98.6719 100.773C98.6593 100.772 98.6475 100.766 98.6384 100.757C98.6294 100.748 98.6235 100.737 98.6217 100.724C98.6199 100.711 98.6223 100.698 98.6285 100.687C98.6347 100.676 98.6444 100.667 98.6561 100.662Z"
                      fill="#263238"
                    />
                    <path
                      d="M89.7461 55.3753C89.7461 55.3753 90.1559 57.8211 91.4885 59.4921C91.8058 59.8914 92.7841 60.2668 93.2891 60.6343C93.2891 60.6343 94.9655 78.5346 95.1929 81.1707C95.5075 84.7851 99.6877 99.6236 99.6877 99.6236L109.378 97.9631C109.378 97.9631 105.33 82.7942 104.497 79.312C104.307 78.5187 102.8 62.0119 102.847 61.6602C103.413 57.4509 101.404 54.8359 101.404 54.8359L89.7461 55.3753Z"
                      fill="#263238"
                    />
                    <path
                      d="M97.4673 55.7563C97.6575 56.4184 98.062 56.9987 98.6174 57.4062C99.2291 57.8414 99.9536 58.0902 100.704 58.1227C100.831 58.1227 100.841 58.3237 100.704 58.3237C99.17 58.3237 97.6233 57.3533 97.3985 55.7669C97.3959 55.7299 97.4567 55.7219 97.4673 55.7563Z"
                      fill="#455A64"
                    />
                    <path
                      d="M91.3142 59.4231C91.8709 59.646 92.4027 59.9269 92.9006 60.2612C93.4294 60.5864 93.9133 60.9698 94.4209 61.3188C94.4394 61.3188 94.4209 61.3638 94.4024 61.3506C93.8736 61.0439 93.3157 60.7795 92.7895 60.4622C92.262 60.1745 91.7619 59.8391 91.2957 59.4601C91.2613 59.4495 91.2798 59.4151 91.3142 59.4231Z"
                      fill="#455A64"
                    />
                    <path
                      d="M91.0895 56.231C91.1714 56.58 91.2745 56.929 91.3671 57.2886C91.4596 57.6482 91.5204 57.9496 91.6315 58.2722C91.7162 58.5854 91.8897 58.8673 92.1312 59.0839C92.2661 59.1976 92.4141 59.2981 92.5569 59.4039C92.6336 59.4594 92.7182 59.5123 92.7975 59.5678C92.7843 59.5228 92.7737 59.4753 92.7632 59.4277L92.6759 59.0284C92.6124 58.7323 92.5516 58.4361 92.4935 58.14C92.3771 57.5557 92.2661 56.966 92.118 56.3896C92.1169 56.3868 92.1165 56.3838 92.1168 56.3808C92.1171 56.3778 92.1182 56.3749 92.1199 56.3724C92.1216 56.3699 92.1238 56.3678 92.1265 56.3664C92.1292 56.365 92.1322 56.3643 92.1352 56.3643C92.1382 56.3643 92.1412 56.365 92.1439 56.3664C92.1465 56.3678 92.1488 56.3699 92.1505 56.3724C92.1522 56.3749 92.1533 56.3778 92.1536 56.3808C92.1539 56.3838 92.1535 56.3868 92.1524 56.3896C92.3269 56.9581 92.5146 57.5213 92.668 58.0977C92.742 58.3806 93.0302 59.7767 93.0461 59.8745C93.0619 59.9723 93.0725 60.0807 93.0804 60.1839C93.0989 60.2877 93.1042 60.3934 93.0963 60.4985C93.0941 60.503 93.0908 60.5067 93.0865 60.5094C93.0823 60.512 93.0775 60.5134 93.0725 60.5134C93.0675 60.5134 93.0627 60.512 93.0585 60.5094C93.0543 60.5067 93.0509 60.503 93.0487 60.4985C93.0023 60.4026 92.9677 60.3013 92.9456 60.1971C92.9165 60.0993 92.8874 59.9961 92.8663 59.8957C92.8663 59.8586 92.8504 59.8216 92.8451 59.7846C92.7023 59.7053 92.5675 59.6022 92.4326 59.5202C92.2978 59.4382 92.1418 59.3351 92.0043 59.2294C91.7553 59.0324 91.5711 58.7653 91.4755 58.4626C91.3744 58.1348 91.3036 57.7985 91.264 57.4578C91.2005 57.0612 91.1476 56.6646 91.0736 56.2654C91.0524 56.2178 91.0842 56.2072 91.0895 56.231Z"
                      fill="#455A64"
                    />
                    <path
                      d="M100.101 97.8012C100.336 97.7218 102.745 97.2089 103.274 97.0978C104.347 96.8731 108.047 96.2835 108.364 96.2227C108.388 96.2227 108.393 96.2464 108.364 96.2517C107.822 96.3522 106.222 96.7303 105.146 96.9709C104.07 97.2115 100.252 97.8302 100.109 97.8382C100.083 97.8408 100.077 97.8091 100.101 97.8012Z"
                      fill="#455A64"
                    />
                    <path
                      d="M104.934 87.523C104.251 84.8789 103.508 82.2349 103.032 79.5379C102.794 78.1842 102.66 76.8172 102.551 75.4476C102.443 74.0779 102.334 72.6977 102.229 71.3228C102.123 69.9479 102.012 68.5677 101.89 67.1981C101.769 65.8285 101.655 64.4139 101.644 63.0179C101.623 60.7519 102.036 58.2929 101.063 56.1592C100.95 55.9165 100.82 55.6823 100.674 55.4585C100.668 55.4499 100.658 55.4441 100.648 55.4421C100.637 55.4402 100.626 55.4422 100.617 55.4479C100.608 55.4536 100.602 55.4625 100.599 55.4728C100.596 55.4831 100.598 55.494 100.603 55.5034C101.8 57.5737 101.488 60.0697 101.443 62.3568C101.414 63.7106 101.507 65.0591 101.61 66.4075C101.713 67.756 101.824 69.1653 101.933 70.5428C102.041 71.9204 102.152 73.2979 102.26 74.6755C102.369 76.053 102.467 77.3883 102.654 78.7368C103.019 81.3993 103.749 84.0011 104.423 86.6002C105.119 89.2733 105.806 91.9544 106.578 94.6037C106.676 94.9369 106.768 95.27 106.861 95.6006C106.864 95.6056 106.868 95.6095 106.873 95.6117C106.878 95.614 106.884 95.6143 106.889 95.6128C106.894 95.6112 106.899 95.6078 106.902 95.6031C106.905 95.5985 106.907 95.5929 106.906 95.5873C106.278 92.8904 105.621 90.2023 104.934 87.523Z"
                      fill="#455A64"
                    />
                    <path
                      d="M91.3158 33.0218C92.0296 32.2524 93.2327 32.0885 94.3934 32.3397C95.5542 32.5909 96.9344 33.1831 97.0375 35.0419C97.1168 36.5517 96.6012 38.0112 96.5801 39.6954C96.5589 41.3797 98.4759 45.5124 95.258 47.4478C92.3628 49.1797 86.5829 47.4002 86.4666 43.6959C86.374 40.761 90.0598 38.1434 90.4644 36.9826C90.8689 35.8219 90.5225 33.8785 91.3158 33.0218Z"
                      fill="#263238"
                    />
                    <path
                      d="M90.7637 34.6719C90.7486 35.5243 90.5596 36.3646 90.2085 37.1414C90.1112 37.3402 89.9866 37.5244 89.8383 37.6887C89.6929 37.8553 89.5422 38.0113 89.3888 38.1673C89.0821 38.474 88.7781 38.7781 88.4925 39.0954C87.9117 39.7122 87.4268 40.4128 87.0541 41.1736C86.6968 41.9308 86.4928 42.7512 86.4539 43.5876C86.4253 43.1663 86.4457 42.743 86.5147 42.3264C86.5914 41.9069 86.7119 41.4965 86.8743 41.1022C87.2216 40.3078 87.7028 39.5789 88.2968 38.9473C88.5903 38.6247 88.9023 38.318 89.2117 38.014C89.5306 37.7371 89.8068 37.4145 90.0313 37.0568C90.2302 36.6905 90.3847 36.3017 90.4914 35.8987C90.609 35.4962 90.6999 35.0863 90.7637 34.6719Z"
                      fill="#263238"
                    />
                    <path
                      d="M96.9296 36.3086C96.8926 37.1626 96.8212 38.0167 96.8318 38.8654C96.8338 39.2891 96.8638 39.7122 96.9217 40.1319C96.9798 40.547 97.1015 40.9621 97.2019 41.3799C97.3024 41.7977 97.3923 42.226 97.4663 42.6543C97.5293 43.084 97.5515 43.5187 97.5324 43.9526C97.508 44.3873 97.4189 44.8159 97.268 45.2243C97.0894 45.626 96.8291 45.9862 96.5039 46.282C96.7904 45.9597 97.0105 45.5842 97.1517 45.1768C97.2773 44.7752 97.3432 44.3574 97.3474 43.9367C97.3263 43.0866 97.202 42.2423 96.9772 41.4222C96.882 41.0018 96.7604 40.5867 96.7128 40.1478C96.6627 39.7187 96.6468 39.2864 96.6652 38.8548C96.6978 38.0012 96.7861 37.1507 96.9296 36.3086Z"
                      fill="#263238"
                    />
                    <path
                      d="M94.224 41.9567C93.875 43.3845 89.7291 56.7634 88.9095 56.9432C86.4928 57.4879 83.5896 57.8871 83.6214 55.9041C83.6875 52.792 89.5361 44.6034 92.3467 41.8906C94.1844 40.0873 94.5545 40.5474 94.224 41.9567Z"
                      fill="#D3766A"
                    />
                    <path
                      d="M88.6719 45.6652L92.9764 46.691C92.9764 46.691 94.2112 42.5161 94.4121 41.4373C94.6131 40.3585 93.767 40.3797 92.4661 41.6462C91.1652 42.9127 88.6719 45.6652 88.6719 45.6652Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M89.342 45.1758C89.3129 45.1758 89.2997 45.1758 89.3288 45.1969C90.5834 45.5303 91.8577 45.7846 93.1442 45.9584C93.1442 45.9584 93.1442 45.9584 93.1442 45.9426C92.5387 45.739 89.6699 45.2525 89.342 45.1758Z"
                      fill="#263238"
                    />
                    <path
                      d="M90.1135 50.7448L89.3203 57.3549C89.3203 57.3549 100.034 57.2597 102.689 57.0086C102.689 57.0086 100.23 44.7745 97.2974 41.7365C95.83 40.2188 94.1537 40.3748 93.1092 41.4853C92.8448 41.7656 89.7169 46.1124 89.4076 47.7517C89.1458 49.1848 90.1135 50.7448 90.1135 50.7448Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M89.3125 57.3409L90.1057 50.7466C90.1057 50.7466 89.138 49.1866 89.3998 47.7403C89.7012 46.101 92.837 41.7542 93.1014 41.4739C93.1985 41.3689 93.3037 41.2716 93.4161 41.1831L92.0465 45.1307L96.1157 40.8711C96.5639 41.0679 96.9636 41.3602 97.287 41.7278C100.222 44.7631 102.683 56.9972 102.683 56.9972C100.039 57.2484 89.3125 57.3409 89.3125 57.3409Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M101.863 53.4297L89.7422 53.8025L89.8691 52.7449L101.601 52.3906C101.693 52.7502 101.781 53.0966 101.863 53.4297Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M102.3 55.2553L89.5156 55.6493L89.6452 54.5917L102.054 54.2109C102.154 54.5943 102.228 54.9433 102.3 55.2553Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M95.569 41.2839C95.5055 41.4901 94.4109 42.7857 93.4538 42.6773C93.1418 42.6403 93.2634 40.9296 93.2634 40.9296L93.2449 40.8L92.9805 39.0047L95.1486 37.8122L95.4606 37.6562C95.4606 37.6562 95.5029 38.1533 95.5505 38.772C95.5505 38.7985 95.5505 38.8276 95.5505 38.8593C95.5505 38.8937 95.5505 38.928 95.5505 38.9598C95.5505 39.0523 95.569 39.1475 95.5743 39.24C95.5796 39.3326 95.5743 39.3828 95.5875 39.4569C95.6007 39.5309 95.5875 39.6049 95.5875 39.6816C95.6183 40.2155 95.6121 40.7509 95.569 41.2839Z"
                      fill="#D3766A"
                    />
                    <path
                      d="M95.5438 38.7759C95.3318 39.2606 95.0167 39.6931 94.6203 40.0434C94.2239 40.3937 93.7558 40.6532 93.2488 40.8039L92.9844 39.0086L95.1525 37.8162L95.4645 37.6602C95.4645 37.6602 95.4909 38.1572 95.5438 38.7759Z"
                      fill="#263238"
                    />
                    <path
                      d="M90.4444 35.9979C89.8547 39.1337 91.6659 39.8397 92.3428 39.9639C92.9562 40.0776 95.0609 40.3896 95.9704 37.3199C96.88 34.2501 95.6082 32.9969 94.2174 32.6611C92.8267 32.3253 91.0313 32.8673 90.4444 35.9979Z"
                      fill="#D3766A"
                    />
                    <path
                      d="M91.2772 35.2188C91.3499 35.2284 91.4232 35.2328 91.4966 35.232C91.5738 35.2471 91.6539 35.236 91.724 35.2002C91.7437 35.1853 91.758 35.1642 91.7647 35.1404C91.7714 35.1165 91.7701 35.0911 91.761 35.068C91.735 35.0252 91.698 34.99 91.6539 34.9663C91.6097 34.9426 91.5599 34.9311 91.5098 34.9332C91.4078 34.9195 91.3044 34.9461 91.2216 35.0072C91.2033 35.0215 91.1895 35.0409 91.1821 35.063C91.1746 35.085 91.1738 35.1088 91.1797 35.1313C91.1856 35.1538 91.198 35.1741 91.2153 35.1896C91.2326 35.2052 91.2541 35.2153 91.2772 35.2188Z"
                      fill="#263238"
                    />
                    <path
                      d="M93.4311 35.6761C93.3597 35.655 93.2962 35.6232 93.2275 35.5968C93.1515 35.5786 93.0836 35.5359 93.0344 35.4752C93.0218 35.4533 93.017 35.4277 93.0208 35.4027C93.0247 35.3777 93.0369 35.3548 93.0556 35.3377C93.0972 35.3095 93.1457 35.2929 93.1959 35.2897C93.2461 35.2864 93.2962 35.2966 93.3412 35.3192C93.438 35.3504 93.52 35.4163 93.5712 35.5043C93.5816 35.5252 93.5858 35.5487 93.5833 35.572C93.5807 35.5953 93.5714 35.6173 93.5566 35.6354C93.5418 35.6536 93.5221 35.6671 93.4998 35.6743C93.4776 35.6815 93.4537 35.6821 93.4311 35.6761Z"
                      fill="#263238"
                    />
                    <path
                      d="M92.8116 36.4023C92.8116 36.4023 92.8274 36.4156 92.8116 36.4235C92.764 36.635 92.7455 36.8862 92.9253 36.9946C92.7058 36.9285 92.7322 36.5954 92.8116 36.4023Z"
                      fill="#263238"
                    />
                    <path
                      d="M93.043 36.212C93.3921 36.2517 93.2889 36.9444 92.9664 36.91C92.6438 36.8756 92.7522 36.1803 93.043 36.212Z"
                      fill="#263238"
                    />
                    <path
                      d="M93.1675 36.2578C93.2204 36.3054 93.2707 36.3847 93.3421 36.4032C93.4134 36.4217 93.5007 36.3609 93.5668 36.3001C93.5483 36.435 93.4769 36.5645 93.3315 36.5645C93.1861 36.5645 93.1226 36.4297 93.1094 36.3001C93.1279 36.2816 93.1675 36.2578 93.1675 36.2578Z"
                      fill="#263238"
                    />
                    <path
                      d="M91.5776 36.1641C91.5776 36.1641 91.5591 36.1641 91.5591 36.1826C91.5353 36.3967 91.4719 36.64 91.2656 36.6849V36.6982C91.5062 36.6982 91.5776 36.3729 91.5776 36.1641Z"
                      fill="#263238"
                    />
                    <path
                      d="M91.4197 35.9118C91.0759 35.8378 90.9517 36.5279 91.2689 36.5966C91.5862 36.6654 91.7052 35.9753 91.4197 35.9118Z"
                      fill="#263238"
                    />
                    <path
                      d="M91.2636 35.9338C91.2027 35.9602 91.1366 36.0184 91.0705 36.0104C91.0044 36.0025 90.9516 35.9179 90.9172 35.8359C90.9172 35.8359 90.9172 35.8359 90.904 35.8359C90.8775 35.9681 90.904 36.1003 91.0177 36.1612C91.1314 36.222 91.2345 36.1083 91.2821 35.9814C91.3138 35.9655 91.2874 35.9232 91.2636 35.9338Z"
                      fill="#263238"
                    />
                    <path
                      d="M92.5484 38.145C92.4982 38.1979 92.448 38.2693 92.3713 38.2798C92.2906 38.281 92.2105 38.2657 92.136 38.2349C92.1201 38.2349 92.136 38.2349 92.136 38.2349C92.1683 38.2767 92.2116 38.3088 92.2611 38.3275C92.3106 38.3462 92.3643 38.3507 92.4162 38.3407C92.4602 38.3277 92.4993 38.3019 92.5285 38.2666C92.5577 38.2312 92.5757 38.188 92.5802 38.1424C92.5802 38.1424 92.5564 38.1371 92.5484 38.145Z"
                      fill="#263238"
                    />
                    <path
                      d="M91.71 37.1909C91.71 37.1909 91.6148 37.5029 91.5883 37.6562C91.5883 37.6695 91.6227 37.6827 91.673 37.6933C91.7986 37.738 91.9341 37.7474 92.0646 37.7204C92.1952 37.6933 92.3158 37.6309 92.4133 37.5399C92.4265 37.5267 92.4133 37.5082 92.3948 37.5135C92.1813 37.6139 91.9411 37.6426 91.71 37.5954C91.71 37.5531 91.8924 37.0666 91.8686 37.0666C91.7491 37.0594 91.6292 37.0674 91.5117 37.0904C91.6941 36.432 91.9797 35.808 92.1489 35.1497C92.1489 35.1285 92.1224 35.1153 92.1119 35.1338C91.7848 35.7925 91.5252 36.4826 91.3372 37.1935C91.3134 37.2702 91.6439 37.2068 91.71 37.1909Z"
                      fill="#263238"
                    />
                    <path
                      d="M91.6992 37.6714C91.7695 37.8071 91.8733 37.9227 92.0006 38.0072C92.0711 38.0507 92.1534 38.071 92.236 38.0654C92.4184 38.0521 92.4528 37.8935 92.4448 37.7533C92.4405 37.678 92.4272 37.6034 92.4052 37.5312C92.1905 37.6511 91.9434 37.7001 91.6992 37.6714Z"
                      fill="#263238"
                    />
                    <path
                      d="M92.0039 38.0085C92.0744 38.0519 92.1566 38.0723 92.2392 38.0666C92.4217 38.0534 92.456 37.8948 92.4481 37.7546C92.3563 37.7408 92.2625 37.7583 92.1819 37.8043C92.1013 37.8504 92.0386 37.9223 92.0039 38.0085Z"
                      fill="#FF9BBC"
                    />
                    <path
                      d="M95.4272 37.483C95.4272 37.483 96.2204 36.5629 96.6435 36.8537C97.0665 37.1446 96.4055 38.53 95.8503 38.6728C95.7815 38.6976 95.7083 38.7079 95.6353 38.703C95.5623 38.6982 95.4912 38.6782 95.4263 38.6444C95.3615 38.6106 95.3043 38.5637 95.2585 38.5067C95.2127 38.4497 95.1792 38.3838 95.1602 38.3132L95.4272 37.483Z"
                      fill="#D3766A"
                    />
                    <path
                      d="M96.4461 37.2422C96.4461 37.2422 96.4461 37.2554 96.4461 37.2581C96.2669 37.3251 96.1038 37.4288 95.9671 37.5627C95.8305 37.6966 95.7235 37.8576 95.6529 38.0354C95.6784 38.0009 95.7111 37.9722 95.7486 37.9513C95.7862 37.9305 95.8277 37.9178 95.8705 37.9143C95.9134 37.9108 95.9564 37.9165 95.9969 37.931C96.0373 37.9455 96.0742 37.9685 96.105 37.9984C96.105 37.9984 96.105 38.0222 96.0918 38.0195C96.0294 37.992 95.9599 37.9845 95.8931 37.9983C95.8263 38.012 95.7654 38.0462 95.719 38.0962C95.6412 38.1811 95.573 38.2742 95.5154 38.3739C95.4942 38.4056 95.4361 38.3739 95.4519 38.3448C95.5022 37.8635 95.9331 37.2396 96.4461 37.2422Z"
                      fill="#263238"
                    />
                    <path
                      d="M95.8481 37.2187C95.5097 37.1473 94.7561 36.0818 94.9623 34.4266C94.9623 34.4266 94.8777 35.9258 94.9623 36.1585C95.047 36.3911 94.5393 35.5583 94.6979 34.223C94.2356 34.4627 93.7415 34.6354 93.2305 34.736C92.5774 34.8206 92.194 34.7597 92.157 34.7095C92.12 34.6593 93.0824 34.498 93.3759 34.2468C93.3759 34.2468 91.5938 34.7756 90.8138 34.7333C90.7239 34.7333 90.8799 32.8825 92.1808 32.2717C93.4817 31.6609 95.2506 32.7741 95.6868 33.3293C95.6868 33.3293 96.2712 33.5012 96.792 34.4742C97.3129 35.4472 96.213 37.2928 95.8481 37.2187Z"
                      fill="#263238"
                    />
                    <path
                      d="M90.7656 33.9036C90.7656 33.9036 91.9211 30.4848 94.9776 31.4895C98.0341 32.4943 96.9342 35.9342 96.9342 35.9342L90.7656 33.9036Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M97.2532 35.7665L90.625 33.5859L90.4655 34.0707L97.0937 36.2512L97.2532 35.7665Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M93.8815 34.6627L92.5039 34.208L93.9343 30.9531L95.3145 31.4079L93.8815 34.6627Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.1"
                      d="M93.8815 34.6627L92.5039 34.208L93.9343 30.9531L95.3145 31.4079L93.8815 34.6627Z"
                      fill="black"
                    />
                    <path
                      d="M83.3603 40.5727L85.8926 39.5352C86.3747 39.3376 86.9156 39.3397 87.3962 39.5409C87.8768 39.7422 88.2578 40.1261 88.4553 40.6082L95.0404 56.6803L88.8846 59.2024L82.2985 43.1279C82.1026 42.6481 82.1043 42.1103 82.3032 41.6316C82.5021 41.153 82.8821 40.7724 83.3603 40.5727Z"
                      fill="#455A64"
                    />
                    <path
                      d="M94.0358 57.0859L89.8789 58.7891L90.5546 60.4381L94.7114 58.7349L94.0358 57.0859Z"
                      fill="#455A64"
                    />
                    <path
                      d="M93.2953 59.323L91.9766 59.8633L99.2483 77.6113L100.567 77.071L93.2953 59.323Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M101.871 78.3655C101.871 78.3655 102.18 81.4274 102.093 81.4617L101.654 81.6415L101.218 81.8213C101.131 81.8557 99.2031 79.4575 99.2031 79.4575L99.2481 77.6226L100.57 77.0938L101.871 78.3655Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M84.1586 42.9535L83.082 43.3945L88.7469 57.2206L89.8234 56.7795L84.1586 42.9535Z"
                      fill="#263238"
                    />
                    <path
                      d="M86.1586 42.137L85.082 42.5781L90.7469 56.4042L91.8234 55.9631L86.1586 42.137Z"
                      fill="#263238"
                    />
                    <path
                      d="M88.1547 41.3206L87.0781 41.7617L92.743 55.5878L93.8195 55.1467L88.1547 41.3206Z"
                      fill="#263238"
                    />
                    <path
                      d="M92.6722 49.4072C92.7879 49.527 92.8646 49.6791 92.8919 49.8434C92.9193 50.0077 92.8962 50.1765 92.8255 50.3273C93.1021 50.3835 93.3501 50.5351 93.5262 50.7557C93.8197 51.1602 93.3147 51.7974 93.3147 51.7974C93.5899 51.9164 93.823 52.1154 93.9836 52.3685C94.2242 52.7837 93.8038 53.4976 93.8038 53.4976C93.9941 53.7471 94.088 54.0569 94.0682 54.3701C93.9863 55.2083 92.8387 55.782 92.1116 56.1522C91.3845 56.5224 88.9731 56.8978 88.521 57.0168L86.0938 52.3712C86.0938 52.3712 88.8806 49.7774 89.7954 49.4627C90.5781 49.1957 92.2095 48.9683 92.6722 49.4072Z"
                      fill="#D3766A"
                    />
                    <path
                      d="M86.4312 52.0703C85.5984 52.7075 83.105 55.1691 83.6893 56.4224C84.2737 57.6757 86.2832 57.5461 89.0674 56.9063L86.4312 52.0703Z"
                      fill="#D3766A"
                    />
                    <path
                      d="M92.7536 50.2734C91.8651 50.358 91.0481 50.7018 90.2153 51.0006C90.1967 51.0006 90.2153 51.0349 90.2153 51.0296C91.0402 50.7229 91.9154 50.5854 92.7509 50.3131C92.7551 50.3119 92.7588 50.3094 92.7615 50.306C92.7642 50.3027 92.7658 50.2985 92.7661 50.2942C92.7664 50.2899 92.7654 50.2856 92.7631 50.2818C92.7609 50.2781 92.7575 50.2752 92.7536 50.2734Z"
                      fill="#263238"
                    />
                    <path
                      d="M93.2663 51.7465C93.0663 51.7844 92.8724 51.8493 92.6899 51.9395C92.4889 52.0215 92.2933 52.1088 92.095 52.204C91.7036 52.3837 91.3017 52.5715 90.9289 52.7698C90.9131 52.7698 90.9289 52.8068 90.9289 52.7989C91.3229 52.6217 91.7221 52.4498 92.1161 52.2886L92.7189 52.0532C92.9129 51.9919 93.0999 51.9104 93.2768 51.81C93.2853 51.8086 93.2928 51.8039 93.2977 51.797C93.3027 51.79 93.3047 51.7814 93.3033 51.773C93.3019 51.7646 93.2972 51.757 93.2903 51.7521C93.2833 51.7471 93.2747 51.7451 93.2663 51.7465Z"
                      fill="#263238"
                    />
                    <path
                      d="M93.7875 53.5078C93.6075 53.546 93.435 53.6139 93.2772 53.7088L92.7484 53.9732C92.3915 54.1371 92.0345 54.3037 91.6723 54.457C91.6538 54.457 91.6723 54.494 91.6723 54.4861C92.0425 54.3328 92.4126 54.182 92.7801 54.026L93.309 53.7907C93.4813 53.7316 93.6416 53.642 93.7822 53.5263C93.7822 53.5263 93.7955 53.5078 93.7875 53.5078Z"
                      fill="#263238"
                    />
                    <path
                      d="M86.3212 52.1227C86.029 52.3373 85.7525 52.5723 85.4936 52.826L85.2979 53.027L85.2133 53.0825C85.097 53.1592 84.9806 53.2411 84.8696 53.3284C84.6574 53.5018 84.4561 53.6882 84.2667 53.8863C84.2535 53.9022 84.2667 53.9233 84.2879 53.9074C84.489 53.7159 84.7038 53.5392 84.9304 53.3786L85.0203 53.3178C84.9119 53.4394 84.8061 53.5611 84.7083 53.6906C84.4444 54.0279 84.2016 54.3811 83.9812 54.7483C83.9801 54.7517 83.9802 54.7553 83.9815 54.7586C83.9828 54.762 83.9851 54.7648 83.9882 54.7666C83.9912 54.7684 83.9948 54.7692 83.9983 54.7687C84.0019 54.7683 84.0051 54.7667 84.0076 54.7641C84.4122 54.1137 86.181 52.3712 86.3741 52.1624C86.5671 51.9535 86.4666 51.9932 86.3212 52.1227Z"
                      fill="#263238"
                    />
                    <path
                      d="M97.7963 41.8563C100.805 44.622 103.37 49.9841 103.375 51.3035C103.375 52.9719 100.67 60.9834 99.3087 62.4085C98.7799 62.9558 94.1263 59.0902 94.6921 58.5085C95.6546 57.5223 98.3383 51.1052 98.3621 50.6478C98.3806 50.3649 97.0057 45.9784 96.1014 43.5511C94.8561 40.2223 96.8841 41.0155 97.7963 41.8563Z"
                      fill="#D3766A"
                    />
                    <path
                      d="M89.7736 65.295C90.04 65.4931 90.3676 65.5913 90.699 65.5726C90.6942 65.8992 90.8037 66.2171 91.0084 66.4716C91.3891 66.9026 92.2299 66.4927 92.2299 66.4927C92.2952 66.8324 92.461 67.1447 92.7059 67.3891C93.1131 67.7645 94.0279 67.471 94.0279 67.471C94.2588 67.7508 94.5825 67.9385 94.9401 67.9999C95.9025 68.1188 96.8385 66.966 97.4387 66.2416C98.0389 65.5171 99.0675 62.8942 99.3134 62.4156L94.6968 58.5156C94.6968 58.5156 91.0771 61.0037 90.4928 61.9529C89.9931 62.7567 89.1549 64.819 89.7736 65.295Z"
                      fill="#D3766A"
                    />
                    <path
                      d="M90.6893 65.5478C91.0475 64.5775 91.5235 63.6549 92.1065 62.8006C92.1198 62.7821 92.1488 62.8006 92.1356 62.8191C91.5857 63.6732 91.2499 64.6938 90.7343 65.5663C90.7318 65.5723 90.7271 65.577 90.7212 65.5795C90.7152 65.582 90.7085 65.582 90.7026 65.5795C90.6966 65.5771 90.6918 65.5724 90.6894 65.5664C90.6869 65.5605 90.6869 65.5538 90.6893 65.5478Z"
                      fill="#263238"
                    />
                    <path
                      d="M92.1843 66.4213C92.2786 66.205 92.4013 66.0023 92.5492 65.8184C92.6919 65.6148 92.8374 65.4139 92.9881 65.2156C93.286 64.8172 93.5953 64.4259 93.9161 64.0416C93.9294 64.0257 93.9585 64.0416 93.9452 64.0628C93.6473 64.4594 93.3574 64.8621 93.0753 65.2711C92.9326 65.4773 92.7951 65.6836 92.6576 65.8898C92.541 66.0943 92.4017 66.285 92.2425 66.4583C92.2364 66.4627 92.2293 66.4651 92.2218 66.4654C92.2144 66.4656 92.207 66.4636 92.2007 66.4596C92.1945 66.4556 92.1895 66.4498 92.1866 66.443C92.1837 66.4361 92.1829 66.4286 92.1843 66.4213Z"
                      fill="#263238"
                    />
                    <path
                      d="M94.0312 67.4619C94.1187 67.2663 94.2395 67.0874 94.3882 66.9331L94.806 66.4043C95.0704 66.0447 95.3586 65.6825 95.623 65.3123C95.6362 65.2938 95.6653 65.3123 95.6521 65.3334C95.3877 65.7089 95.1232 66.0896 94.8588 66.4651C94.7266 66.6502 94.5944 66.8326 94.4569 67.0151C94.3514 67.1934 94.2143 67.351 94.0524 67.4804L94.0312 67.4619Z"
                      fill="#263238"
                    />
                    <path
                      d="M97.3204 47.42L101.551 45.5374C101.551 45.5374 99.2452 42.5787 97.4605 41.5237C95.6758 40.4688 95.4352 41.4497 95.7948 42.9277C96.1543 44.4058 97.3204 47.42 97.3204 47.42Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M97.3294 46.5709C97.303 46.5842 97.3003 46.608 97.3294 46.5974C98.5435 46.1415 99.7285 45.6117 100.878 45.011C100.878 44.9951 100.878 45.011 100.878 45.011C100.259 45.1696 97.6388 46.4361 97.3294 46.5709Z"
                      fill="#263238"
                    />
                    <path
                      d="M96.1019 44.0717C96.4774 45.206 96.8951 46.3853 97.305 47.4825C97.305 47.5011 97.4795 47.39 97.5509 47.3503C97.5773 47.3345 97.5509 47.3107 97.5244 47.3239C97.4726 47.347 97.4186 47.3648 97.3631 47.3768C96.9586 46.2689 96.554 45.1611 96.1151 44.0664C96.1125 44.0585 96.0993 44.0638 96.1019 44.0717Z"
                      fill="#263238"
                    />
                    <path
                      d="M32.1583 90.4087C31.685 90.5568 18.3087 90.2686 17.8064 89.9354C17.616 89.8112 17.5419 87.8598 17.5234 85.5013C17.5234 84.991 17.5234 84.4675 17.5234 83.9308C17.5234 83.2962 17.5234 82.6563 17.5234 82.035C17.5605 79.2402 17.6451 76.7812 17.6451 76.7812L26.3519 76.9425L26.27 82.1963L26.233 84.0921L26.1589 85.66C26.1589 85.66 31.2302 88.0608 31.7432 88.4865C32.2561 88.9122 32.6157 90.2633 32.1583 90.4087Z"
                      fill="#F7A9A0"
                    />
                    <path
                      d="M32.1583 90.405C31.685 90.553 18.3087 90.2648 17.8064 89.9317C17.616 89.8074 17.5419 87.8561 17.5234 85.4976C17.5234 84.9873 17.5234 84.4638 17.5234 83.927C17.5234 83.2925 17.5234 82.6526 17.5234 82.0312L26.2488 82.1925L26.2118 84.0883L26.1378 85.6563C26.1378 85.6563 31.2091 88.0571 31.722 88.4828C32.235 88.9084 32.6157 90.2596 32.1583 90.405Z"
                      fill="white"
                    />
                    <path
                      d="M32.1987 90.4251C31.892 90.5203 26.1941 90.4251 22.0456 90.2718C21.0858 90.2321 20.1947 90.1898 19.502 90.1475C18.5263 90.084 17.8706 90.0179 17.7675 89.9492C17.5348 89.7932 17.474 86.9297 17.4766 83.9102L26.2285 84.0714L26.1544 85.6579C26.1544 85.6579 31.2548 88.0719 31.7704 88.4976C32.286 88.9233 32.6694 90.277 32.1987 90.4251Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M32.0157 89.8833C29.763 89.7801 20.6622 89.5739 18.4279 89.6427C18.4094 89.6427 18.4094 89.6559 18.4279 89.6559C20.6595 89.8092 29.7604 89.9388 32.0157 89.9203C32.0633 89.9335 32.0633 89.8859 32.0157 89.8833Z"
                      fill="#263238"
                    />
                    <path
                      d="M26.4845 85.155C25.5987 84.9699 24.512 85.0836 23.8193 85.6996C23.7929 85.7234 23.8193 85.7631 23.8563 85.7525C24.71 85.498 25.5884 85.3349 26.4766 85.266C26.4839 85.2665 26.4912 85.2656 26.4981 85.2633C26.5051 85.261 26.5115 85.2573 26.517 85.2525C26.5225 85.2478 26.527 85.2419 26.5303 85.2354C26.5336 85.2289 26.5355 85.2217 26.5361 85.2144C26.5366 85.2072 26.5357 85.1998 26.5334 85.1929C26.531 85.186 26.5274 85.1795 26.5226 85.174C26.5178 85.1685 26.512 85.164 26.5054 85.1607C26.4989 85.1574 26.4918 85.1555 26.4845 85.155Z"
                      fill="#263238"
                    />
                    <path
                      d="M27.1173 85.5533C26.2316 85.3682 25.1449 85.4819 24.4521 86.1007C24.4257 86.1244 24.4521 86.1615 24.4891 86.1535C25.3425 85.8971 26.221 85.7332 27.1094 85.6644C27.1241 85.6654 27.1387 85.6606 27.1498 85.6509C27.161 85.6413 27.1678 85.6276 27.1689 85.6128C27.1699 85.5981 27.1651 85.5836 27.1554 85.5724C27.1457 85.5612 27.132 85.5544 27.1173 85.5533Z"
                      fill="#263238"
                    />
                    <path
                      d="M27.7487 85.9674C26.8656 85.7823 25.7762 85.896 25.0861 86.5147C25.0571 86.5385 25.0861 86.5755 25.1205 86.5676C25.9748 86.3118 26.8542 86.1487 27.7434 86.0811C27.7566 86.0789 27.7686 86.0723 27.7775 86.0624C27.7863 86.0524 27.7915 86.0397 27.7921 86.0264C27.7928 86.0131 27.7888 85.9999 27.7809 85.9892C27.773 85.9785 27.7616 85.9708 27.7487 85.9674Z"
                      fill="#263238"
                    />
                    <path
                      d="M28.3893 86.3541C27.5062 86.169 26.4169 86.2827 25.7268 86.9014C25.6977 86.9252 25.7268 86.9623 25.7611 86.9543C26.6154 86.6985 27.4948 86.5354 28.384 86.4678C28.3972 86.4657 28.4092 86.4591 28.4181 86.4491C28.427 86.4391 28.4321 86.4264 28.4328 86.4131C28.4334 86.3998 28.4294 86.3867 28.4215 86.3759C28.4136 86.3652 28.4022 86.3575 28.3893 86.3541Z"
                      fill="#263238"
                    />
                    <path
                      d="M28.1682 83.1404C27.8297 82.6539 27.1767 82.8548 26.7986 83.1589C26.1612 83.6908 25.6752 84.3811 25.3893 85.1605C25.3875 85.1639 25.3867 85.1677 25.3867 85.1715C25.3868 85.1753 25.3877 85.1791 25.3896 85.1825C25.3914 85.1858 25.394 85.1887 25.3972 85.1909C25.4003 85.193 25.404 85.1944 25.4078 85.1948C25.4078 85.2609 25.4686 85.335 25.5453 85.3085C26.2856 85.0441 27.1053 84.8696 27.7425 84.3963C28.1232 84.1187 28.4881 83.6031 28.1682 83.1404ZM26.5817 84.6925C26.2195 84.8247 25.8573 84.941 25.5003 85.0891C25.778 84.7004 26.0291 84.2959 26.3491 83.9389C26.4979 83.7615 26.6586 83.5945 26.8303 83.4392C27.0947 83.2065 28.1523 82.7173 27.9805 83.6877C27.8879 84.2218 27.0154 84.5312 26.587 84.6925H26.5817Z"
                      fill="#263238"
                    />
                    <path
                      d="M23.1375 84.8779C23.862 85.2031 24.7028 85.2058 25.4775 85.2983C25.4949 85.2989 25.5122 85.2954 25.528 85.2881C25.5438 85.2808 25.5576 85.2699 25.5684 85.2563C25.5792 85.2427 25.5867 85.2267 25.5902 85.2096C25.5937 85.1926 25.5931 85.175 25.5886 85.1582C25.5934 85.1532 25.5961 85.1466 25.5961 85.1397C25.5961 85.1328 25.5934 85.1261 25.5886 85.1212C25.1413 84.4213 24.5187 83.8507 23.7827 83.466C23.349 83.2492 22.6669 83.2016 22.4395 83.7304C22.2121 84.2592 22.7145 84.6849 23.1375 84.8779ZM22.7488 84.2354C22.3707 83.3258 23.505 83.577 23.8065 83.7489C24.0063 83.8647 24.1988 83.9927 24.3829 84.1323C24.7566 84.4284 25.1149 84.7435 25.4564 85.0762C25.0783 85.0075 24.6975 84.9731 24.3168 84.9176C23.8911 84.8541 22.9604 84.7378 22.7488 84.2354Z"
                      fill="#263238"
                    />
                    <path
                      opacity="0.2"
                      d="M25.3518 90.3777C24.2281 90.3486 23.0885 90.3115 22.0468 90.2692C21.087 90.2349 20.1959 90.1926 19.5032 90.1476C18.5275 90.0842 17.8718 90.0181 17.7687 89.9467C17.5651 89.8118 17.5043 87.5987 17.4805 85.0234C19.4662 86.3508 23.3635 89.0186 25.3518 90.3777Z"
                      fill="black"
                    />
                    <path
                      d="M27.0085 85.5471H17.0695C17.0695 85.5471 17.6141 63.1757 17.5084 62.6549C17.244 61.4095 11.6016 41.6875 11.6016 41.6875L19.4491 41.8223L22.1276 41.8673C22.1276 41.8673 21.8975 45.1539 21.9901 45.5002C23.3121 50.286 25.8636 58.4561 26.3845 61.4862C27.2914 66.7452 27.0085 85.5471 27.0085 85.5471Z"
                      fill="#263238"
                    />
                    <path
                      d="M26.6871 83.888C25.1377 83.8483 19.646 83.6844 17.5784 83.8377C17.5742 83.8377 17.5701 83.8394 17.5671 83.8424C17.5642 83.8454 17.5625 83.8494 17.5625 83.8536C17.5625 83.8578 17.5642 83.8618 17.5671 83.8648C17.5701 83.8678 17.5742 83.8695 17.5784 83.8695C18.287 83.9832 25.1377 83.9514 26.6871 83.9303C26.6927 83.9303 26.6981 83.9281 26.7021 83.9241C26.7061 83.9201 26.7083 83.9147 26.7083 83.9091C26.7083 83.9035 26.7061 83.8981 26.7021 83.8942C26.6981 83.8902 26.6927 83.888 26.6871 83.888Z"
                      fill="#37474F"
                    />
                    <path
                      d="M18.2879 62.1709C17.9918 60.9626 15.7787 53.427 15.0992 51.0474C14.4197 48.6677 13.7772 46.2881 13.2034 43.8767C13.1294 43.5726 13.0553 43.2686 12.9734 42.9645C12.9734 42.938 12.9311 42.9513 12.9337 42.9645C13.1585 44.1755 13.4625 45.3732 13.7269 46.571C13.9913 47.7687 14.3139 48.9506 14.6338 50.151C15.2755 52.5377 15.9753 54.9094 16.7332 57.2662C17.1113 58.4401 17.738 60.8489 18.0711 62.0255C18.4043 63.2021 17.8596 82.6941 17.894 83.0087C17.894 83.0276 17.9015 83.0458 17.9149 83.0592C17.9283 83.0726 17.9464 83.0801 17.9654 83.0801C17.9843 83.0801 18.0024 83.0726 18.0158 83.0592C18.0292 83.0458 18.0367 83.0276 18.0367 83.0087C18.0896 80.7322 18.5814 63.366 18.2879 62.1709Z"
                      fill="#37474F"
                    />
                    <path
                      d="M19.4518 41.8314C19.4518 41.8314 17.5322 62.767 17.511 62.6639C17.2651 61.4609 11.9585 42.9128 11.6174 41.7547L11.6016 41.6992L19.4518 41.8314Z"
                      fill="#37474F"
                    />
                    <path
                      d="M21.851 91.552C21.3803 91.6974 8.00403 91.4118 7.50166 91.0787C7.31129 90.9544 7.23726 89.0005 7.21875 86.642C7.21875 86.1317 7.21875 85.6081 7.21875 85.0714C7.21875 84.4395 7.21875 83.7996 7.21875 83.1756C7.25312 80.3835 7.33773 77.9219 7.33773 77.9219L16.0473 78.0832L15.96 83.3369L15.923 85.2327L15.8489 86.8033C15.8489 86.8033 20.9202 89.2041 21.4332 89.6298C21.9461 90.0554 22.3216 91.4066 21.851 91.552Z"
                      fill="#F7A9A0"
                    />
                    <path
                      d="M21.851 91.5521C21.3803 91.6976 8.00403 91.412 7.50166 91.0789C7.31129 90.9546 7.23726 89.0006 7.21875 86.6421C7.21875 86.1318 7.21875 85.6083 7.21875 85.0716C7.21875 84.4396 7.21875 83.7998 7.21875 83.1758L15.9441 83.3371L15.9071 85.2329L15.8331 86.8034C15.8331 86.8034 20.9044 89.2042 21.4173 89.6299C21.9303 90.0556 22.3216 91.4067 21.851 91.5521Z"
                      fill="white"
                    />
                    <path
                      d="M21.8941 91.5696C21.5847 91.6648 15.8868 91.5696 11.7409 91.4189C10.7811 91.3793 9.89005 91.337 9.19466 91.292C8.22165 91.2286 7.56592 91.1651 7.46016 91.0937C7.22749 90.9404 7.16932 88.0768 7.17196 85.0547L15.9238 85.2186L15.8498 86.8051C15.8498 86.8051 20.9501 89.2191 21.4657 89.6474C21.9813 90.0758 22.3647 91.4216 21.8941 91.5696Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M21.7111 91.0292C19.4583 90.9261 10.3575 90.7225 8.12326 90.7912C8.10475 90.7912 8.10475 90.7912 8.12326 90.8045C10.3548 90.9552 19.4557 91.0874 21.7137 91.0689C21.7587 91.0662 21.7587 91.0318 21.7111 91.0292Z"
                      fill="#263238"
                    />
                    <path
                      d="M16.1772 86.3022C15.2941 86.1197 14.2074 86.2308 13.5146 86.8495C13.4882 86.8733 13.5146 86.9103 13.5516 86.9024C14.405 86.6466 15.2835 86.4835 16.1719 86.4159C16.185 86.4137 16.1971 86.4071 16.2059 86.3972C16.2148 86.3872 16.22 86.3745 16.2206 86.3612C16.2212 86.3478 16.2172 86.3347 16.2093 86.324C16.2014 86.3132 16.1901 86.3055 16.1772 86.3022Z"
                      fill="#263238"
                    />
                    <path
                      d="M16.81 86.6979C15.9269 86.5128 14.8402 86.6265 14.1474 87.2426C14.121 87.2664 14.1474 87.3034 14.1844 87.2955C15.0382 87.041 15.9165 86.8779 16.8047 86.809C16.8194 86.8097 16.8338 86.8045 16.8447 86.7946C16.8556 86.7847 16.8622 86.7708 16.8629 86.7561C16.8636 86.7414 16.8584 86.727 16.8485 86.7161C16.8386 86.7051 16.8247 86.6986 16.81 86.6979Z"
                      fill="#263238"
                    />
                    <path
                      d="M17.4415 87.1003C16.5558 86.9152 15.4691 87.0289 14.7763 87.6449C14.7499 87.6687 14.7763 87.7084 14.8133 87.6978C15.6671 87.4433 16.5454 87.2803 17.4336 87.2113C17.4409 87.2118 17.4482 87.2109 17.4552 87.2086C17.4621 87.2063 17.4685 87.2026 17.474 87.1979C17.4796 87.1931 17.4841 87.1872 17.4873 87.1807C17.4906 87.1742 17.4926 87.1671 17.4931 87.1598C17.4936 87.1525 17.4927 87.1451 17.4904 87.1382C17.4881 87.1313 17.4844 87.1249 17.4796 87.1193C17.4748 87.1138 17.469 87.1093 17.4625 87.106C17.4559 87.1027 17.4488 87.1008 17.4415 87.1003Z"
                      fill="#263238"
                    />
                    <path
                      d="M18.0743 87.5026C17.1886 87.3175 16.1019 87.4312 15.4091 88.0473C15.3827 88.0737 15.4091 88.1107 15.4462 88.1028C16.3021 87.8457 17.1832 87.6817 18.0743 87.6137C18.0891 87.6137 18.1032 87.6078 18.1136 87.5974C18.124 87.587 18.1299 87.5729 18.1299 87.5581C18.1299 87.5434 18.124 87.5293 18.1136 87.5189C18.1032 87.5085 18.0891 87.5026 18.0743 87.5026Z"
                      fill="#263238"
                    />
                    <path
                      d="M17.8599 84.2862C17.5214 83.7971 16.8657 84.0007 16.4902 84.3021C15.8528 84.835 15.3668 85.5262 15.081 86.3063C15.0791 86.3095 15.0781 86.3132 15.0781 86.3169C15.0781 86.3207 15.0791 86.3243 15.081 86.3275C15.0829 86.3308 15.0856 86.3334 15.0888 86.3353C15.0921 86.3371 15.0957 86.3381 15.0995 86.338C15.0995 86.4068 15.1603 86.4782 15.237 86.4517C15.9746 86.1873 16.797 86.0155 17.4342 85.5395C17.8096 85.2645 18.1798 84.7463 17.8599 84.2862ZM16.2734 85.8357C15.9138 85.9705 15.549 86.0868 15.1947 86.2349C15.4576 85.8363 15.7409 85.4515 16.0434 85.0821C16.1929 84.9062 16.3536 84.7401 16.5246 84.585C16.789 84.3497 17.8466 83.8606 17.6721 84.8309C17.5769 85.365 16.7071 85.6744 16.2761 85.8357H16.2734Z"
                      fill="#263238"
                    />
                    <path
                      d="M12.8304 86.0237C13.5549 86.3516 14.3957 86.3542 15.1704 86.4467C15.1881 86.4475 15.2057 86.444 15.2217 86.4366C15.2378 86.4291 15.2518 86.4179 15.2627 86.404C15.2736 86.39 15.2809 86.3736 15.2842 86.3562C15.2875 86.3388 15.2865 86.3209 15.2814 86.304C15.2842 86.302 15.2864 86.2994 15.2879 86.2964C15.2895 86.2935 15.2903 86.2901 15.2903 86.2868C15.2903 86.2834 15.2895 86.2801 15.2879 86.2771C15.2864 86.2741 15.2842 86.2716 15.2814 86.2696C14.8363 85.569 14.2143 84.9981 13.4782 84.6144C13.0446 84.3976 12.3624 84.35 12.135 84.8788C11.9076 85.4076 12.4074 85.8333 12.8304 86.0237ZM12.4417 85.3838C12.061 84.4716 13.1979 84.7255 13.4993 84.8973C13.7008 85.0106 13.8934 85.1388 14.0758 85.2807C14.4555 85.5775 14.8191 85.8944 15.1651 86.2299C14.787 86.1612 14.4063 86.1242 14.0255 86.0713C13.5787 85.9999 12.6506 85.8836 12.4417 85.3838Z"
                      fill="#263238"
                    />
                    <path
                      d="M16.428 86.5601L6.78516 86.383C6.78516 86.383 9.49267 51.6004 9.16481 49.7575C8.6122 46.7406 9.08284 43.2981 10.5344 41.6641L19.9314 41.8386C19.9314 41.8386 20.0689 44.4826 19.0694 46.0347C19.0694 46.0347 18.1784 46.5767 17.7474 46.8147L16.428 86.5601Z"
                      fill="#263238"
                    />
                    <path
                      d="M16.1621 84.8502C14.6999 84.7841 15.1204 84.7815 13.6555 84.7339C12.9417 84.7101 8.23523 84.5567 7.57422 84.6519C7.57422 84.6519 7.57422 84.6784 7.57422 84.681C8.24052 84.8079 12.9469 84.8793 13.6555 84.8873C15.1204 84.9084 14.7132 84.8873 16.1621 84.8873C16.1885 84.8925 16.1885 84.8502 16.1621 84.8502Z"
                      fill="#37474F"
                    />
                    <path
                      d="M19.6604 45.6241C18.7289 46.0525 17.8355 46.5593 16.9899 47.1391C16.9849 47.1441 16.9816 47.1507 16.9807 47.1577C16.9798 47.1648 16.9813 47.1719 16.985 47.178C16.9887 47.1841 16.9943 47.1888 17.0009 47.1914C17.0076 47.1939 17.0149 47.1941 17.0216 47.192C17.9259 46.7134 18.8487 46.2507 19.7212 45.7272C19.7296 45.7241 19.7371 45.7192 19.7434 45.7129C19.7496 45.7066 19.7544 45.6989 19.7574 45.6905C19.7604 45.6822 19.7615 45.6732 19.7606 45.6644C19.7598 45.6555 19.757 45.647 19.7525 45.6393C19.7479 45.6316 19.7418 45.6251 19.7345 45.62C19.7271 45.615 19.7188 45.6116 19.71 45.6102C19.7012 45.6087 19.6922 45.6092 19.6837 45.6116C19.6751 45.614 19.6672 45.6183 19.6604 45.6241Z"
                      fill="#37474F"
                    />
                    <path
                      d="M18.4629 45.4673C18.4041 45.648 18.3581 45.8327 18.3254 46.0199C18.2843 46.1651 18.2717 46.3168 18.2884 46.4668C18.2909 46.4724 18.2949 46.4772 18.3001 46.4806C18.3053 46.484 18.3113 46.4858 18.3175 46.4858C18.3237 46.4858 18.3297 46.484 18.3349 46.4806C18.34 46.4772 18.3441 46.4724 18.3466 46.4668C18.4212 46.3267 18.4738 46.176 18.5026 46.0199C18.5502 45.8481 18.6004 45.6788 18.6453 45.5043C18.6451 45.4825 18.6374 45.4615 18.6235 45.4447C18.6097 45.4279 18.5904 45.4164 18.5691 45.4121C18.5477 45.4077 18.5256 45.4108 18.5062 45.4209C18.4869 45.431 18.4716 45.4473 18.4629 45.4673Z"
                      fill="#37474F"
                    />
                    <path
                      d="M18.3912 44.5605C18.4203 44.4045 18.4467 44.2485 18.4784 44.0925C18.5102 43.9365 18.5551 43.7699 18.5736 43.6059C18.5736 43.5795 18.6186 43.5901 18.6133 43.6059C18.5869 43.7619 18.5816 43.9232 18.5657 44.0819C18.5498 44.2405 18.5313 44.3992 18.5128 44.5578C18.4765 44.8556 18.4244 45.1513 18.3568 45.4436C18.5133 45.4196 18.6624 45.3609 18.7931 45.2717C18.9173 45.15 19.0013 44.9931 19.0337 44.8222C19.0813 44.6451 19.1236 44.4626 19.1765 44.2934C19.2441 44.0992 19.2937 43.8992 19.3245 43.6958C19.3245 43.6694 19.3695 43.6773 19.3642 43.6958C19.3197 44.1242 19.2311 44.5469 19.0998 44.9571C19.0714 45.1202 18.985 45.2676 18.8565 45.3722C18.692 45.456 18.512 45.5055 18.3277 45.5176C18.3066 45.5176 18.2749 45.5176 18.2775 45.4912C18.2999 45.1792 18.3379 44.8686 18.3912 44.5605Z"
                      fill="#37474F"
                    />
                    <path
                      d="M10.6855 49.668C10.6299 48.9779 10.5295 48.2905 10.4687 47.5977C10.3517 46.2125 10.4616 44.8176 10.7939 43.4677C10.7939 43.4628 10.7919 43.4581 10.7885 43.4546C10.785 43.4512 10.7803 43.4492 10.7754 43.4492C10.7705 43.4492 10.7657 43.4512 10.7623 43.4546C10.7588 43.4581 10.7569 43.4628 10.7569 43.4677C10.4659 44.6532 10.3185 45.8694 10.3179 47.0901C10.355 48.309 10.5506 49.5147 10.548 50.7362C10.5453 51.9578 10.4237 53.2058 10.3206 54.4379C10.2175 55.67 10.117 56.9154 10.0139 58.1555C9.60141 63.1342 9.22066 68.1156 8.81612 73.097C8.70507 74.4878 8.60195 75.8786 8.49619 77.2693C8.39043 78.6601 8.23179 82.1741 8.14453 83.5913C8.14453 83.7155 8.32168 83.7076 8.33226 83.5913C8.59667 81.0926 8.79761 76.5078 9.00385 74.0066C9.21009 71.5053 9.40046 69.0516 9.59612 66.5715C9.79178 64.0914 9.99008 61.6165 10.1831 59.139C10.2783 57.9051 10.3726 56.666 10.466 55.4215C10.5612 54.1894 10.6749 52.9546 10.7304 51.7198C10.7529 51.0356 10.7379 50.3506 10.6855 49.668Z"
                      fill="#37474F"
                    />
                    <path
                      d="M14.1274 43.4436C14.1274 43.4278 14.101 43.4225 14.0904 43.4436C14.0305 43.6055 13.9975 43.7761 13.9926 43.9487C13.9598 44.1283 13.913 44.3052 13.8524 44.4775C13.7441 44.8353 13.5446 45.1587 13.2734 45.4161C12.6705 45.9449 11.8747 46.1485 11.1079 46.323C11.0788 46.323 11.0894 46.368 11.1079 46.3706C11.5565 46.3963 12.0057 46.3334 12.4299 46.1855C12.8122 46.0772 13.1666 45.8878 13.469 45.6303C13.7574 45.3653 13.9576 45.0183 14.0428 44.6361C14.0858 44.4361 14.1106 44.2325 14.1168 44.028C14.1168 43.9301 14.1168 43.8323 14.1168 43.7345C14.1394 43.6392 14.143 43.5403 14.1274 43.4436Z"
                      fill="#37474F"
                    />
                    <path
                      d="M19.6807 28.8559C21.0952 33.4037 23.9508 37.8298 24.8366 38.4327C26.2062 39.366 32.7053 40.1672 34.8417 39.916C35.5423 39.834 35.2832 34.9796 34.6434 34.5829C34.0035 34.1863 27.6842 34.107 27.2559 33.9378C27.0285 33.8479 23.66 29.9717 21.7642 27.9331C19.9979 26.0294 19.2523 27.4625 19.6807 28.8559Z"
                      fill="#F7A9A0"
                    />
                    <path
                      d="M24.6339 30.8376L21.0247 33.7461C21.0247 33.7461 19.4383 30.3353 19.322 28.2676C19.2056 26.2 20.1786 26.4326 21.3288 27.4268C22.479 28.421 24.6339 30.8376 24.6339 30.8376Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M23.9885 30.4161C24.0123 30.3976 24.007 30.3764 23.9885 30.3923C22.9274 31.1386 21.9136 31.9502 20.9531 32.8222V32.8354C21.511 32.5102 23.7241 30.6197 23.9885 30.4161Z"
                      fill="#263238"
                    />
                    <path
                      d="M8.98468 42.7468C9.00848 42.7891 22.6518 45.5336 22.8025 45.4173C23.0167 45.256 23.2679 31.1394 21.6338 27.7418C21.224 26.8957 19.3758 26.0311 18.4292 26.6445C15.6953 28.4187 14.8624 30.177 13.9767 31.5783C13.0871 33.1018 12.2873 34.676 11.5811 36.2927C10.1798 39.3704 8.89743 42.604 8.98468 42.7468Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M18.1931 26.6367C18.1931 26.6367 19.3855 31.5996 19.5151 32.8344C19.6817 34.5213 18.4575 45.2403 18.4575 45.2403L8.76172 42.9135C8.76172 42.9135 12.5242 32.6493 15.311 29.2702C17.5135 26.6103 18.1931 26.6367 18.1931 26.6367Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M21.3281 27.4258C21.3281 27.4258 21.7142 31.8308 21.8252 32.4997C21.9363 33.1687 21.7142 45.8337 21.7142 45.8337L23.0018 45.601C23.0018 45.601 23.171 36.836 22.7374 32.2829C22.3038 27.7299 21.3281 27.4258 21.3281 27.4258Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M18.8913 41.0402L10.1289 39.4537C10.2611 39.1364 10.3933 38.8059 10.5467 38.4648L19.0076 39.9958C18.9627 40.3474 18.9257 40.6991 18.8913 41.0402Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M23.0345 41.7902L21.7812 41.5654C21.7812 41.2191 21.7812 40.8621 21.7812 40.5078L23.0187 40.7326C23.0345 41.0921 23.0345 41.4491 23.0345 41.7902Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M18.7012 42.8685L9.41797 41.1842L9.82251 40.1953L18.8123 41.8267C18.7726 42.1995 18.733 42.5485 18.7012 42.8685Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M23.0283 43.6587L21.7539 43.4287C21.7539 43.0982 21.7539 42.7413 21.7724 42.3711L23.0336 42.5985C23.031 42.9766 23.0283 43.3309 23.0283 43.6587Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M37.6413 22.7754C38.5299 21.9364 39.635 21.3622 40.8323 21.1174C42.0296 20.8726 43.2715 20.967 44.4181 21.3899L40.5075 25.0916L41.7608 27.9313L44.5159 29.3274L48.4291 25.6257C48.7733 26.7457 48.8118 27.9374 48.5406 29.0772C48.2693 30.2171 47.6982 31.2637 46.8864 32.1086C46.0746 32.9535 45.0516 33.5659 43.9234 33.8824C42.7953 34.1989 41.603 34.208 40.4702 33.9087C39.3373 33.6093 38.3052 33.0126 37.4806 32.1801C36.656 31.3477 36.069 30.3099 35.7805 29.1742C35.4919 28.0386 35.5123 26.8465 35.8395 25.7214C36.1667 24.5963 36.7888 23.5792 37.6413 22.7754Z"
                      fill="#455A64"
                    />
                    <path
                      d="M19.209 58.2357C18.3203 59.0744 17.2153 59.6486 16.0181 59.8938C14.821 60.139 13.5792 60.0455 12.4323 59.6238L16.3429 55.9222L15.0896 53.0824L12.3266 51.6679L8.41336 55.3696C8.07261 54.2495 8.03732 53.0587 8.31116 51.9204C8.58499 50.7821 9.15799 49.7377 9.97089 48.8951C10.7838 48.0526 11.807 47.4425 12.9348 47.1281C14.0625 46.8137 15.2538 46.8063 16.3854 47.1067C17.5169 47.4071 18.5477 48.0044 19.371 48.8369C20.1942 49.6693 20.7801 50.7065 21.0681 51.8413C21.356 52.9761 21.3355 54.1673 21.0086 55.2915C20.6818 56.4157 20.0605 57.4322 19.209 58.2357Z"
                      fill="#455A64"
                    />
                    <path
                      d="M15.3427 48.831L19.3594 53.0859L42.5931 31.1532L38.5765 26.8983L15.3427 48.831Z"
                      fill="#455A64"
                    />
                    <path
                      d="M23.3582 43.6273L25.0117 45.3789L34.579 36.3474L32.9255 34.5958L23.3582 43.6273Z"
                      fill="#37474F"
                    />
                    <path
                      d="M15.9597 29.6504C14.5928 33.1379 14.4156 38.3388 15.6953 39.8459C17.7101 42.2256 21.3536 44.354 23.1383 44.8908C24.1801 45.2054 25.7824 39.2616 24.8808 38.9364C23.4424 38.4234 20.0316 37.0326 19.5689 36.718C19.1062 36.4034 18.7598 32.7255 18.2971 30.018C17.8106 27.0619 16.6578 27.8604 15.9597 29.6504Z"
                      fill="#F7A9A0"
                    />
                    <path
                      d="M22.6836 44.7044C25.7666 45.9683 29.4365 45.5188 30.0367 45.3073C30.5497 45.1301 30.8141 45.0429 30.8141 45.0429C31.7395 44.7414 31.9695 44.2126 31.9695 44.2126C31.9695 44.2126 33.1435 44.1809 33.2413 43.467C33.3524 42.6738 31.684 42.8721 30.6951 42.4094C28.4371 41.3782 25.5101 39.2815 24.8782 38.9219L22.6836 44.7044Z"
                      fill="#F7A9A0"
                    />
                    <path
                      d="M27.5687 42.9904C28.2259 43.3005 28.9035 43.5655 29.5967 43.7836C30.3709 43.9741 31.1584 44.1058 31.9525 44.1776C31.9566 44.1791 31.9601 44.1818 31.9625 44.1853C31.965 44.1889 31.9663 44.1931 31.9663 44.1974C31.9663 44.2017 31.965 44.2059 31.9625 44.2095C31.9601 44.213 31.9566 44.2157 31.9525 44.2172C30.4034 44.2397 28.8778 43.8363 27.5422 43.0512C27.5105 43.03 27.5343 42.9772 27.5687 42.9904Z"
                      fill="#263238"
                    />
                    <path
                      d="M28.0529 40.9963C27.8123 40.7451 27.9419 40.6182 28.5553 40.7028C29.1687 40.7874 31.5193 41.6467 31.7493 40.8006C31.9793 39.9545 28.6425 38.7938 27.6114 38.7277C26.7006 38.717 25.7905 38.7825 24.8906 38.9233C25.4961 39.2776 26.8763 40.2824 28.0529 40.9963Z"
                      fill="#F7A9A0"
                    />
                    <path
                      d="M19.0906 33.9332L14.4688 34.3007C14.4688 34.3007 15.0901 30.5991 16.153 28.817C17.2159 27.0349 17.8954 27.7858 18.2841 29.2559C18.6728 30.726 19.0906 33.9332 19.0906 33.9332Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M18.7929 33.2269C18.8246 33.2269 18.8326 33.2031 18.7929 33.2031C17.4948 33.2243 16.1993 33.3268 14.9141 33.5098V33.5257C15.5671 33.5548 18.4597 33.2428 18.7929 33.2269Z"
                      fill="#263238"
                    />
                    <path
                      d="M20.5226 28.9833C19.9356 28.9833 18.7484 27.8596 18.3016 26.9209C18.2698 26.8575 18.4047 26.2044 18.5263 25.4033C18.6004 24.9168 18.6691 24.3747 18.6982 23.875L21.7917 24.811C21.5774 25.4263 21.4398 26.0657 21.3819 26.7147C21.375 26.7833 21.375 26.8524 21.3819 26.9209C21.3819 26.9209 21.3819 26.9421 21.3819 26.9553C21.4348 27.3493 21.4401 28.9701 20.5226 28.9833Z"
                      fill="#F7A9A0"
                    />
                    <path
                      d="M21.3896 26.9253C21.3887 26.9376 21.3887 26.95 21.3896 26.9623C21.2813 26.9689 21.1727 26.9689 21.0644 26.9623C19.2479 26.8195 18.9227 24.5589 18.8672 23.9375L21.7756 24.818C21.5614 25.4333 21.4237 26.0727 21.3658 26.7217C21.3684 26.7901 21.3763 26.8582 21.3896 26.9253Z"
                      fill="#263238"
                    />
                    <path
                      d="M18.8692 19.635C18.3404 20.6715 18.3404 23.9422 19.0067 24.7883C19.9533 26.0125 21.7856 26.4408 22.8987 25.2377C24.0119 24.0347 23.885 19.8095 23.1288 19.011C22.0262 17.837 19.6624 18.1041 18.8692 19.635Z"
                      fill="#F7A9A0"
                    />
                    <path
                      d="M21.8235 22.0469C21.8235 22.0469 21.8077 22.0469 21.8077 22.0654C21.8235 22.2848 21.8077 22.5413 21.6094 22.6233C21.8553 22.5889 21.8738 22.2452 21.8235 22.0469Z"
                      fill="#263238"
                    />
                    <path
                      d="M21.6154 21.8242C21.2611 21.8242 21.2638 22.5222 21.5916 22.5355C21.9195 22.5487 21.9142 21.8348 21.6154 21.8242Z"
                      fill="#263238"
                    />
                    <path
                      d="M22.9955 22.0039C22.9955 22.0039 23.0114 22.0039 23.0114 22.0251C23.0114 22.2445 23.0352 22.4983 23.2335 22.5697V22.583C22.9902 22.5486 22.9532 22.2128 22.9955 22.0039Z"
                      fill="#263238"
                    />
                    <path
                      d="M23.1926 21.7743C23.5469 21.7452 23.576 22.4565 23.2481 22.4829C22.9203 22.5094 22.8938 21.7981 23.1926 21.7743Z"
                      fill="#263238"
                    />
                    <path
                      d="M21.3369 21.4998C21.4266 21.4716 21.5149 21.439 21.6013 21.402C21.7041 21.3819 21.7972 21.3279 21.8657 21.2487C21.8813 21.2194 21.8871 21.1859 21.8823 21.1531C21.8776 21.1203 21.8625 21.0899 21.8393 21.0662C21.7853 21.028 21.7223 21.0044 21.6565 20.9979C21.5906 20.9914 21.5242 21.0022 21.4638 21.0292C21.333 21.0666 21.2208 21.1515 21.1492 21.2672C21.1336 21.2952 21.1267 21.3273 21.1295 21.3593C21.1323 21.3913 21.1445 21.4218 21.1647 21.4467C21.1848 21.4717 21.212 21.4901 21.2427 21.4996C21.2734 21.5091 21.3062 21.5091 21.3369 21.4998Z"
                      fill="#263238"
                    />
                    <path
                      d="M23.4381 21.4932C23.3403 21.4773 23.2504 21.4456 23.1552 21.4218C23.0557 21.4075 22.9631 21.3622 22.8908 21.2923C22.8704 21.2662 22.8594 21.2341 22.8594 21.201C22.8594 21.168 22.8704 21.1359 22.8908 21.1098C22.94 21.0651 23.0006 21.0348 23.0659 21.0222C23.1312 21.0096 23.1987 21.0152 23.261 21.0384C23.3945 21.0633 23.5142 21.1368 23.5968 21.2447C23.614 21.2707 23.6233 21.3012 23.6236 21.3324C23.6239 21.3636 23.6151 21.3942 23.5983 21.4205C23.5815 21.4468 23.5574 21.4677 23.529 21.4806C23.5006 21.4935 23.469 21.4979 23.4381 21.4932Z"
                      fill="#263238"
                    />
                    <path
                      d="M21.4966 24.0938C21.5495 24.144 21.6023 24.2154 21.6817 24.2233C21.7634 24.2212 21.8437 24.2014 21.917 24.1651C21.917 24.1651 21.9328 24.1651 21.917 24.1651C21.8861 24.2094 21.8436 24.2442 21.7941 24.2657C21.7446 24.2872 21.6901 24.2945 21.6367 24.2868C21.5922 24.2752 21.5521 24.2507 21.5215 24.2163C21.4909 24.182 21.4712 24.1393 21.4648 24.0938C21.4701 24.0938 21.4886 24.0938 21.4966 24.0938Z"
                      fill="#263238"
                    />
                    <path
                      d="M21.7233 23.4415C21.7796 23.5286 21.8532 23.6031 21.9397 23.6605C22.0261 23.7178 22.1235 23.7566 22.2256 23.7746C22.3134 23.7861 22.4023 23.7861 22.49 23.7746H22.5429H22.5905C22.6023 23.7719 22.6129 23.7657 22.621 23.7567C22.6291 23.7477 22.6341 23.7364 22.6355 23.7244C22.6355 23.7244 22.6355 23.7112 22.6355 23.7032V23.6847C22.6355 23.5155 22.6222 23.2564 22.6222 23.2564C22.6831 23.2881 23.0003 23.4282 22.9951 23.341C22.9725 22.5765 22.8715 21.8163 22.6936 21.0724C22.6921 21.0683 22.6894 21.0648 22.6859 21.0624C22.6823 21.0599 22.6781 21.0586 22.6738 21.0586C22.6695 21.0586 22.6653 21.0599 22.6617 21.0624C22.6582 21.0648 22.6555 21.0683 22.654 21.0724C22.6725 21.7784 22.8126 22.4764 22.8417 23.1876C22.7294 23.1353 22.61 23.0996 22.4874 23.0819C22.461 23.0819 22.5297 23.579 22.5218 23.6556C22.3829 23.6701 22.2425 23.6565 22.1089 23.6156C21.9754 23.5747 21.8514 23.5074 21.7444 23.4177C21.7285 23.4097 21.71 23.423 21.7233 23.4415Z"
                      fill="#263238"
                    />
                    <path
                      d="M22.3961 23.6969C22.303 23.8144 22.1809 23.9055 22.0418 23.9613C21.9646 23.9925 21.8796 23.999 21.7985 23.9798C21.6214 23.9322 21.6161 23.7709 21.6478 23.6334C21.6658 23.56 21.6924 23.489 21.7271 23.4219C21.9152 23.5823 22.1495 23.6786 22.3961 23.6969Z"
                      fill="#263238"
                    />
                    <path
                      d="M22.0418 23.9724C21.9646 24.0036 21.8796 24.0101 21.7985 23.9909C21.6214 23.9433 21.6161 23.782 21.6478 23.6445C21.7408 23.6467 21.8304 23.6803 21.9019 23.7398C21.9734 23.7994 22.0227 23.8813 22.0418 23.9724Z"
                      fill="#FF9BBC"
                    />
                    <path
                      d="M23.5211 19.9095C23.4893 19.8116 23.4021 19.5657 23.2752 19.5525C23.1482 19.5393 22.9896 19.7852 22.6855 19.8407C22.2572 19.9227 21.5618 19.3965 20.9695 19.5049C20.3773 19.6133 19.986 20.1289 19.785 21.1495C19.5841 22.1701 18.7009 22.9237 18.5291 22.2283C18.5217 22.1838 18.5119 22.1396 18.5 22.0961C18.5 21.1019 18.6269 20.121 18.8781 19.6345C19.6713 18.1036 22.0245 17.8365 23.1377 19.0131C23.3361 19.2765 23.4676 19.5841 23.5211 19.9095Z"
                      fill="#263238"
                    />
                    <path
                      d="M19.096 22.3389C19.096 22.3389 18.5381 21.1967 18.0384 21.3791C17.5387 21.5616 17.8348 23.1374 18.3504 23.4283C18.414 23.47 18.4853 23.4985 18.5602 23.512C18.6351 23.5254 18.7119 23.5235 18.786 23.5065C18.8601 23.4894 18.93 23.4576 18.9915 23.4128C19.053 23.368 19.1047 23.3112 19.1436 23.2458L19.096 22.3389Z"
                      fill="#F7A9A0"
                    />
                    <path
                      d="M18.1328 21.8242C18.1328 21.8242 18.1328 21.8242 18.1328 21.8401C18.2952 21.9551 18.4314 22.1031 18.5326 22.2744C18.6337 22.4458 18.6975 22.6365 18.7198 22.8342C18.7034 22.7924 18.6781 22.7546 18.6457 22.7234C18.6134 22.6923 18.5746 22.6685 18.5322 22.6536C18.4898 22.6388 18.4446 22.6334 18.3999 22.6376C18.3551 22.6419 18.3118 22.6557 18.2729 22.6782V22.6994C18.3441 22.6886 18.4169 22.7001 18.4812 22.7323C18.5456 22.7645 18.5985 22.8158 18.6325 22.8792C18.6875 22.9856 18.7317 23.0972 18.7647 23.2123C18.7647 23.2494 18.8414 23.2414 18.8335 23.2123C18.9234 22.702 18.651 21.9564 18.1328 21.8242Z"
                      fill="#263238"
                    />
                    <path
                      d="M23.8905 20.1464C23.8905 20.1464 23.4966 16.9339 20.6278 17.2618C17.759 17.5896 18.1027 20.8101 18.1027 20.8101L23.8905 20.1464Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M17.9242 21.0608L24.1445 20.3477L24.0921 19.8906L17.8718 20.6037L17.9242 21.0608Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M21.0257 20.2446L22.3213 20.0965L21.655 16.9766L20.3594 17.1246L21.0257 20.2446Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.1"
                      d="M21.0257 20.2446L22.3213 20.0965L21.655 16.9766L20.3594 17.1246L21.0257 20.2446Z"
                      fill="black"
                    />
                    <path
                      d="M32.0457 38.2972C32.0986 37.5701 32.9262 38.0486 32.9262 38.0486C32.9262 38.0486 31.9003 37.0703 32.2466 36.3406C32.593 35.6108 33.5687 36.2533 33.6321 36.2983C33.5792 36.2454 32.6591 35.3226 33.0822 34.6246C33.5052 33.9266 34.4042 34.6854 34.4571 34.7383C34.42 34.6722 33.9679 33.8023 34.4095 33.3449C35.1683 32.5516 36.6701 34.9313 37.5295 35.1455L38.8092 34.109C38.6376 34.4964 38.5807 34.925 38.6452 35.3438C38.7193 35.9493 38.7748 36.3538 38.6452 36.7134C38.593 36.8778 38.4886 37.0207 38.3478 37.1204C38.2071 37.2201 38.0377 37.2712 37.8652 37.266C37.8652 37.266 38.3253 37.89 38.0107 38.4479C37.8467 38.7361 37.2439 38.7308 37.2439 38.7308C37.3409 38.8771 37.3956 39.0473 37.4022 39.2227C37.4087 39.3981 37.3667 39.5719 37.2809 39.725C37.0324 40.1084 36.4665 40.0449 36.4665 40.0449C36.4665 40.0449 36.5723 40.6927 36.2021 41.002C35.4248 41.6313 31.932 39.8572 32.0457 38.2972Z"
                      fill="#F7A9A0"
                    />
                    <path
                      d="M37.8594 34.9531L38.7874 34.1334C38.8271 34.1123 38.8694 34.0885 38.9117 34.07C40.3316 33.3772 42.1665 34.2418 41.331 35.0113C40.6991 35.5956 39.2792 35.2281 38.716 35.9208L37.8594 34.9531Z"
                      fill="#F7A9A0"
                    />
                    <path
                      d="M37.2563 38.7478C37.2721 38.7478 37.2563 38.7769 37.2563 38.7743C35.7789 38.4169 34.4775 37.544 33.5863 36.3127C33.5572 36.2677 33.5863 36.199 33.6128 36.2466C34.2447 37.053 36.0823 38.2746 37.2563 38.7478Z"
                      fill="#263238"
                    />
                    <path
                      d="M34.423 34.6271C35.3061 35.8222 36.4827 36.6155 37.8073 37.258C37.8232 37.258 37.8073 37.2897 37.8073 37.2871C37.0749 37.1496 36.2711 36.6525 35.6921 36.2136C35.1348 35.817 34.6917 35.2808 34.4071 34.6589C34.3701 34.6324 34.4044 34.6007 34.423 34.6271Z"
                      fill="#263238"
                    />
                    <path
                      d="M36.478 42.7969L30.5448 101.651H29.0985L34.8863 44.2379H19.8311L9.3606 101.651H7.89844L18.6307 42.7969H36.478Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M34.9395 55.4453H17.6289V56.8837H34.9395V55.4453Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M32.6114 67.1211H15.3008V68.5595H32.6114V67.1211Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M31.4688 78.7891H12.8203V80.2274H31.4688V78.7891Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M30.5846 90.4609H10.9102V91.8993H30.5846V90.4609Z"
                      fill="#F31D32"
                    />
                    <g opacity="0.5">
                      <path
                        d="M36.478 42.793L30.5448 101.647H29.0985L34.8863 44.234H19.8311L9.3606 101.647H7.89844L18.6307 42.793H36.478Z"
                        fill="black"
                      />
                      <path
                        d="M34.9395 55.4453H17.6289V56.8837H34.9395V55.4453Z"
                        fill="black"
                      />
                      <path
                        d="M32.6114 67.1172H15.3008V68.5556H32.6114V67.1172Z"
                        fill="black"
                      />
                      <path
                        d="M31.4688 78.7852H12.8203V80.2235H31.4688V78.7852Z"
                        fill="black"
                      />
                      <path
                        d="M30.5846 90.4531H10.9102V91.8915H30.5846V90.4531Z"
                        fill="black"
                      />
                    </g>
                    <path
                      d="M48.5332 106.368H47.0684L35.2917 44.2379H20.2391L27.3305 106.368H25.8842L18.6289 42.7969H36.4842L48.5332 106.368Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.2"
                      d="M48.5332 106.368H47.0684L35.2917 44.2379H20.2391L27.3305 106.368H25.8842L18.6289 42.7969H36.4842L48.5332 106.368Z"
                      fill="black"
                    />
                    <path
                      d="M37.1836 41.0781H17.6758V42.7941H37.1836V41.0781Z"
                      fill="#F31D32"
                    />
                    <path
                      opacity="0.2"
                      d="M37.1836 41.0781H17.6758V42.7941H37.1836V41.0781Z"
                      fill="black"
                    />
                    <path
                      d="M5.09983 92.4727H4.35156V104.157H5.09983V92.4727Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M14.4676 98.9154L13.8516 98.7012L14.1741 98.5531L14.0129 98.2385L14.3354 98.0904L14.1768 97.7758L14.4967 97.6277L14.3381 97.3131L14.6606 97.165L14.4994 96.8477L14.8219 96.7023L14.6606 96.385L14.9832 96.2369L14.8219 95.9223L15.1445 95.7742L14.9859 95.4596L15.3058 95.3115L15.1471 94.9969L15.4697 94.8488L15.3084 94.5342L15.631 94.3861L15.4697 94.0714L15.7923 93.9234L15.6337 93.6061L15.9536 93.4607L15.7949 93.1434L16.1175 92.9953L15.9562 92.6807L16.2788 92.5326L16.1175 92.218L16.4401 92.0699L16.2788 91.7552L16.6014 91.6072L16.4427 91.2925L16.7627 91.1445L16.604 90.8272L16.9266 90.6818L16.7653 90.3645L17.0879 90.2191L16.9266 89.9018L17.2492 89.7537L17.0905 89.4391L17.4105 89.291L17.2518 88.9763L17.5717 88.8283L17.4131 88.5136L17.7357 88.3656L17.5744 88.0509L17.897 87.9029L17.7383 87.5856L18.0583 87.4401L17.8996 87.1229L18.2195 86.9774L18.0609 86.6602L18.677 86.8743L14.4676 98.9154Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M19.0796 86.7542L19.9766 84.1992L19.3577 83.982L18.4607 86.537L19.0796 86.7542Z"
                      fill="#37474F"
                    />
                    <path
                      d="M14.4648 98.9273L14.6288 98.4593L16.9265 99.2525C17.0348 99.2906 17.1538 99.2842 17.2574 99.2346C17.361 99.185 17.4408 99.0964 17.4791 98.9881L21.1543 88.4674C21.1924 88.3591 21.186 88.24 21.1364 88.1364C21.0868 88.0328 20.9982 87.9531 20.8899 87.9148L18.5975 87.1216L18.7588 86.6562L21.0512 87.4495C21.1663 87.4896 21.2724 87.5519 21.3634 87.633C21.4544 87.7141 21.5285 87.8124 21.5816 87.9221C21.6346 88.0319 21.6655 88.151 21.6725 88.2727C21.6795 88.3944 21.6624 88.5163 21.6223 88.6314L17.9471 99.1521C17.9065 99.2683 17.8433 99.3753 17.7611 99.4669C17.6789 99.5585 17.5793 99.6329 17.4682 99.6857C17.357 99.7386 17.2365 99.7689 17.1135 99.7749C16.9906 99.7808 16.8677 99.7624 16.752 99.7205L14.4648 98.9273Z"
                      fill="#263238"
                    />
                    <path
                      d="M21.0686 92.4727H20.3203V104.157H21.0686V92.4727Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M20.3604 93.4023H5.10156V94.0025H20.3604V93.4023Z"
                      fill="#F31D32"
                    />
                    <path
                      d="M4.89958 91.2582L8.93441 90.383L7.99577 86.0547L3.96094 86.9219L4.89958 91.2582ZM5.17985 89.7802L4.65104 87.3397L7.54099 86.7131L8.0698 89.1535L5.17985 89.7802Z"
                      fill="#263238"
                    />
                    <path
                      d="M9.81109 101.541L9.80316 101.538L10.057 101.403L10.0543 101.39V101.387L9.78465 101.327L10.0358 101.189L10.0332 101.176L9.76086 101.113L10.0147 100.978L10.012 100.962L9.73971 100.901L9.99089 100.763L9.98825 100.75L9.71591 100.687L9.96974 100.552L9.96709 100.536L9.6974 100.473L9.94858 100.335L9.94594 100.322L9.67625 100.258L9.92479 100.124V100.11L9.65245 100.047L9.90364 99.9095V99.8962L9.6313 99.8328L9.88248 99.6979L9.87984 99.6847V99.6821L9.61014 99.6213L9.86133 99.4838L9.85869 99.4705L9.58899 99.4071L9.84018 99.2722L9.83753 99.2564L9.5652 99.1929L9.81638 99.0581V99.0422L9.54404 98.9814L9.79523 98.8466V98.8307L9.52289 98.7672L9.77408 98.6324L9.77143 98.6165L9.50174 98.5531L9.75292 98.4182L9.75028 98.405L9.47794 98.3415L9.72913 98.2067V98.1908L9.45679 98.1274L9.70798 97.9925V97.9767L9.43564 97.9158L9.68682 97.781V97.7651L9.41449 97.7017L9.66303 97.5668V97.551L9.39333 97.4875L9.64452 97.3527L9.64187 97.3394L9.36954 97.276L9.62072 97.1385V97.1253L9.34838 97.0618L9.59957 96.927V96.9111L9.32723 96.8477L9.57842 96.7128V96.6969L9.30608 96.6335L9.55726 96.4986L9.55462 96.4854L9.28228 96.422L9.53611 96.2871L9.53347 96.2712L9.26113 96.2104L9.51232 96.0729L9.50967 96.0597L9.23998 95.9963L9.49381 95.8614L9.49116 95.8456L9.21883 95.7847L9.47001 95.6472L9.46737 95.6314L9.19503 95.5679L9.44886 95.4331L9.44621 95.4199L9.17388 95.3564L9.42771 95.2189L9.42506 95.2057L9.15272 95.1422L9.40391 95.0074V94.9942L9.12893 94.9307L9.38276 94.7932V94.78L9.10777 94.7165L9.36161 94.5817L9.35896 94.5685L9.08662 94.505L9.34045 94.3649L9.33781 94.3543L9.06547 94.2908L9.3193 94.1534L9.31665 94.1401L9.04432 94.0767L9.2955 93.9392V93.926L9.02052 93.8625L9.27435 93.7277L9.27171 93.7144L8.99937 93.651L9.2532 93.5135L9.25055 93.5003L8.97822 93.4368L9.23204 93.302L9.2294 93.2861L8.95706 93.2226L9.20825 93.0878V93.0746L8.93591 93.0111L9.1871 92.8736V92.8604L8.91476 92.797L9.16594 92.6621V92.6489L8.89096 92.5854L9.14215 92.4479V92.4321L8.86981 92.3686L9.12364 92.2364L9.121 92.2206L8.84866 92.1571L9.09984 92.0222V92.0064L8.82486 91.9456L9.07869 91.8081V91.7949L8.80635 91.7314L9.06018 91.5939L9.05489 91.5807L8.78256 91.5199L9.03639 91.3824L9.03374 91.3692L8.7614 91.3057L9.01259 91.1682V91.155L8.73761 91.0942L8.99144 90.954L8.98879 90.9435L8.71645 90.88L8.97028 90.7425V90.7293L8.6953 90.6658L8.94649 90.5284L8.93327 90.375L4.89844 91.2502L7.76459 101.964L9.81109 101.541Z"
                      fill="#C7C7C7"
                    />
                    <g opacity="0.3">
                      <path
                        d="M5.83238 94.7364L8.9127 92.1691L9.07928 92.0289L9.10043 92.0104V92.0025L8.82545 91.9417L9.07928 91.8042V91.791L8.80694 91.7275L9.06077 91.59L9.05548 91.5768L8.78315 91.516L9.03697 91.3785L9.03433 91.3653L8.8466 91.3203L5.63672 93.9961L5.83238 94.7364Z"
                        fill="white"
                      />
                      <path
                        d="M8.18359 101.883L9.62725 101.584L9.89959 101.357L9.78854 101.33L10.0397 101.193L10.0371 101.179L9.76474 101.116L10.0186 100.981L10.0159 100.965L9.74359 100.904L9.99477 100.767L9.99213 100.754L9.71979 100.69L9.97362 100.555L9.97097 100.54L9.83348 100.508L8.18359 101.883Z"
                        fill="white"
                      />
                      <path
                        d="M9.5625 98.0758L9.71057 97.9938V97.9779L9.68413 97.9727L9.5625 98.0758Z"
                        fill="white"
                      />
                      <path
                        d="M7.43785 100.746L9.55045 98.9855L9.56896 98.9696L9.74875 98.8215L9.52401 98.7686L9.77519 98.6338L9.77255 98.6179L9.50286 98.5545L9.75404 98.4196L9.7514 98.4064L9.47906 98.343L9.73024 98.2081V98.1922L9.48699 98.1367L7.24219 100.006L7.43785 100.746Z"
                        fill="white"
                      />
                      <path
                        d="M5.47283 93.3945L8.73559 90.6738L8.84136 90.5865L8.94447 90.4993L8.9339 90.375L8.41831 90.486L5.375 93.0243L5.47283 93.3945Z"
                        fill="white"
                      />
                      <path
                        d="M9.44509 97.0865L9.3499 97.0654L9.60109 96.9305V96.9147L9.42922 96.875L6.95703 98.9374L7.00462 99.1224L9.44509 97.0865Z"
                        fill="white"
                      />
                      <path
                        d="M5.30805 92.7684L7.91509 90.5977L7.54756 90.677L5.25781 92.5833L5.30805 92.7684Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M9.3165 101.458L8.67242 101.638C8.50362 101.686 8.32293 101.664 8.17009 101.578C8.01725 101.492 7.90479 101.349 7.85744 101.18L6.48341 96.2823L8.39275 95.7467L9.76678 100.645C9.81377 100.812 9.79285 100.992 9.70857 101.144C9.62428 101.296 9.48341 101.409 9.3165 101.458Z"
                      fill="#37474F"
                    />
                    <path
                      d="M6.85879 96.505L8.14062 96.1445L7.99785 95.6369L6.71601 95.9974L6.85879 96.505Z"
                      fill="#37474F"
                    />
                    <path
                      d="M7.08879 95.5675L7.49609 95.4531L5.95472 89.9621L5.54741 90.0765L7.08879 95.5675Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M5.21094 89.6479C5.21094 89.6479 5.21094 88.733 5.2506 88.7251L5.38809 88.6855L5.52558 88.6484C5.55202 88.6484 6.03853 89.4152 6.03853 89.4152L5.96185 89.944L5.55731 90.0577L5.21094 89.6479Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M9.23681 100.707L9.57031 100.613L8.36982 96.3338L8.03633 96.4274L9.23681 100.707Z"
                      fill="#263238"
                    />
                    <path
                      d="M8.61963 100.879L8.95312 100.785L7.75264 96.5057L7.41914 96.5992L8.61963 100.879Z"
                      fill="#263238"
                    />
                    <path
                      d="M7.99853 101.054L8.33203 100.961L7.13155 96.6815L6.79805 96.775L7.99853 101.054Z"
                      fill="#263238"
                    />
                    <path
                      d="M9.86987 89.6463L10.5274 89.679C10.7025 89.6877 10.867 89.7656 10.9846 89.8956C11.1023 90.0256 11.1635 90.197 11.1548 90.3721L10.9018 95.4529L8.92122 95.3543L9.17416 90.2735C9.18288 90.0984 9.2608 89.9339 9.39077 89.8163C9.52075 89.6986 9.69213 89.6374 9.86723 89.6461L9.86987 89.6463Z"
                      fill="#37474F"
                    />
                    <path
                      d="M10.5797 95.4336L9.24609 95.3672L9.2198 95.8953L10.5534 95.9617L10.5797 95.4336Z"
                      fill="#37474F"
                    />
                    <path
                      d="M10.0788 95.9469L9.65625 95.9258L9.37168 101.622L9.79421 101.643L10.0788 95.9469Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M9.9973 102.152C9.9973 102.152 9.69323 103.014 9.66415 103.014H9.52401H9.38388C9.35744 103.014 9.14062 102.126 9.14062 102.126L9.38388 101.637L9.80428 101.658L9.9973 102.152Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M9.69794 90.5212L9.35156 90.5039L9.12933 94.9486L9.4757 94.9659L9.69794 90.5212Z"
                      fill="#263238"
                    />
                    <path
                      d="M10.3459 90.4118L10 90.3945L9.77901 94.8337L10.1249 94.8509L10.3459 90.4118Z"
                      fill="#263238"
                    />
                    <path
                      d="M10.9753 90.5876L10.6289 90.5703L10.4067 95.015L10.753 95.0323L10.9753 90.5876Z"
                      fill="#263238"
                    />
                    <path
                      d="M12.7417 101.193L14.4375 100.988L13.1693 90.4777L11.4735 90.6823L12.7417 101.193Z"
                      fill="#263238"
                    />
                    <path
                      d="M11.3986 91.8058L13.5117 91.5508L13.2567 89.4376L11.1436 89.6926L11.3986 91.8058Z"
                      fill="#C7C7C7"
                    />
                    <path
                      d="M13.2695 89.5381C13.2695 89.5381 15.2843 88.0918 16.334 87.9648L16.7729 91.6084L13.5022 91.4471L13.2695 89.5381Z"
                      fill="#C7C7C7"
                    />
                    <g opacity="0.2">
                      <path
                        d="M16.5318 89.6546L15.1701 91.5345H15.1674L14.3398 91.4948L16.4128 88.6445L16.5318 89.6546Z"
                        fill="white"
                      />
                      <path
                        d="M16.1737 88L13.6566 91.4611H13.498L13.4609 91.1517L15.6106 88.1877C15.7919 88.1074 15.9805 88.0445 16.1737 88Z"
                        fill="white"
                      />
                      <path
                        d="M15.1649 88.3867L13.4145 90.7955L13.3828 90.5311L14.8159 88.5586C14.9349 88.5057 15.0539 88.4422 15.1649 88.3867Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M16.8374 90.1578L15.5469 89.9492L15.2211 91.9648L16.5116 92.1733L16.8374 90.1578Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M16.7547 90.4464L17.6246 90.5865C17.7594 90.6077 18.3649 90.0921 18.7747 90.1582L19.2242 90.2296C19.6129 90.293 21.1835 90.9514 21.0195 91.9641L20.9217 92.5669C20.9217 92.5669 20.7842 91.9985 20.4326 91.8398C20.2668 91.7646 20.0782 91.7573 19.9071 91.8196C19.7361 91.8819 19.5963 92.0087 19.5177 92.173C19.3962 92.46 19.2946 92.7551 19.2136 93.0561L17.6272 92.7917C17.6102 92.4265 17.5597 92.0636 17.4765 91.7076C17.376 91.43 16.6172 91.3718 16.6172 91.3718L16.7547 90.4464Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M18.9099 93.0076L17.918 92.8477L17.3401 96.4316L18.332 96.5916L18.9099 93.0076Z"
                      fill="#EBEBEB"
                    />
                    <path
                      d="M18.8253 95.2785L17.3438 95.0391L16.0505 103.041L17.5321 103.281L18.8253 95.2785Z"
                      fill="#263238"
                    />
                    <path
                      d="M20.3207 96.0977H5.10156V104.159H20.3207V96.0977Z"
                      fill="#F31D32"
                    />
                    <g opacity="0.1">
                      <path
                        d="M5.10156 97.0233C5.83925 96.9942 6.57695 96.9783 7.31728 96.9651C8.05762 96.9519 8.79266 96.9651 9.53036 96.9492L11.7461 96.9651C12.4838 96.9783 13.2215 96.9915 13.9591 97.0233C13.2215 97.0576 12.4838 97.0708 11.7461 97.0841L9.53036 97.0999C8.79266 97.0999 8.05497 97.0999 7.31728 97.0841C6.57959 97.0682 5.83925 97.0682 5.10156 97.0233Z"
                        fill="black"
                      />
                      <path
                        d="M8.71094 97.7564C9.67866 97.7246 10.6464 97.7088 11.6194 97.6956L14.5279 97.6797L17.4363 97.6956C18.404 97.7088 19.3718 97.7246 20.3448 97.7564C19.3771 97.7881 18.4093 97.8013 17.4363 97.8145L14.5279 97.833L11.6194 97.8145C10.6464 97.8013 9.67866 97.7881 8.71094 97.7564Z"
                        fill="black"
                      />
                      <path
                        d="M17.7368 98.8618C16.8457 98.8936 15.9573 98.9068 15.0663 98.92L12.3932 98.9385L9.72002 98.92C8.82897 98.9068 7.93792 98.8936 7.04688 98.8618C7.93792 98.8301 8.82897 98.8142 9.72002 98.801L12.3932 98.7852L15.0663 98.8037C15.96 98.8142 16.8457 98.8301 17.7368 98.8618Z"
                        fill="black"
                      />
                      <path
                        d="M5.10156 99.3013C5.66739 99.2696 6.23322 99.2537 6.79905 99.2431C7.36487 99.2325 7.93335 99.2299 8.49917 99.2246C9.065 99.2193 9.63083 99.2246 10.1967 99.2431C10.7625 99.2616 11.3283 99.2696 11.8968 99.3013C11.3283 99.333 10.7625 99.3489 10.1967 99.3594C9.63083 99.37 9.065 99.3727 8.49917 99.378C7.93335 99.3832 7.36752 99.378 6.79905 99.3594C6.23057 99.3409 5.66739 99.333 5.10156 99.3013Z"
                        fill="black"
                      />
                      <path
                        d="M5.10156 99.8306L6.79905 99.7936L8.49917 99.7724L11.8968 99.7539L15.2944 99.7724L16.9945 99.7936L18.692 99.8306L16.9945 99.8676L15.2944 99.8914L11.8968 99.9073L8.49917 99.8887L6.79905 99.8676L5.10156 99.8306Z"
                        fill="black"
                      />
                      <path
                        d="M20.3228 100.254C19.7015 100.286 19.0801 100.299 18.472 100.313C17.8639 100.326 17.2319 100.313 16.6211 100.331C16.0104 100.35 15.3784 100.331 14.7571 100.313C14.1357 100.294 13.5144 100.286 12.9062 100.254C13.5276 100.223 14.149 100.207 14.7571 100.196C15.3652 100.186 15.9998 100.183 16.6211 100.178C17.2425 100.172 17.8612 100.178 18.472 100.196C19.0828 100.215 19.7015 100.223 20.3228 100.254Z"
                        fill="black"
                      />
                      <path
                        d="M10.8555 100.901C11.4292 100.869 12.003 100.856 12.5767 100.843C13.1505 100.829 13.7243 100.843 14.298 100.824C14.8718 100.806 15.4455 100.824 16.0193 100.843C16.5931 100.861 17.1642 100.869 17.7379 100.901C17.1642 100.932 16.5931 100.948 16.0193 100.959C15.4455 100.969 14.8718 100.972 14.298 100.977C13.7243 100.983 13.1505 100.977 12.5767 100.959C12.003 100.94 11.4292 100.932 10.8555 100.901Z"
                        fill="black"
                      />
                      <path
                        d="M5.10156 102.088C6.04813 102.057 6.99206 102.043 7.93863 102.03L10.7731 102.012L13.6101 102.03C14.5567 102.03 15.5006 102.057 16.4472 102.088C15.5006 102.12 14.5567 102.136 13.6101 102.147L10.7731 102.165L7.93863 102.147C6.99206 102.139 6.04813 102.123 5.10156 102.088Z"
                        fill="black"
                      />
                      <path
                        d="M20.3205 102.903C19.686 102.935 19.0514 102.948 18.4168 102.962C17.7822 102.975 17.1503 102.962 16.5157 102.98C15.8812 102.999 15.2466 102.98 14.612 102.962C13.9774 102.943 13.3455 102.935 12.7109 102.903C13.3455 102.872 13.9801 102.856 14.612 102.843C15.2439 102.829 15.8812 102.843 16.5157 102.827C17.1503 102.811 17.7849 102.827 18.4168 102.845C19.0487 102.864 19.686 102.882 20.3205 102.903Z"
                        fill="black"
                      />
                      <path
                        d="M5.10156 103.586C5.63037 103.555 6.15918 103.539 6.688 103.528C7.21681 103.518 7.74562 103.515 8.27443 103.51C8.80324 103.504 9.33205 103.51 9.86086 103.528C10.3897 103.547 10.9185 103.555 11.4473 103.586C10.9185 103.618 10.3897 103.631 9.86086 103.645C9.33205 103.658 8.80324 103.658 8.27443 103.663C7.74562 103.668 7.21681 103.663 6.688 103.645C6.15918 103.626 5.63302 103.618 5.10156 103.586Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </div>{" "}
                <br />
                <div className="text-black text-lg">Vendor</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*===================== modal end */}
    </div>
  );
}