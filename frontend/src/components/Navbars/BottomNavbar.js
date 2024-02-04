import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import noteContext from "../../context/noteContext";
import logo from './assets/logo.png';

export default function BottomNavbar() {
    const { login, name } = useContext(noteContext);
    const [value, setValue] = useState("");

    const search_suggestion = [
        {
            service_name: "Servicing",
            link: '/servicing'
        },
        {
            service_name: "Modification",
            link: '/modification'
        },
        {
            service_name: "Spares",
            link: '/spares'
        },
        {
            service_name: "Accessories",
            link: '/accessories'
        },
        {
            service_name: "Contact",
            link: '/contact'
        },
        {
            service_name: "Testimonials",
            link: '/servicing'
        }
    ]

    const handlechange = (e) => {
        setValue(e.target.value);
    }


    return (
        /* This navbars will show on mobile screens only */
        <div className='sm:hidden'>
          
           {/*changes ->>>>>>>>> logo has been removed , MECH BUDDY in this buddy color has changed to white and background color of this has been changed to black*/}


            {/* this is top navbar on mobile size */}
            <nav class="bg-[#000000] border-gray-200 ">
                <div class="max-w-screen-xl flex  items-center justify-between   mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex  items-center">
                    
                        <span class="text-[#F31D32] self-center text-xl font-bold whitespace-nowrap ">MECH <span class="text-white">BUDDY</span></span>
                    </a>

                    <div class="items-center justify-end   w-1/2 flex " id="navbar-search">
                        <div class="relative md:hidden">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">

                                <input type="text" value={value} onChange={handlechange} id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-[#F31D32] rounded-lg bg-[#FFFFFF]" placeholder="Search..." />
                                <div className="absolute z-10 mt-10 bg-white w-full ">
                                    {
                                        search_suggestion.filter((item) => {
                                            const searchterm = value.toLowerCase();
                                            const service_name = item.service_name.toLowerCase();

                                            return searchterm && service_name.startsWith(searchterm);
                                        })
                                            .map((item) => {
                                                return (
                                                    <Link to={item.link}>
                                                        <div className="border-2 p-1 border-red-500 hover:bg-red-500 hover:border-white">{item.service_name}</div>

                                                    </Link>

                                                )
                                            })
                                    }

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>




            {/* this is bottom navbar on mobile size */}
            <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#FFFFFF] border-t border-gray-200 ">
                <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <Link to="/" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg class="w-5 h-5 mb-2 text-[#F31D32] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>

                    </Link>
                    <Link to='/about' class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg class="w-5 h-5 text-[#F31D32] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 21">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.24 7.194a24.16 24.16 0 0 1 3.72-3.062m0 0c3.443-2.277 6.732-2.969 8.24-1.46 2.054 2.053.03 7.407-4.522 11.959-4.552 4.551-9.906 6.576-11.96 4.522C1.223 17.658 1.89 14.412 4.121 11m6.838-6.868c-3.443-2.277-6.732-2.969-8.24-1.46-2.054 2.053-.03 7.407 4.522 11.959m3.718-10.499a24.16 24.16 0 0 1 3.719 3.062M17.798 11c2.23 3.412 2.898 6.658 1.402 8.153-1.502 1.503-4.771.822-8.2-1.433m1-6.808a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                        </svg>

                    </Link>
                    <Link to='/cart' type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg class="w-5 h-5 mb-2 text-[#F31D32] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                        </svg>

                    </Link>

                    {
                        login ? <Link to="/edit_profile" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <svg class="w-5 h-5 mb-2 text-[#F31D32] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </Link> : <Link to="/signup" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <svg class="w-5 h-5 mb-2 text-[#F31D32] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>

                        </Link>
                    }

                </div>
            </div>

        </div>
    )
}
