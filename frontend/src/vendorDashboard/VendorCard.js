import { React, useEffect, useState } from "react";
import VendorDashboardNav from "./VenderDashboardNav";
import axios from "axios";
import { useParams } from "react-router-dom";

const VendorCard = () => {
    const { id } = useParams();
    // const [isChecked, setIsChecked] = useState([{
    //     id:"",
    //     index:"",
    //     value:""
    // }])
    const [isChecked, setIsChecked] = useState([{value:"",uid:""}])
    const [initial_plans, final_plans] = useState();
    const [ini_isvalue,final_isvalue]= useState();

    const handleCheckboxChange = async(index) => {
        const updatedItems = [...isChecked];
    // Update the element at the specified index
    updatedItems[index].value = !isChecked[index].value;
    setIsChecked(updatedItems);
    const card_switch = isChecked[index].value;
    console.log("Hello")
    const uid = isChecked[index].uid;
    try {
      const response = await axios.post(`http://localhost:8000/api/vendor/update_vendor_card/${id}`,{
        index,card_switch
      })  
    } catch (error) {
        console.log(error);
    }
    console.log()
    
    }

    const getdata = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/vendor/get_vendor_card/${id}`);
            const plans = response.data.data.plans;
            plans.map((info,index)=>{
                setIsChecked((ini)=>
                [
                    ...ini,{value:info.card_switch,uid:info._id}
                ]
                )
            })
            final_plans(plans);
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }
    useEffect(() => {
        getdata();
    }, [])
    // console.log(initial_plans)
    return (
        <>

            <VendorDashboardNav />

            <div className=' items-center flex flex-wrap justify-evenly mx-auto mt-5 '>
              {(initial_plans !== undefined)?(<>
              {/* {console.log(initial_plans)} */}
                {initial_plans.map((info,index) => {
                    // if(!isChecked[index].value) return null;
                    return (<>
                  <div key={index} class="sm:w-[150%] mt-5 flex flex-col md:w-full sxl:w-full  max-w-sm   border  rounded-lg shadow  bg-[#000000] border-gray-700">
                    <div className="flex items-center justify-between">
                        <h5 class="mb-4  py-4 sm:px-12 text-xl font-medium text-center ml-2 text-white ">{info.planname}</h5>

                        <label className='flex mr-2 cursor-pointer select-none items-center'>
                            <div className='relative'>
                                {console.log(isChecked)}
                                {(isChecked[index].value) ? (<>
                                    <div className='relative'>
                                        <input
                                            type='checkbox'
                                            checked={isChecked[index+1].value}
                                            onChange={()=>handleCheckboxChange(index)}
                                            className='sr-only'
                                        />
                                        <div className='block h-6 w-14 rounded-full bg-blue-500'></div>
                                        <div className='dot absolute right-1 top-0.5 h-5 w-5 rounded-full bg-white  transition'></div>

                                    </div>          </>) : (<>
                                        <div className='relative'>
                                            {console.log(isChecked[index])}
                                            <input  
                                                type='checkbox'
                                                checked={isChecked[index+1].value}
                                                onChange={()=>handleCheckboxChange(index)}
                                                className='sr-only'
                                            />
                                            <div className='block h-6 w-14 rounded-full bg-[#E5E7EB]'></div>
                                            <div className='dot absolute left-1 top-0.5 h-5 w-5 rounded-full bg-blue-500 transition'></div>
                                        </div>
                                    </>)}
                            </div>
                        </label>
                    </div>

                    <div class="flex p-2 items-baseline text-gray-900 bg-[#F31D32] text-dark" style={{ clipPath: " polygon(0 0, 66% 0, 53% 100%, 0 100%)" }}>
                        <span class="text-xl font-semibold">Rs {info.price}</span>
                        <span class="text-4xl font-extrabold tracking-tight"></span>
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
                </div>
                    </>)

                })}
              </>):(<></>)}
       

            </div>
        </>
    )
}

export default VendorCard;