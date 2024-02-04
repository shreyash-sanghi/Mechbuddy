import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import Paymentmode from './Payment_dropdown';
import noteContext from "../../context/noteContext";
import { DotSpinner } from '@uiball/loaders'
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
//only address has been manged

export default function Drawer_component(props) {
    const history = useNavigate();

    const { mode, option,handlegetcart,item,formData, setFormData} = useContext(noteContext);
    const [loading, setLoading] = useState(false);

    
    const { name, mobile, pincode, state, city, full_addres, landmark } = formData;

    const [isOpen1, setIsOpen1] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpen1((prevState) => !prevState)
    }
    const toggleDrawer2 = () => {
        setIsOpen2((prevState) => !prevState)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    //handle payment
    

    const handleOpenRazorpay = (data) => {
        const options = {
            key: 'rzp_test_iCO3kPkwJRQi3L',
            amount: Number(data.amount),
            currency: data.currency,
            order_id: data.id,
            name: "Mechbuddy Testing",
            description: "Apka apna mechanic",
            handler: async function (response) {

                try {
                    console.log("verifying");
                    const data = await fetch(`http://localhost:8000/api/payment/verify`, {
                        method: "POST",


                        headers: {
                            "Content-Type": "application/json",

                        },
                        body: JSON.stringify({ response }),



                    });
                    const json = await data.json();
                    
                    if (json.success) {
                        history('/order_complete');


                    }
                    else {
                        alert("fail");

                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }

        const rzp = new window.Razorpay(options);
        rzp.open();
    }

    const handlesubmit = async (amount) => {
        try {
            console.log("mode is ", mode);
            if (mode.value === "Cash On Service") {
                //hit api to submit final orders 
                
                setLoading(true);
                handlegetcart();
                const response = await fetch(`http://localhost:8000/api/payment/order`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": localStorage.getItem('token')

                    },

                    body: JSON.stringify({time_slot:option.value,products:item,orderStatus:"Received",paymentStatus:"Cash On Delivery", totalAmount:amount, name, mobile, pincode, state, city, full_addres, landmark }),

                });
                const json = await response.json();
                
                if (json.success) {
                    setLoading(false);
                    history('/order_complete')
                }
                else {
                    setLoading(false);
                    alert("fail");
                }
            }
            else {
                /* const response = await fetch(`http://localhost:8000/api/payment/orders`, {
                    method: "POST",


                    headers: {
                        "Content-Type": "application/json",

                    },
                    body: JSON.stringify({ amount }),



                });
                const json = await response.json();
                
                if (json.success) {
                    alert('redirecting to payment page');

                    handleOpenRazorpay(json.data);

                }
                else {
                    alert("fail");

                } */
                alert("Online payment is not available at moment");
            }


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>


            <div class="text-center">
                {/*  <button class="text-white bg-[#F31D32]  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none " type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-body-scrolling="true" data-drawer-placement="right" data-drawer-backdrop="false" aria-controls="drawer-right-example">
                    Continue
                </button> */}
                <button class="text-white bg-[#F31D32]  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none " onClick={toggleDrawer}>Continue</button>

            </div>


            {/* address drawer */}
            <Drawer
                open={isOpen1}
                onClose={toggleDrawer}
                size={320}
                direction='right'
                className='bla bla bla p-4'
            >
                <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-[#F31D32]"><svg class="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>Add Your Address</h5>
                <button onClick={toggleDrawer} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
                <form>
                    <div class="relative z-0 w-full mb-6 group">
                        <input onChange={handleInputChange} type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input onChange={handleInputChange} type="number" name="mobile" id="mobile" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="mobile" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input onChange={handleInputChange} type="number" name="pincode" id="pincode" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="pincode" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pincode</label>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input onChange={handleInputChange} type="text" name="state" id="state" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="state" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input onChange={handleInputChange} type="text" name="city" id="city" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="city" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input onChange={handleInputChange} type="text" name="full_address" id="full_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="full_address" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Address</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input required onChange={handleInputChange} type="text" name="landmark" id="landmark" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                            <label for="landmark" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Landmark</label>
                        </div>
                    </div>


                    <div class="grid grid-cols-2 gap-4">

                        <button type="button" onClick={toggleDrawer} class="px-4 py-2 text-sm font-medium text-center  border  rounded-lg focus:outline-none  hover:text-[#F31D32] focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700">Previous</button>
                        <button type="button" onClick={toggleDrawer2} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#F31D32]   rounded-lg hover:bg-[#c33344] focus:ring-4 focus:ring-blue-300  focus:outline-none">Save and Continue <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></button>
                    </div>
                </form>
            </Drawer>

            <Drawer
                open={isOpen2}
                onClose={toggleDrawer2}
                direction='right'
                size={320}
                className='bla bla bla p-4'
            >

                <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-[#F31D32]"><svg class="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>Book Your Slot</h5>
                <button onClick={toggleDrawer2} type="button" data-drawer-hide="drawer-payment-example" aria-controls="drawer-payment-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
                <p class="mb-6 text-sm text-dark-900">  Choose at your convenience</p>

                <Dropdown></Dropdown>
                <Paymentmode></Paymentmode>





                <div class="grid grid-cols-2 gap-4">
                    <button button type="button" onClick={toggleDrawer2} class="px-4 py-2 text-sm font-medium text-center  border  rounded-lg focus:outline-none  hover:text-[#F31D32] focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700">Previous</button>
                    <button onClick={() => handlesubmit(props.amount)} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg  bg-[#F31D32] hover:bg-[#ff808c] hover:ring-4  ">
                        {loading ? <div className='ml-auto mr-auto'><DotSpinner size={40} speed={0.9} color="red" /></div> : "Proceed"}

                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></button>
                </div>




            </Drawer>

            {/*address */}
            {/*  <div id="drawer-right-example" class="fixed top-0 right-0 z-100  h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-gray-800 w-80 " tabindex="-1" aria-labelledby="drawer-right-label">
                <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>Add Your Address</h5>
                <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
                <p class="mb-6 text-sm text-gray-500 ">  we can put out addresss</p>

                Address handling
                 <form>
                    <div class="relative z-0 w-full mb-6 group">
                        <input onChange={handleInputChange} type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input onChange={handleInputChange} type="number" name="mobile" id="mobile" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="mobile" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input onChange={handleInputChange} type="number" name="pincode" id="pincode" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="pincode" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pincode</label>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input onChange={handleInputChange} type="text" name="state" id="state" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="state" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input onChange={handleInputChange} type="text" name="city" id="city" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="city" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input onChange={handleInputChange} type="text" name="full_address" id="full_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="full_address" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Address</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input onChange={handleInputChange} type="text" name="landmark" id="landmark" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="landmark" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Landmark</label>
                        </div>
                    </div>


                    <div class="grid grid-cols-2 gap-4">

                        <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="px-4 py-2 text-sm font-medium text-center  border  rounded-lg focus:outline-none  hover:text-blue-700 focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700">Previous</button>
                        <button type="button" data-drawer-target="drawer-payment-example" data-drawer-show="drawer-payment-example" data-drawer-body-scrolling="true" data-drawer-placement="right" data-drawer-backdrop="false" aria-controls="drawer-right-example" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save and Continue <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></button>
                    </div>
                </form> 


            </div> */}

            {/* payment */}
            {/* <div id="drawer-payment-example" class="fixed top-0 right-0 z-100  h-screen p-4 overflow-y-auto transition-transform translate-x-full  w-80 bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
                <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>Book Your Slot</h5>
                <button type="button" data-drawer-hide="drawer-payment-example" aria-controls="drawer-payment-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
                <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">  Choose at your convenience</p>
                
                <Dropdown></Dropdown>
                <Paymentmode></Paymentmode>





                <div class="grid grid-cols-2 gap-4">
                    <button button type="button" data-drawer-hide="drawer-payment-example" aria-controls="drawer-payment-example" class="px-4 py-2 text-sm font-medium text-center  border  rounded-lg focus:outline-none  hover:text-blue-700 focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700">Previous</button>
                    <button onClick={() => handlesubmit(props.amount)} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg  bg-blue-600 hover:bg-blue-700  ">
                        {loading ? <div className='ml-auto mr-auto'><DotSpinner size={40} speed={0.9} color="red" /></div> : "Proceed"}

                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></button>
                </div>



            </div> */}

        </div>
    )
}
