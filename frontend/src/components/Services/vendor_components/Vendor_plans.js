import React, { useContext, useState } from 'react';

import { useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import noteContext from '../../../context/noteContext.js';
import { DotSpinner } from '@uiball/loaders'
// import { useNavigate } from 'react-router-dom';

export default function Vendor_plans(props) {
    const { vendor_data, vendor_id } = props;
    // const history = useNavigate();
    const scrollContainerRef = useRef(null);
    const { item, setItem } = useContext(noteContext);
    const [loading, setLoading] = useState(false);
    const [addid, setAddid] = useState("");
    useEffect(() => {
        scrolltocenter();
    }, []);

    const notify = () => toast("Added to cart", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });
    const notify2 = () => toast.warn('You must login !', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;
    const cartadd = async (item_title, item_price) => {
        setLoading(true);
        const response = await fetch(`http://localhost:8000/api/cart/addcart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
            body: JSON.stringify({ item_id: vendor_id, item_title, item_category: "servicing", item_price, item_count: 1 }),
        });
        const json = await response.json();
        if (json.success) {
            /* alert("added to cart"); */
            setLoading(false);

            notify();

        }
        else {
            setLoading(false);

            alert("fail");
            /* props.showAlert("Invalid Credentials", "danger"); */
        }
    }

    const handleaddtocart = async (e, item_id, item_title, item_price) => {
        e.preventDefault();
        if (!localStorage.getItem('token')) {
            notify2();
            return;
        }
        setAddid(item_id);
        if (item.length === 0 || item[0].item_id === vendor_id) {
            await cartadd(item_title, item_price);
        }
        else {
            let a = window.confirm("this item is from different vendors, so removing it will clear all the cart ?")
            if (a) {
                try {
                    const response = await fetch(`http://localhost:8000/api/cart/deleteallcart`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": localStorage.getItem('token')
                        }
                    });
                    const json = await response.json();
                    if (json.success) {
                        /* const newCart = item.filter((item) => { return item._id !== id }); */
                        setItem([]);
                        await cartadd(item_title, item_price);
                    }
                    else {
                        alert("deletion fail");
                    }
                } catch (error) {
                    console.log(error);
                }

            }

        }
    }

    const scrolltocenter = () => {
        if (scrollContainerRef.current) {
            const scrollcontainer = scrollContainerRef.current;
            const centerOffset = (scrollcontainer.scrollWidth - scrollcontainer.offsetWidth) / 2;
            scrollcontainer.scrollLeft = centerOffset;
        }
    }

    return (
        <div>
            <div className="  bg-vendorplanbg pb-10 flex flex-col	 justify-center items-center  " >

                <h1 className="flex justify-center text-white items-center w-full  h-12 text-center mb-8 bg-[#000000] text-2xl font-bold	 " >
                    OUR SERVICE PLANS
                </h1>

                {/* //card */}

                <div ref={scrollContainerRef} className={`w-full  flex overflow-auto   gap-28  md:w-auto md:grid ${vendor_data.service_category === 'Car' ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}   sm:gap-40 md:gap-4 sxl:gap-12 xl:gap-36`}>
                    {vendor_data.plans.map((item) => {
                        return (
                            <div key={item._id} className='  '>

                                <div class="w-[150%] flex flex-col md:w-full sxl:w-full  max-w-sm   border  rounded-lg shadow  bg-[#000000] border-gray-700">
                                    <h5 class="mb-4  py-4 sm:px-12 text-xl font-medium text-center text-white ">{item.planname}</h5>

                                    <div class="flex p-2 items-baseline text-gray-900 bg-[#F31D32] text-dark" style={{ clipPath: " polygon(0 0, 66% 0, 53% 100%, 0 100%)" }}>
                                        <span class="text-xl font-semibold">Rs</span>
                                        <span class="text-4xl font-extrabold tracking-tight">{item.price}</span>
                                        <span class="ml-1 text-xl font-normal text-[#1A1616] ">/month</span>
                                    </div>
                                    <ul class="space-y-5 py-0 px-8 sm:px-12 sm:py-4 my-7">
                                        <li class="flex space-x-3 items-center">
                                            <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            <span class="text-base font-normal leading-tight text-white ">Oil Replacement</span>
                                        </li>
                                        <li class="flex space-x-3">
                                            <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            <span class="text-base font-normal leading-tight text-white ">Air Filter Clean</span>
                                        </li>
                                        <li class="flex space-x-3">
                                            <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            <span class="text-base font-normal leading-tight text-white ">Brake Service & Battery Check</span>
                                        </li>
                                        <li class="flex space-x-3">
                                            <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            <span class="text-base font-normal leading-tight text-white ">Battery Check</span>
                                        </li>
                                        <li class="flex space-x-3">
                                            <svg class="flex-shrink-0 w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            <span class="text-base font-normal leading-tight text-white ">Wash</span>
                                        </li>
                                        
                                        <li class="flex space-x-3 line-through decoration-gray-500">
                                            <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            <span class="text-base font-normal leading-tight text-white ">Sketch Files</span>
                                        </li>
                                        <li class="flex space-x-3 line-through decoration-gray-500">
                                            <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            <span class="text-base font-normal leading-tight text-white ">API Access</span>
                                        </li>

                                    </ul>
                                    <button onClick={(event) => handleaddtocart(event, item._id, item.planname + " Package of Servicing", item.price)} type="button" class="focus:outline-none text-white  font-medium rounded-lg text-sm px-5 py-2.5 mx-12 mb-2 bg-red-600 ">
                                        {addid === item._id && loading ? <div className='flex justify-center'><DotSpinner size={40} speed={0.9} color="white" /></div> : "Book Now"}
                                    </button>
                                    {/* //changes item._id from vendor_id */}
                                </div>


                                    < ToastContainer />
                            </div>
                        )
                    })}





                </div>




            </div>
        </div>
    )
}
