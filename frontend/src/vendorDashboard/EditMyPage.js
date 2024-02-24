import React, { useEffect,useState } from "react";
import VendorDashboardNav from "./VenderDashboardNav";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMyPage = ()=>{
  const {id} = useParams();
  const navigate = useNavigate();

  const [vendorData, setVendorData] = useState({
    vid:"",
    name: "",
    phone: "",
    email: "",
    shop_name: "",
    shop_address: "",
    vendor_description: "",
    vendor_average_price: "",
    vendor_working_days: "",
    vendor_working_hours: "",
    service_category: "",
    plans: [{ price: '', planname: '' }],
    addons: [{ addon_name: '', addon_price: '' }]
});
const [initial,final] = useState("");

const handlechange = (e) => {

    final({
        ...initial,
        [e.target.name]: e.target.value,
    });
}

const handlePlanChange = (e, index) => {

    const { name, value } = e.target;
    const updatedPlans = [...initial.plans]; // Create a copy of the plans array

    const propertyName = name.split('.')[1];

    updatedPlans[index] = {
        ...updatedPlans[index],
        [propertyName]: value
    };


    /* updatedPlans[index].price = e.target.value; */
    final({
        ...initial,
        plans: updatedPlans,
    });
};
const handleAddonChange = (e, index) => {

    const { name, value } = e.target;
    const updatedAddons = [...initial.addons]; // Create a copy of the plans array

    const propertyName = name.split('.')[1];

    updatedAddons[index] = {
        ...updatedAddons[index],
        [propertyName]: value
    };

    final({
        ...initial,
        addons: updatedAddons,
    });
};
const addPlan = () => {
    final({
        ...initial,
        plans: [...initial.plans, { price: '', planname: '' }],
    });
};
const addaddon = () => {
    final({
        ...initial,
        addons: [...initial.addons, { addon_name: '', addon_price: '' }],
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const vid = initial.vid;
    const {name,phone,email,shop_name,shop_address,vendor_description,vendor_average_price,vendor_working_days, vendor_working_hours,service_category,plans,addons} = initial;
    // const response = await fetch(`http://localhost:8000/api/vendor/edit_vendor/${vid}`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ initial, }),
    // });
    // const json = await response.json();
    // console.log(json);
    // if (json.success) {
    //     alert("vendor added");
    // }
    // else {
    //     alert("fail");
    //     /* props.showAlert("Invalid Credentials", "danger"); */
    // }
    const response  = await axios.post(`http://localhost:8000/api/vendor/edit_vendor/${vid}`,{
        name,phone,email,shop_name,shop_address,vendor_description,vendor_average_price,vendor_working_days, vendor_working_hours,service_category,plans,addons
    })
    const status = response.status;
    console.log(status);
    if(status === 202){
        navigate(`/vendor_dashboard/${id}`);
    }
}

    const getdata  = async()=>{
        try {
          const response = await axios.get(`http://localhost:8000/api/vendor/get_vendor_card/${id}`) ;
          const data  = response.data.data;
        //   console.log(data)
        setVendorData((info)=>{
        info.vid = data._id;
        info.name = data.name;
        info.phone = data.phone;
        info.email = data.email;
        info.shop_name = data.shop_name;
        info.shop_address = data.shop_address;
        info.vendor_description = data.vendor_description;
        info.vendor_average_price = data.vendor_average_price;
        info.vendor_working_days = data.vendor_working_days;
        info.vendor_working_hours = data.vendor_working_hours;
        info.service_category = data.service_category;
        info.plans = data.plans;
        info.addons = data.addons;
        });

        final(vendorData)
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
        <div className='p-4'>
            <h1>Add Vendor</h1>

            <form onSubmit={handleSubmit}>
                <div class="relative z-0 w-full mb-6 group">
                    <input value={initial.name} type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handlechange} />
                    <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                {/* <div class="relative z-0 w-full mb-6 group">
                    <input type="email"  name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handlechange} />
                    <label for="email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div> */}
                <div class="relative z-0 w-full mb-6 group">
                    <input type="number" value={initial.phone} name="phone" id="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handlechange} />
                    <label for="phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" value={initial.shop_name} name="shop_name" id="shop_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handlechange} />
                    <label for="shop_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Shop Name</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" value={initial.shop_address} name="shop_address" id="shop_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handlechange} />
                    <label for="shop_address" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Shop Address</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" value={initial.vendor_description} name="vendor_description" id="vendor_description" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handlechange} />
                    <label for="vendor_description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">descripition</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" value={initial.vendor_average_price} name="vendor_average_price" id="vendor_average_price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handlechange} />
                    <label for="vendor_average_price" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">average price</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" value={initial.vendor_working_days} name="vendor_working_days" id="vendor_working_days" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handlechange} />
                    <label for="vendor_working_days" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">working days</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" value={initial.vendor_working_hours} name="vendor_working_hours" id="vendor_working_hours" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handlechange} />
                    <label for="vendor_working_hours" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">working hours</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" value={initial.service_category} name="service_category" id="service_category" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handlechange} />
                    <label for="service_category" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Category</label>
                </div>

                {/* plans */}
                <h2 className='text-white text-2xl'>Enter Plan Details</h2>
                {(initial.plans !== undefined)?(<> 
                {initial.plans.map(
                    (plan, index) =>{ return(

                    <>
                        <input
                            key={index}
                            type="text"
                            name={`plans[${index}].planname`}
                            value={plan.planname}
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={(e) => handlePlanChange(e, index)}
                            placeholder={`Plan ${index + 1} PlanName`}
                        />
                        <input
                            key={index}
                            type="number"
                            name={`plans[${index}].price`}
                            value={plan.price}
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={(e) => handlePlanChange(e, index)}
                            placeholder={`Plan ${index + 1} Price`}
                        />
                    </>
                )}
                )
                }
                
                </>):(<>
                
                </>)}
                <button type="button" onClick={addPlan} class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 mt-5 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Add Plan
                </button>

                {(initial.addons !== undefined)?
                (<>{
                initial.addons.map((addon, index) =>{ return(
                    <>
                        <input
                            key={index}
                            type="text"
                            name={`addons[${index}].addon_name`}
                            value={addon.addon_name}
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={(e) => handleAddonChange(e, index)}
                            placeholder={`Addon ${index + 1} Name `}
                        />
                        <input
                            key={index}
                            type="number"
                            name={`addons[${index}].addon_price`}
                            value={addon.addon_price}
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={(e) => handleAddonChange(e, index)}
                            placeholder={`Addon ${index + 1} Price`}
                        />
                    </>
                )})
            }</>):(<></>)}
              
                <div className='flex justify-between m-auto mt-5'>
                <button type="button" onClick={addaddon} class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Add Addon
                </button>

                <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                </div>
            </form>

        </div>
        </>
    )
}

export default EditMyPage;