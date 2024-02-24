import React, { useEffect, useState } from "react";
import VendorDashboardNav from "./VenderDashboardNav";
import axios from "axios";
import { useParams } from "react-router-dom";

const Vendoraccount  = ()=>{
   const {id} = useParams();
   const [initial,final] = useState({
    name:"",
    email:"",
    role:"",
    phone:""
   })
   const [initial2,final2] = useState("");
    const getdata = async()=>{
        try {
            const response = await axios.get(`http://localhost:8000/api/vendor/getvenderaccountdata/${id}`);

            const result = response.data.data;

            final((info)=>{
                info.name = result.name;
                info.role = result.role;
                info.phone = result.phone;
                info.email = result.email;
            })
            final2(initial);
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

    useEffect(()=>{
    getdata();
    },[])
    return(
        <>
        <VendorDashboardNav/>
         <div className="flex flex-col bg-white lg:w-[50%] w-[90%] sm:w-[70%] rounded-lg my-10 py-10  m-auto">
         <div className="flex items-center my-5 mx-5">
            <h1 className="pr-5 font-extrabold text-lg sm:text-xl lg:text-3xl">Name :- </h1>
            <p className="font-bold text-blue-600 sm:text-lg text-xl">{initial2.name}</p>
         </div>
         <div className="flex items-center  my-5 mx-5">
            <h1 className="pr-5 font-extrabold text-lg sm:text-xl lg:text-3xl">Number :- </h1>
            <p className="font-bold text-blue-600 sm:text-lg text-xl">{initial2.phone}</p>
         </div>
         <div className="flex items-center  my-5 mx-5">
            <h1 className="pr-5 font-extrabold text-lg sm:text-xl lg:text-3xl">Email :- </h1>
            <p className="font-bold text-blue-600 sm:text-lg text-xl">{initial2.email}</p>
         </div>
         <div className="flex items-center  my-5 mx-5">
            <h1 className="pr-5 font-extrabold text-lg sm:text-xl lg:text-3xl">Role :- </h1>
            <p className="font-bold text-blue-600 sm:text-lg text-xl">{initial2.role}</p>
         </div>


         </div>
 
        </>
    )
}

export default Vendoraccount;