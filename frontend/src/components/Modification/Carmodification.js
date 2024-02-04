import React, { useState,useContext } from 'react'
import { Image } from 'cloudinary-react';

import bikefront from './bikefront.png';
import bikeback from './bikeback.png';
import bikeside1 from './bikeside1.png';
import bikeside2 from './bikeside2.png';
import carback from './carback.png'
import carfront from './carfront.png'
import carside1 from './carside1.png'
import carside2 from './carside2.png'
import noteContext from '../../context/noteContext';

export default function Carmodification() {

     const { vehicle_model,setVehicleModel,loading1, setLoading1,url1, setUrl1,image1, setImage1,loading2, setLoading2,url2, setUrl2,image2, setImage2,loading3, setLoading3,url3, setUrl3,image3, setImage3,loading4, setLoading4,url4, setUrl4,image4, setImage4 } = useContext(noteContext) 

     const handleModelChange = (event) => {
        
        setVehicleModel(event.target.value);
      };

    const submitImage = async (image_number) => {
        const data = new FormData();
        let imageToUpload = null;

        if (image_number === 1) {

            setLoading1(true);
            imageToUpload = image1;
            data.append("file", imageToUpload);
            data.append(
                "upload_preset",
                'aowwz6ns'
            );
            data.append("cloud_name", 'dmix1720n');
            data.append("folder", "Cloudinary-React");

        }
        else if (image_number === 2) {


            setLoading2(true);

            imageToUpload = image2;
            
            data.append("file", imageToUpload);
            data.append(
                "upload_preset",
                'aowwz6ns'
            );
            data.append("cloud_name", 'dmix1720n');
            data.append("folder", "Cloudinary-React");
        }
        else if (image_number === 3) {

            setLoading3(true);

            imageToUpload = image3;
            data.append("file", imageToUpload);
            data.append(
                "upload_preset",
                'aowwz6ns'
            );
            data.append("cloud_name", 'dmix1720n');
            data.append("folder", "Cloudinary-React");
        }
        else if (image_number === 4) {

            setLoading4(true);

            imageToUpload = image4;
            data.append("file", imageToUpload);
            data.append(
                "upload_preset",
                'aowwz6ns'
            );
            data.append("cloud_name", 'dmix1720n');
            data.append("folder", "Cloudinary-React");
        }






        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/dmix1720n/image/upload`,
                {
                    method: "POST",
                    body: data,
                }
            );
            let res = await response.json();

            if (image_number === 1) {
                setUrl1(res.public_id);
                setLoading1(false);
            }
            else if (image_number === 2) {
                
                setUrl2(res.public_id);
                setLoading2(false);

            }
            else if (image_number === 3) {
                setUrl3(res.public_id);
                setLoading3(false);

            }
            else if (image_number === 4) {
                setUrl4(res.public_id);
                setLoading4(false);

            }
            
        } catch (error) {
            if (image_number === 1) {

                setLoading1(false);
            }
            else if (image_number === 2) {

                setLoading2(false);

            }
            else if (image_number === 3) {

                setLoading3(false);

            }
            else if (image_number === 4) {

                setLoading4(false);

            }
        }
    }

    const handleImageChange = (event, image_number) => {
        let file = event.target.files[0];

        if (image_number === 1) {

            setImage1(file);
        }
        else if (image_number === 2) {

            setImage2(file);
        }
        else if (image_number === 3) {

            setImage3(file);
        }
        else if (image_number === 4) {

            setImage4(file);
        }

    };

    const divStyle1 = !loading1 && url1
        ? {
            backgroundImage: `url(https://res.cloudinary.com/dmix1720n/image/upload/v1/${url1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
        : {
            backgroundColor: 'rgba(255, 255, 255, 0.32)',
        };
    const divStyle2 = !loading2 && url2
        ? {
            backgroundImage: `url(https://res.cloudinary.com/dmix1720n/image/upload/v1/${url2})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
        : {
            backgroundColor: 'rgba(255, 255, 255, 0.32)',
        };
    const divStyle3 = !loading3 && url3
        ? {
            backgroundImage: `url(https://res.cloudinary.com/dmix1720n/image/upload/v1/${url3})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
        : {
            backgroundColor: 'rgba(255, 255, 255, 0.32)',
        };
    const divStyle4 = !loading4 && url4
        ? {
            backgroundImage: `url(https://res.cloudinary.com/dmix1720n/image/upload/v1/${url4})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
        : {
            backgroundColor: 'rgba(255, 255, 255, 0.32)',
        };


    return (
        <div>
            <div className='bg-carmodificationcover bg-cover p-8 sm:p-24  h-full text-white text-center text-4xl font-bold'>
                CAR MODIFICATION
            </div>

            <h1 className="flex justify-center text-[#F31D32] items-center w-full  h-12 text-center  bg-[#FFFFFF] text-2xl font-bold	 " >
                PICTURE OF VEHICLE
            </h1>

            <div className='flex flex-col'>
                {/* //large screen */}
                <div className='grid grid-cols-2 gap-8  sm:gap-56 p-8 sm:py-16 sm:px-12 lg:px-56'>
                    <div className='p-4 bg-cover sm:p-8 flex flex-col justify-evenly items-center border-4 border-white border-dashed  ' style={divStyle1}>

                        <img src={carback} alt="" srcset="" />
                        <input className='hidden' type="file" onChange={(event) => handleImageChange(event, 1)} accept='image/*' id="customFileInput1" />
                        <label for="customFileInput1" class="text-white absolute font-semibold text-7xl">+</label>
                        <button onClick={() => submitImage(1)}>upload</button>
                        {loading1 ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
                                <span>Wait Image Uploading...</span>
                            </div>
                        ) : (
                            <div>
                            </div>

                        )}
                    </div>
                    <div className='p-2 flex flex-col justify-evenly items-center border-4 border-white border-dashed' style={divStyle2}>
                        <img src={carfront} alt="" srcset="" />
                        <input className='hidden' type="file" onChange={(event) => handleImageChange(event, 2)} accept='image/*' id="customFileInput2" />
                        <label for="customFileInput2" class="text-white absolute font-semibold text-7xl">+</label>
                        <button  onClick={() => submitImage(2)}>upload</button>
                        {loading2 ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
                                <span>Wait Image Uploading...</span>
                            </div>
                        ) : (
                            <div>
                            </div>

                        )}
                    </div>

                </div>

                <div className='grid grid-cols-1  sm:gap-56 p-8 sm:py-16  xl:px-[25rem]'>
                    <div className='p-4 sm:p-8 flex flex-col justify-evenly items-center border-4 border-white border-dashed  ' style={divStyle3}>
                       {/*  <h2 className='text-white absolute font-semibold text-7xl'>+</h2> */}
                        <img src={carside1} alt="" srcset="" />
                        <input className='hidden' type="file" onChange={(event) => handleImageChange(event, 3)} accept='image/*' id="customFileInput3" />
                        <label for="customFileInput3" class="text-white absolute font-semibold text-7xl">+</label>
                        <button onClick={() => submitImage(3)}>upload</button>
                        {loading3 ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
                                <span>Wait Image Uploading...</span>
                            </div>
                        ) : (
                            <div>
                            </div>

                        )}
                    </div>
                </div>
                <div className='grid grid-cols-1  sm:gap-56 p-8 sm:py-16 xl:px-[25rem]'>
                    <div className='p-4 sm:p-8 flex flex-col justify-evenly items-center border-4 border-white border-dashed  ' style={divStyle4}>
                        {/* <h2 className='text-white absolute font-semibold text-7xl'>+</h2> */}
                        <img src={carside2} alt="" srcset="" />
                        <input className='hidden' type="file" onChange={(event) => handleImageChange(event, 4)} accept='image/*' id="customFileInput4" />
                        <label for="customFileInput4" class="text-white absolute font-semibold text-7xl">+</label>
                        <button onClick={() => submitImage(4)}>upload</button>
                        {loading4 ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
                                <span>Wait Image Uploading...</span>
                            </div>
                        ) : (
                            <div>
                            </div>

                        )}
                    </div>
                </div>


                <div className='flex justify-center mt-8 p-4'>
                    <div className='text-white text-md sm:text-2xl'>
                        Vehicle Model No. :
                    </div>
                    <input className='bg-transparent text-white border-b-2 active:border-b-2' type="text" name="" id="" value={vehicle_model}  onChange={handleModelChange}/>
                </div>
            </div>

        </div>
    )
}
