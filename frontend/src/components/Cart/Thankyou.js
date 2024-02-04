import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import sample from './assets/SPDEMO.jpg';
import noteContext from "../../context/noteContext";
import thankyou from './assets/thankyou.jpg'
export default function Thankyou() {
    const [ProductTitle, SetProductTitle] = useState(true);
    const { option, setOptions, formData, item } = useContext(noteContext);

    const handleMore = () => {
        SetProductTitle(false);
    }

    const handleLess = () => {
        SetProductTitle(true);
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });

    const amount = item.reduce((accumulator, currentItem) => accumulator + currentItem.item_price, 0)

    return (
        <div className='pt-28 pb-12 bg-thankyou'>
            <div className='text-center flex flex-col'>
                <div className='flex justify-center '>
                    <svg class="w-6 h-6 text-[#58C732]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div className='font-bold text-xl sm:text-3xl text-[#F31D32]'>
                    Thank You!
                </div>
                <div className='text-center text-xs mt-4'>
                    Your Order Is Complete
                </div>
                {/* <div>
                    Here are the order details
                </div> */}
                <div className='m-4'>
                    <h3 className='font-bold my-2'>FOLLOW US:</h3>
                    <div className="flex flex-col justify-center items-center">
                        {/* ====================  Social Logo */}

                        <ul class=" flex gap-6 mb-8">
                            <li>
                                <Link
                                    to='https://www.facebook.com/profile.php?id=100089814726715&mibextid=LQQJ4d'
                                    rel="noreferrer"
                                    target="_blank"
                                    class="text-[#F31D32] transition hover:opacity-75 "
                                >
                                    <span class="sr-only">Facebook</span>

                                    <svg
                                        class="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='https://www.instagram.com/mechbuddy_/'
                                    rel="noreferrer"
                                    target="_blank"
                                    class="text-[#F31D32] transition hover:opacity-75"
                                >
                                    <span class="sr-only">Instagram</span>

                                    <svg
                                        class="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </li>

                            <li className="flex items-center">
                                <Link
                                    to='https://x.com/mechbuddy_?s=11&t=fLuXJG_QilREvwKMUCrU6Q'
                                    rel="noreferrer"
                                    target="_blank"
                                    class="text-[#F31D32] transition hover:opacity-75"
                                >
                                    <span class="sr-only">Twitter</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.0"
                                        className="h-4 w-4"
                                        viewBox="0 0 2400.000000 2453.000000"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <metadata>
                                            Created by potrace 1.16, written by Peter Selinger
                                            2001-2019
                                        </metadata>
                                        <g
                                            transform="translate(0.000000,2453.000000) scale(0.100000,-0.100000)"
                                            fill="currentColor"
                                            stroke="none"
                                        >
                                            <path d="M0 24525 c0 -2 2106 -3069 4680 -6816 2574 -3746 4680 -6812 4680 -6815 0 -2 -2106 -2452 -4680 -5444 -2574 -2992 -4680 -5442 -4680 -5445 0 -3 478 -5 1063 -4 l1062 0 4089 4755 c2249 2614 4092 4754 4095 4754 3 0 1475 -2139 3271 -4753 l3265 -4752 3578 -3 c1967 -1 3577 1 3577 4 0 3 -2185 3186 -4855 7072 -4808 6997 -4855 7066 -4837 7086 13 15 8729 10149 8900 10349 14 16 -37 17 -1050 17 l-1064 0 -3865 -4492 c-2125 -2470 -3869 -4498 -3874 -4505 -8 -11 -749 1061 -3105 4491 l-3095 4505 -3577 1 c-1968 0 -3578 -2 -3578 -5z m7490 -3540 c746 -1067 4091 -5853 7435 -10635 3343 -4782 6098 -8723 6122 -8757 l45 -63 -1620 0 -1620 0 -3075 4397 c-1690 2419 -5046 7220 -7457 10668 -2410 3449 -4393 6285 -4407 6303 l-24 32 1622 -2 1622 -3 1357 -1940z" />
                                        </g>
                                    </svg>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='https://youtube.com/@mechbuddy_?si=Ub3jJ0d9SZnwSR7_'
                                    rel="noreferrer"
                                    target="_blank"
                                    class="text-[#F31D32] transition hover:opacity-75"
                                >
                                    <span class="sr-only">Youtube</span>

                                    <svg class="w-6 h-6 text-[#F31D32]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                        <path fill-rule="evenodd" d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" clip-rule="evenodd" />
                                    </svg>
                                </Link>
                            </li>


                        </ul>

                        {/* ====================  Social Logo  end */}

                        {/* ========================================  company logo */}


                        {/* =====================  company desc */}


                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row bg-[#000515] m-4 500:m-12  sm:m-24 rounded-xl py-2 md:px-8 md:py-12'>
                <div className='flex justify-center m-4 lg:flex-none lg:w-[30%]'>
                    <img className='lg:w-full h-40 lg:h-[68%] aspect-square object-cover' src={thankyou} alt="" srcset="" />
                    {/* <img className='aspect-square object-cover' src={sample} alt="" srcset="" /> */}
                </div>
                <div className='flex flex-col px-4 lg:w-[70%]'>
                    {/* short details */}
                    <div className='flex justify-around gap-4 text-center rounded-md bg-white text-gray-950'>
                        <div >
                            <h3>Name</h3>
                            <p>{formData.name}</p>
                        </div>
                        <div>
                            <h3>Date</h3>
                            <p>{formattedDate}</p>
                        </div>
                        <div>
                            <h3>Order No.</h3>
                            <p>#110343</p>
                        </div>
                    </div>

                    <div>
                        <h4 className=' font-semibold text-white my-4'>Order Details</h4>
                        <div className='flex flex-col gap-2 text-white'>
                            <div className='flex justify-between gap-40'>
                                {
                                    ProductTitle ? <div className='text-justify'>

                                        <span className=' text-xs' onClick={handleMore}>Read Item Name</span>
                                    </div> : <div className='text-justify'>
                                        {item.map((temp => {
                                            return (
                                                temp.item_title + ', '
                                            )
                                        }))}<span className='text-xs' onClick={handleLess}>Read Less</span></div>
                                }

                                <div>Qty:1</div>
                            </div>
                            <div className='flex justify-between border-t pt-2'>
                                <div>Total:</div>
                                <div>₹ {amount}</div>
                            </div>
                            <div className='flex justify-between border-t pt-2'>
                                <div>Shipping Charges:</div>
                                <div>₹ 0</div>
                            </div>
                            <div className='flex justify-between border-t pt-2'>
                                <div>Payment Method:</div>
                                <div>Cash On Service</div>
                            </div>
                            <div className='flex justify-between border-t border-b pt-2'>
                                <div>Sub-total:</div>
                                <div>₹ {amount}</div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
