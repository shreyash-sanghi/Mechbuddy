import React, { useEffect, useState } from 'react';
import Vendor_plans from './vendor_components/Vendor_plans';
// import Addons from './vendor_components/Addons';
import { DotSpinner } from '@uiball/loaders'
const urlParams = new URLSearchParams(window.location.search);
const vendorId = urlParams.get('vendor_id');

export default function Vendor() {
    const [vendorDetail, setVendorDetail] = useState([])
    const [vendorId, setVendorId] = useState('')
    const [loading,setLoading]=useState(false);

    const fetchVendor = async () => {
        try {
            setLoading(true);
            let serviceApi = `http://localhost:8000/api/auth/getvendorbyid/${vendorId}`;
            const response = await fetch(serviceApi, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            if (json.success) {
                setLoading(false);
                setVendorDetail(json.vendors)
            }
            else {
                setLoading(false);
                alert('error')
            }
        } catch (error) {
            console.log(error, 44);
        }
    }
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const newVendorId = urlParams.get('vendor_id');
        setVendorId(newVendorId);
        if(vendorId){
            fetchVendor();
        }
    },[vendorId])

    return (
        <div>
            {/* top image on vendor page */}
            {
                loading?<DotSpinner size={40} speed={0.9} color="red"/>:
                vendorDetail.map((item) => {
                    console.log(item.plans);
                    return (

                           <>
                            <div className='bg-vendorbg bg-cover p-8 sm:p-16 lg:p-28  h-full text-white text-center text-2xl sm:text-4xl font-bold'>
                                {item.shop_name.toUpperCase()}
                            </div>

                            <div className='flex flex-col sm:flex-row bg-[#FFFFFF] gap-0 sm:gap-12'>
                                <div className='sm:w-1/2 py-8 px-8 sm:px-4 md:px-8 lg:px-12'>
                                    <div className='text-justify'>
                                    {item.vendor_description}                                    </div>
                                    <div class="flex items-center space-x-1 pt-4">
                                        <svg class="w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>

                                </div>

                                <div className='flex justify-around gap-8 sm:gap-8 md:gap-16 lg:gap-28 py-4 sm:py-8 px-16'>
                                    <div className='text-center   '>
                                        <h2 className='text-xl '>Working Days</h2>
                                        <div className='bg-[#F31D32] mt-4 p-2  xl:py-2 xl:px-8 rounded-md'>{item.vendor_working_days}</div>
                                    </div>

                                    <div className='text-center  '>
                                        <h2 className='text-xl '>Working Hours</h2>
                                        <div className='bg-[#F31D32] mt-4 p-2  xl:py-2 xl:px-8 rounded-md'>{item.vendor_working_hours}</div>
                                    </div>




                                </div>
                            </div>

                            <Vendor_plans vendor_data={item} vendor_id={vendorId} />
                           {/*  <Addons addon_data={item} vendor_id={vendorId}></Addons> */}
                        </>

                    )
                })
            }



        </div>
    )
}
