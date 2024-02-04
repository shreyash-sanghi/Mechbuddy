import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './contactvector.png'
import noteContext from '../../context/noteContext';
import { DotSpinner } from '@uiball/loaders'


export default function Commonrequirement(props) {
    const { setStyleDescription, url1, url2, url3, url4,url5, url6, url7, url8, vehicle_model, style_description } = useContext(noteContext)
    
    const [loading,setLoading]=useState(false);

    const history = useNavigate();

    const handleStyleDescriptionChange = (event) => {

        setStyleDescription(event.target.value);
    };


    const handlemodificationsubmit = async (e) => {

        setLoading(true);
        let data=null;
        if(props.service==="car"){
            data={ url1, url2, url3, url4, vehicle_model, style_description }
        }
        else{
            data={ url1:url5, url2:url6, url3:url7, url4:url8, vehicle_model, style_description }
        }
        try {
            const response = await fetch(`http://localhost:8000/api/modification/submit_modification`, {
                method: "POST",


                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                },

                
                body: JSON.stringify(data),



            });
            const json = await response.json();
            if (json.success) {
                setLoading(false);
                
                history('/modification_order');

            }
            else {
                setLoading(false);
                alert("fail");

            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='bg-[#EBEBEB] pb-8'>
            <h1 className="flex justify-center text-[#F31D32] items-center w-full  h-12 text-center  bg-[#FFFFFF] text-2xl font-bold	 " >
                SELECT YOUR STYLE
            </h1>
            <div className='flex flex-col'>
                <div className='text-dark text-center pt-4 px-8 sm:px-auto'>
                    Upload your 360 View of the vehicle and just tell us your requirements.
                </div>

                <div className='flex flex-col sm:flex-row items-center justify-center gap-8 py-8'>
                    <div className='border border-black'>
                        <textarea className='h-40 w-[80vw] sm:w-[40vw]' type="text" name="" id="" placeholder='a brief description in 150 words' value={style_description} onChange={handleStyleDescriptionChange} />
                    </div>
                    <div className='font-semibold'>
                        OR
                    </div>
                    <div className='bg-[#FFFFFF] sm:p-4'>
                        <div>
                            <img src={logo} alt="" srcset="" />
                        </div>
                        <h2 className='text-center'>Call Us</h2>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button onClick={handlemodificationsubmit} type="button" class="focus:outline-none text-white bg-black hover:bg-red-800  font-medium rounded-lg text-sm px-12 py-2.5 mr-2 mb-2">
                    {loading?<DotSpinner size={40} speed={0.9} color="white"/>:"Proceed"}

                    </button>

                </div>
            </div>

        </div>
    )
}
