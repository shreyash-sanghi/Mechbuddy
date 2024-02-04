import React from 'react';
import { useEffect, useRef } from 'react';

export default function OurOffers() {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        scrolltocenter();
    }, []);

    const scrolltocenter = () => {
        if (scrollContainerRef.current) {
            const scrollcontainer = scrollContainerRef.current;
            const centerOffset = (scrollcontainer.scrollWidth - scrollcontainer.offsetWidth) / 2;
            scrollcontainer.scrollLeft = centerOffset;
        }
    }
    return (

        <div className='w-full'>
            <div className="  bg-[#000000] pb-10 flex flex-col	 justify-center items-center  " >

            


                <h1 className="flex justify-center text-[#F31D32] items-center w-full  h-12 text-center mb-8 bg-[#000000] text-2xl font-bold border-y-2 space-x-[7px]" >
                    <span>OUR</span> <span className='text-white word-spacing'> OFFERS</span>
                </h1>


                <p className="my-4 text-white  from-neutral-100  font-semibold  text-2xl"> Plans that we offer !</p>



                {/* //card */}

                <div ref={scrollContainerRef} className='w-full  flex overflow-auto   gap-28  md:w-auto md:grid  sm:grid-cols-2 sm:gap-40 md:gap-4 sxl:gap-12 xl:gap-36'>

                    <div className='  '>

                        <div class="w-[150%] md:w-full sxl:w-full  max-w-sm   border  rounded-lg shadow  bg-white border-gray-700">
                            <h5 class="mb-4  py-4 sm:px-12 text-xl font-medium text-center text-[#1A1616] ">Basic plan</h5>

                            <div class="flex p-2 items-baseline text-gray-900 bg-[#F31D32] text-dark" style={{ clipPath: " polygon(0 0, 66% 0, 53% 100%, 0 100%)" }}>
                                <span class="text-xl font-semibold">Rs</span>
                                <span class="text-4xl font-extrabold tracking-tight">349</span>
                                <span class="ml-1 text-xl font-normal text-[#1A1616] ">/month</span>
                            </div>
                            <ul role="list" class="space-y-5 py-0 px-8 sm:px-12 sm:py-4 my-7">
                                <li class="flex space-x-3 items-center">
                                    <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Oil Replacement</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4    1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Air filter clean</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Brake Service</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Wash Service</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Battery Check</span>
                                </li>
                                <li class="flex space-x-3 line-through decoration-gray-500">
                                    <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Carburator Clean</span>
                                </li>
                                <li class="flex space-x-3 line-through decoration-gray-500">
                                    <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Wires and Cables Check</span>
                                </li>
                               
                            </ul>
                            
                        </div>


                    </div>
                    <div className='   '>

                        <div class="w-[150%] md:w-full sxl:w-full  max-w-sm   border  rounded-lg shadow  bg-[#F31D32] border-gray-700">
                            <h5 class="mb-4  py-4 sm:px-12 text-xl font-medium text-center text-[#1A1616] ">Standard plan</h5>

                            <div class="flex p-2 items-baseline text-gray-900 bg-white text-dark" style={{ clipPath: " polygon(0 0, 66% 0, 53% 100%, 0 100%)" }}>
                                <span class="text-xl font-semibold">Rs</span>
                                <span class="text-4xl font-extrabold tracking-tight">449</span>
                                <span class="ml-1 text-xl font-normal text-[#1A1616] ">/month</span>
                            </div>
                            <ul role="list" class="space-y-5 py-0 px-8 sm:px-12 sm:py-4 my-7">
                                <li class="flex space-x-3 items-center">
                                    <svg class="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Oil Replacement</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Air filter change</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Carburator Clean</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Wash Service</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Brake Service</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Wires and Cables check</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Battery Check</span>
                                </li>
                                

                            </ul>
                            
                        </div>


                    </div>
                    {/* <div className='  '>

                        <div class="w-[150%] md:w-full sxl:w-full  max-w-sm   border  rounded-lg shadow  bg-white border-gray-700">
                            <h5 class="mb-4  py-4 sm:px-12 text-xl font-medium text-center text-[#1A1616] ">Standard plan</h5>

                            <div class="flex p-2 items-baseline text-gray-900 bg-[#F31D32] text-dark" style={{ clipPath: " polygon(0 0, 66% 0, 53% 100%, 0 100%)" }}>
                                <span class="text-xl font-semibold">Rs</span>
                                <span class="text-4xl font-extrabold tracking-tight">3000</span>
                                <span class="ml-1 text-xl font-normal text-[#1A1616] ">/month</span>
                            </div>
                            <ul role="list" class="space-y-5 py-0 px-8 sm:px-12 sm:py-4 my-7">
                                <li class="flex space-x-3 items-center">
                                    <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">2 team members</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">20GB Cloud storage</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Integration help</span>
                                </li>
                                <li class="flex space-x-3 line-through decoration-gray-500">
                                    <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">Sketch Files</span>
                                </li>
                                <li class="flex space-x-3 line-through decoration-gray-500">
                                    <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="text-base font-normal leading-tight text-[#1A1616] ">API Access</span>
                                </li>
                               
                            </ul>
                            
                        </div>


                    </div> */}
                    
                </div>




            </div>
        </div>
    )
}
