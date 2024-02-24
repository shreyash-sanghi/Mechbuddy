import React, { useEffect, useState } from "react";

import VendorDashboardNav from "./VenderDashboardNav";
import axios from "axios";
import { useParams } from "react-router-dom";
const VendorDashboard  =()=>{

const {id} = useParams();

const [initial,final] = useState([{
  pid:"",
  name:"",
  mobile:"",
  date:"",
  city:"",
  state:"",
  paymentstatus:"",
  pincode:"",
  time_slot:"",
  products:""
}])

const getdata = async()=>{
    try {
        const response  = await axios.get(`http://localhost:8000/api/vendor/get_vendor_product/${id}`)
        const result  = response.data.data;
        const vid = response.data.vid;
       result.map((info)=>{
        const products = info.products;
        let filteredUsers = [];
       for (let i= 0; i<products.length; i++) {
      if (products[i].item_id === `${vid}` ) {
        filteredUsers = [...filteredUsers,products[i]];
       }
}
if(filteredUsers.length !=0){
  final((savedata)=>[
    ...savedata,{
      pid:info._id,
      name :info.name,
mobile :info.mobile,
date :info.order_date,
city :info.city,
state :info.state,
paymentstatus :info.paymentStatus,
pincode :info.pincode,
time_slot :info.time_slot,
products:filteredUsers
    }
  ])
}
// console.log(filteredUsers.length);
        // products.map((about)=>{
        //  const item_id = about.item_id;
        //  item_id.filter()
        // })
       })
        // const products = result.products;
        // console.log(products)
    } catch (error) {
        alert(error);
        console.log(error);
    }
}

// console.log(initial);
    useEffect(()=>{
     getdata()
;    },[])
    return(
        <>
<div class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">

  <div class="flex-grow overflow-hidden h-full flex flex-col">

    <div class="flex-grow flex overflow-x-hidden">

      <div class="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
 <VendorDashboardNav/>
        <div class="sm:p-7 p-4">
          <table class="w-full text-left">
            <thead>
              <tr class="text-gray-400">

                <th class="font-normal whitespace-nowrap px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white"> Name</th>
                <th class="font-normal whitespace-nowrap px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white"> Mobile</th>
                <th class="font-normal whitespace-nowrap px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white"> Payment Status</th>
                <th class="font-normal whitespace-nowrap px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">Time Slot</th>
                <th class="font-normal whitespace-nowrap px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white"> Date</th>
                <th class="font-normal whitespace-nowrap px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white"> City</th>
                <th class="font-normal whitespace-nowrap px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white"> State</th>
                <th class="flex"> 
                <th class="font-normal whitespace-nowrap px-10 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white"> Item Title</th>
                <th class="font-normal whitespace-nowrap  px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white"> Item Price</th>
                </th> 
              </tr>
            </thead>
            <tbody class="text-gray-600 dark:text-gray-100">
              {initial.map((info)=>{
                // console.log(info.pid);
                if(!info.pid) return null;
                return(
                  <>
                        <tr>
                <td class="
                border-b border-gray-200 dark:border-gray-800">
                  <div class="flex items-center">
                    {info.name}
                  </div>
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  <div class="flex items-center">
                    {info.mobile}
                  </div>
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  <div class="flex items-center">
                    {info.paymentstatus}
                  </div>
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  <div class="flex items-center">
                    {info.time_slot}
                  </div>
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  <div class="flex items-center">
                    {info.date}
                  </div>
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  <div class="flex items-center">
                    {info.city}
                  </div>
                </td>
                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  <div class="flex items-center">
                    {info.state}
                  </div>
                </td>
                {/* {} */}
        
               {info.products.map((data)=>{
                console.log(data);
                return(
                 <div className=" flex">
                <td class="sm:p-3 py-2 px-1 flex flex-col border-b border-gray-200 dark:border-gray-800">
                <div class=" items-center">
                  {data.item_title}
                </div>
                 </td>

                <td class="sm:p-3 py-2  flex flex-col border-b border-gray-200 dark:border-gray-800">
                <div class=" pl-10 items-center">
                  {data.item_price}
                </div>
                 </td>
                {/* <td class="  flex flex-col border-b border-gray-200 dark:border-gray-800">
                <div class=" pl-10 m-auto items-center">
                  X
                </div>
                 </td> */}
                </div>
                )
               })}
             
             <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                  <button onClick={async()=>{
                    try {
                      const deletedata = await axios.delete(`http://localhost:8000/api/vendor/delete_cusomer_order/${info.pid}`)
                    } catch (error) {
                      console.log(error);
                      alert(error);
                    }
                  }} class="flex items-center">
                        <svg
                              className="w-4 sm:w-5 fill-current text-red-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clip-rule="evenodd"
                              />
                            </svg>
                  </button>
                </td>
                 </tr>
                  </>
                )
              })}
    

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default VendorDashboard;