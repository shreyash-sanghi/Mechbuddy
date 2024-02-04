import React, { useEffect, useState, useContext } from 'react'
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import noteContext from '../../../context/noteContext.js';
import { DotSpinner } from '@uiball/loaders'


export default function Addons(props) {
    const { addon_data, vendor_id } = props;
    const [cartitem, setCartitem] = useState('');
    const { cartflag, setCartFlag, item, setItem } = useContext(noteContext);
    const [loading, setLoading] = useState(false);
    const [flagid,setFlagid]=useState("");

    // const history=useNavigate();

    const handlegetcart = async (e) => {

        try {
            const response = await fetch(`http://localhost:8000/api/cart/getcart`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                }

            });
            const json = await response.json();
            
            if (json.success) {
                let cartitems = json.cartItems;
                
                if (cartitems.length !== 0) {
                    
                    setCartitem(json.cartItems[0].item_id);
                }
            }
            else {
                alert("fail");

            }
        } catch (error) {
            console.log(error);
        }
    }
    const cartadd = async (item_title, item_price) => {
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

    const handleaddtocart = async (e, item_title, item_price,itemId) => {
        e.preventDefault();
        if(!localStorage.getItem('token')){
            notify2();
            return ;
        }
        setFlagid(itemId);
        setLoading(true);
        if (item.length === 0 || item[0].item_id === vendor_id) {
            await cartadd(item_title, item_price);

        }
        else {
            let a = window.confirm("are you sure ?")
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
                        setLoading(false);
                        setItem([]);
                        await cartadd(item_title, item_price);

                    }
                    else {
                        setLoading(false);
                        alert("deletion fail");
                    }

                } catch (error) {
                    console.log(error);
                }

            }

        }


    }

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
    

    useEffect(() => {
        handlegetcart();
    }, [cartflag])


    return (
        <div>
            <div className="bg-[#EBEBEB] text-white">
                <h1 className="flex justify-center text-white items-center w-full  h-12 text-center mb-8 bg-[#000000] text-2xl font-bold	 " >
                    ADDON SERVICES
                </h1>
                {/* list of cards */}
                <div className='flex flex-col p-4 lg:px-32 gap-4'>
                    {/* single card */}
                    {
                        addon_data.addons.map((item) => {
                            return (
                                <div className='flex  bg-[#000000E8] p-2 md:py-4 md:px-16 justify-start md:justify-between rounded-md'>
                                    {/* image and rating */}
                                    <div className='bg-red absolute' style={{ clipPath: "polygon(19% 0, 31% 0, 0 50%, 0 34%)" }}></div>
                                    <div className='flex flex-col'>
                                        <div className='w-[28vw] 570:w-[20vw] md:w-[15vw]  sm:w-auto'>
                                            <img className='w-[28vw] 570:w-[20vw] md:w-[15vw] h-28 rounded-lg' src="https://th.bing.com/th/id/OIP._SZM30_l7zXHQ3ShNcMOxQHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" srcset="" />
                                        </div>

                                        <div class="hidden md:flex items-center justify-center">
                                            <svg class="w-8 h-8 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <p class="ml-2 text-md font-bold text-white">4.95</p>

                                        </div>


                                    </div>
                                    {/* name address */}
                                    <div className='flex flex-col whitespace-nowrap overflow-auto  text-ellipsis justify-evenly px-4 gap-2'>
                                        <div className='font-bold text-xl'>{item.addon_name}</div>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg class="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                                </svg>
                                            </div>
                                            <div className=''>
                                                Lorem ipsum dolor sit amet consectetur
                                            </div>

                                        </div>
                                        <div className='flex md:hidden justify-evenly'>
                                            <div className='flex'>
                                                <svg class="w-6 h-6 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <p>4.2</p>
                                            </div>
                                            •
                                            <div>
                                                ₹ {item.addon_price}

                                            </div>
                                            •
                                            <div>
                                                1.5 Kms
                                            </div>
                                        </div>
                                        <div className='flex justify-center overscroll-none md:hidden'>

                                            <button onClick={(event) => handleaddtocart(event, item.addon_name, item.addon_price,item._id)} type="button" class="text-white bg-[#F31D32]  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{flagid===item._id && loading?<div className='flex justify-center'><DotSpinner size={40} speed={0.9} color="white" /></div>:"Book Now"}</button>


                                        </div>
                                        {/* price */}
                                        <div className='hidden md:flex'>
                                            <div className='font-bold text-md'>Price: </div>
                                            <div>Rs {item.addon_price}</div>
                                        </div>
                                    </div>
                                    {/* Distance */}
                                    <div className='hidden  md:flex flex-col text-center justify-evenly'>
                                        <div className='font-bold'>Nearby Distance</div>
                                        <div>1.5 Kms</div>
                                        <div>
                                            <button onClick={(event) => handleaddtocart(event, item.addon_name, item.addon_price,item._id)} type="button" class="text-white bg-[#F31D32]  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{flagid===item._id && loading?<div className='flex justify-center'><DotSpinner size={40} speed={0.9} color="white" /></div>:"Book Now"}</button>

                                        </div>
                                    </div>
                                    < ToastContainer />
                                </div>
                            )
                        })
                    }




                    {/* card end */}




                </div>
            </div>
        </div>
    )
}

