import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import choose from './assets/selct.png'
import Counter from './Counter';
import Drawer from './Drawer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import noteContext from '../../context/noteContext';
import { DotSpinner } from '@uiball/loaders'

export default function Cartitem(props) {

    const { handlegetcart,cartloading, item, setItem } = useContext(noteContext);
    const { cartCount, setCartCount,setAmount } = useContext(noteContext);
    const [loading,setLoading]=useState(false);
    const [deleteid,setDeleteid]=useState('');
    /* 
    which user :- user id,
    compare it with user option in cart 
    which matches return that one.
    */
    const notify = () => toast("Item Deleted", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });

    function calculateTotal() {
        let total = 0;
        for (const each_item of item) {
            total += each_item.item_price * each_item.item_count; // Adjust this calculation based on your cart data structure
        }
        setAmount(total);
        return total;
    }

    const handledeletecart = async (id) => {

        setDeleteid(id);
        
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:8000/api/cart/deletecart/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                }
            });

            const json = await response.json();

            if (json.success) {
                setLoading(false);
                setCartCount(cartCount - 1)
                notify();
                const newCart = item.filter((item) => { return item._id !== id });
                setItem(newCart);

            }
            else {
                setLoading(false);
                alert("deletion fail");
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handlegetcart();
    }, []);

    const handleback=()=>{
        window.history.back();
    }


    return (
        <div>
            <div className="bg-[#EDEDED] text-red py-10">
                <h1 className="text-black  text-xl font-bold  mb-10 py-2 px-4">
                    Your Shopping Cart
                </h1>

                <div className='flex flex-col gap-4 py-4'>
                    {/* single cart */}

                    {    cartloading?<div className='ml-auto mr-auto'><DotSpinner  size={40} speed={0.9} color="red"/></div>:
                        item.map((eachitem, index) => {

                            return (
                                <div key={eachitem.id} className='flex items-center sm:w-[70%] sxl:w-1/2 bg-white rounded-md py-4 px-8 mx-4 justify-between'>
                                    <div className='hidden 570:inline-block'>
                                        <div class="flex-shrink-0 w-16 h-16 mr-4 bg-[#F31D32] text-red-500 rounded-full inline-flex items-center justify-center">
                                            <img src={choose} alt="" srcset="" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div>{eachitem.item_title}</div>
                                        <div>{eachitem.item_category}</div>
                                    </div>
                                    <div className='hidden 570:inline-block'>
                                        <Counter count={eachitem.item_count}></Counter>
                                    </div>
                                    <button onClick={() => { handledeletecart(eachitem._id) }} className=' 570:hidden'>
                                        
                                        {deleteid===eachitem._id && loading?<DotSpinner size={40} speed={0.9} color="red"/>:<svg class="w-6 h-6 text-[#F31D32] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                                        </svg>}

                                    </button>
                                    <div className='flex flex-col text-[#000000]'>

                                        <div>₹ {eachitem.item_price}</div>
                                    </div>
                                    <button onClick={() => { handledeletecart(eachitem._id) }} className='hidden 570:inline-block'>
                                        
                                        {deleteid===eachitem._id && loading?<DotSpinner size={40} speed={0.9} color="red"/>:<svg class="w-6 h-6 text-[#F31D32] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                                        </svg>}

                                    </button>


                                </div>
                            )
                        })
                    }


                    {/* back button */}
                    <div className='flex sm:w-[70%] sxl:w-1/2 justify-between mx-4'>
                        <div className='flex gap-4' onClick={handleback}>
                            <div>
                                <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                                </svg>
                            </div>
                            <div >
                                Back to Shop
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <div>
                                Subtotal
                            </div>
                            <div>
                                ₹ {calculateTotal()}

                            </div>
                        </div>
                    </div>


                </div>

                < ToastContainer />
                <Drawer amount={calculateTotal()}></Drawer>


            </div>
        </div>
    )
}




