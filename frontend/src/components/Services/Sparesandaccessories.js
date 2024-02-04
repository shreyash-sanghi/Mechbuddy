import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import noteContext from '../../context/noteContext';
import { DotSpinner } from '@uiball/loaders'
import trial from './trial.png'
export default function Sparesandaccessories(props) {
    const { service_name } = props;
    const [spares, setSpares] = useState([]);
    const { item, setItem } = useContext(noteContext);
    const [sparesloading, setSparesloading] = useState(true);


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

    const cartadd = async (item_id, item_title, item_price) => {
        const response = await fetch(`http://localhost:8000/api/cart/addcart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
            body: JSON.stringify({ item_id, item_title, item_price, item_category: "spares", item_count: 1 }),


        });
        const json = await response.json();
        if (json.success) {
            notify();
        }
        else {
            alert("fail");
        }
    }

    const handleaddtocart = async (e, item_id, item_title, item_price) => {
        e.preventDefault();

        if (item.length === 0 || item[0].item_category === "spares") {


            await cartadd(item_id, item_title, item_price);

        }
        else {
            let a = window.confirm("this item is from different services, so removing it will clear all the cart ?")
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
                        await cartadd(item_id, item_title, item_price);

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

    useEffect(() => {
        fetchSpares();
    }, [])

    const fetchSpares = async () => {
        try {
            console.log(service_name);
            setSparesloading(true);
            let sparesApi = '';
            if (service_name === "spares") {
                sparesApi = 'http://localhost:8000/api/product/getspare';
            }
            else {
                /* accessories api */
                /* Api = 'https://mechback.onrender.com/api/product/getspare'; */
            }
            const response = await fetch(sparesApi, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            if (json.success) {
                setSparesloading(false);
                setSpares(json.spares)
            }
            else {
                setSparesloading(false);
                alert('error')
            }
        } catch (error) {
            console.log(error, 44);
        }
    }

    return (
        <div>
            <div className="bg-[#EBEBEB] text-white">


                <div className='flex flex-col p-4 lg:px-32 gap-4'>
                    <div className='bg-[#FFF] pt-4'>


                        <div className='grid grid-cols-1 500:grid-cols-2 md:grid-cols-3 px-8 gap-4 sm:gap-20'>


                            {sparesloading ? <div className='ml-auto mr-auto'><DotSpinner size={40} speed={0.9} color="red" /></div> :
                                spares.map((item) => {
                                    return (
                                        <>


                                            <div key={item.id} className='p-4 flex flex-col items-center bg-[#FCFCFC]' style={{ boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.25)' }}>
                                                <div>
                                                    <img className='h-[16rem] w-[15rem]' src={trial} alt="" />
                                                </div>
                                                <div className='mt-2 text-[#000]'>
                                                    {item.spare_name}
                                                </div>
                                                <div className='text-lg font-semibold text-[#000]'>
                                                    Rs {item.spare_price} /-
                                                </div>

                                                <div>
                                                    <button
                                                        onClick={(event) => handleaddtocart(event, item._id, item.spare_name, item.spare_price)}
                                                        type="button"
                                                        class="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-8 py-2 text-center mr-3 sm:mr-0 bg-[#F31D32] hover:bg-[#F31D32] "
                                                    >
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                            {/*  <div className='p-4 flex flex-col items-center bg-[#FCFCFC]' style={{ boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.25)' }}>
                                            <div>
                                                <img className='h-[16rem] w-[15rem]' src='https://th.bing.com/th/id/OIP.E4IJcali_762Oo_vNhhbFgHaEK?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="" />
                                            </div>
                                            <div className='mt-2'>
                                                {item.spare_name}
                                            </div>
                                            <div className='text-lg font-semibold'>
                                                Rs {item.spare_price} /-
                                            </div>

                                            <div>
                                                <button
                                                    onClick={(event) => handleaddtocart(event, item._id, item.spare_name, item.spare_price)}
                                                    type="button"
                                                    class="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-8 py-2 text-center mr-3 sm:mr-0 bg-[#F31D32] hover:bg-[#F31D32] "
                                                >
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div>
                                        <div className='p-4 flex flex-col items-center bg-[#FCFCFC]' style={{ boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.25)' }}>
                                            <div>
                                                <img className='h-[16rem] w-[15rem]' src='https://th.bing.com/th/id/OIP.E4IJcali_762Oo_vNhhbFgHaEK?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="" />
                                            </div>
                                            <div className='mt-2'>
                                                {item.spare_name}
                                            </div>
                                            <div className='text-lg font-semibold'>
                                                Rs {item.spare_price} /-
                                            </div>

                                            <div>
                                                <button
                                                    onClick={(event) => handleaddtocart(event, item._id, item.spare_name, item.spare_price)}
                                                    type="button"
                                                    class="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-8 py-2 text-center mr-3 sm:mr-0 bg-[#F31D32] hover:bg-[#F31D32] "
                                                >
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div> */}


                                            < ToastContainer />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
