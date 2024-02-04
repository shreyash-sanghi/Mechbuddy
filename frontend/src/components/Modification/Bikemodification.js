import React, { useContext } from 'react';
import bikefront from './bikefront.png';
import bikeback from './bikeback.png';
import bikeside1 from './bikeside1.png';
import bikeside2 from './bikeside2.png';
import noteContext from '../../context/noteContext';

export default function Bikemodification() {

    const { vehicle_model, setVehicleModel, loading5, setLoading5, url5, setUrl5, image5, setImage5, loading6, setLoading6, url6, setUrl6, image6, setImage6, loading7, setLoading7, url7, setUrl7, image7, setImage7, loading8, setLoading8, url8, setUrl8, image8, setImage8 } = useContext(noteContext)

    const handleModelChange = (event) => {

        setVehicleModel(event.target.value);
    };

    const submitImage = async (image_number) => {
        const data = new FormData();
        let imageToUpload = null;

        if (image_number === 5) {

            setLoading5(true);
            imageToUpload = image5;
            data.append("file", imageToUpload);
            data.append(
                "upload_preset",
                'aowwz6ns'
            );
            data.append("cloud_name", 'dmix1720n');
            data.append("folder", "Cloudinary-React");

        }
        else if (image_number === 6) {


            setLoading6(true);

            imageToUpload = image6;
            
            data.append("file", imageToUpload);
            data.append(
                "upload_preset",
                'aowwz6ns'
            );
            data.append("cloud_name", 'dmix1720n');
            data.append("folder", "Cloudinary-React");
        }
        else if (image_number === 7) {

            setLoading7(true);

            imageToUpload = image7;
            data.append("file", imageToUpload);
            data.append(
                "upload_preset",
                'aowwz6ns'
            );
            data.append("cloud_name", 'dmix1720n');
            data.append("folder", "Cloudinary-React");
        }
        else if (image_number === 8) {

            setLoading8(true);

            imageToUpload = image8;
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

            if (image_number === 5) {
                setUrl5(res.public_id);
                setLoading5(false);
            }
            else if (image_number === 6) {
                
                setUrl6(res.public_id);
                setLoading6(false);

            }
            else if (image_number === 7) {
                setUrl7(res.public_id);
                setLoading7(false);

            }
            else if (image_number === 8) {
                setUrl8(res.public_id);
                setLoading8(false);

            }
            
        } catch (error) {
            if (image_number === 5) {

                setLoading5(false);
            }
            else if (image_number === 6) {

                setLoading6(false);

            }
            else if (image_number === 7) {

                setLoading7(false);

            }
            else if (image_number === 8) {

                setLoading8(false);

            }
        }
    }

    const handleImageChange = (event, image_number) => {
        let file = event.target.files[0];

        if (image_number === 5) {

            setImage5(file);
        }
        else if (image_number === 6) {

            setImage6(file);
        }
        else if (image_number === 7) {

            setImage7(file);
        }
        else if (image_number === 8) {

            setImage8(file);
        }

    };

    const divStyle5 = !loading5 && url5
    ? {
        backgroundImage: `url(https://res.cloudinary.com/dmix1720n/image/upload/v1/${url5})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    : {
        backgroundColor: 'rgba(255, 255, 255, 0.32)',
    };
const divStyle6 = !loading6 && url6
    ? {
        backgroundImage: `url(https://res.cloudinary.com/dmix1720n/image/upload/v1/${url6})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    : {
        backgroundColor: 'rgba(255, 255, 255, 0.32)',
    };
const divStyle7 = !loading7 && url7
    ? {
        backgroundImage: `url(https://res.cloudinary.com/dmix1720n/image/upload/v1/${url7})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    : {
        backgroundColor: 'rgba(255, 255, 255, 0.32)',
    };
const divStyle8 = !loading8 && url8
    ? {
        backgroundImage: `url(https://res.cloudinary.com/dmix1720n/image/upload/v1/${url8})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    : {
        backgroundColor: 'rgba(255, 255, 255, 0.32)',
    };



    return (
        <div>
            <div className='bg-bikemodificationcoverbg bg-cover bg-top p-8 sm:p-24  h-full text-white text-center text-4xl font-bold'>
                BIKE MODIFICATION
            </div>

            <h1 className="flex justify-center text-[#F31D32] items-center w-full  h-12 text-center  bg-[#FFFFFF] text-2xl font-bold	 " >
                PICTURE OF VEHICLE
            </h1>

            <div>
                {/* //large screen */}
                <div className='grid grid-cols-2 sxl:grid-cols-4 gap-16 p-8 sm:p-16'>
                    <div className='p-4 sm:p-8 flex flex-col justify-evenly items-center border-4 border-white border-dashed  ' style={divStyle5}>
                        {/*  */}
                        <img className='sm:w-32 sm:h-40' src={bikeback} alt="" srcset="" />
                        <input className='hidden' type="file" onChange={(event) => handleImageChange(event, 5)} accept='image/*' id="customFileInput5" />
                        <label for="customFileInput5" class="text-white absolute font-semibold text-7xl">+</label>
                        <button onClick={() => submitImage(5)}>upload</button>
                        {loading5 ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
                                <span>Wait Image Uploading...</span>
                            </div>
                        ) : (
                            <div>
                            </div>

                        )}
                    </div>
                    <div className='p-2 flex flex-col justify-evenly items-center border-4 border-white border-dashed' style={divStyle6}>
                        <img src={bikeside1} alt="" srcset="" />
                        <input className='hidden' type="file" onChange={(event) => handleImageChange(event, 6)} accept='image/*' id="customFileInput6" />
                        <label for="customFileInput6" class="text-white absolute font-semibold text-7xl">+</label>
                        <button className='absolute mt-36' onClick={() => submitImage(6)}>upload</button>
                        {loading6 ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
                                <span>Wait Image Uploading...</span>
                            </div>
                        ) : (
                            <div>
                            </div>

                        )}
                    </div>
                    <div className='p-2 flex flex-col justify-evenly items-center border-4 border-white border-dashed' style={divStyle7}>
                        <img src={bikeside2} alt="" srcset="" />
                        <input className='hidden' type="file" onChange={(event) => handleImageChange(event, 7)} accept='image/*' id="customFileInput7" />
                        <label for="customFileInput7" class="text-white absolute font-semibold text-7xl">+</label>
                        <button className='absolute mt-28' onClick={() => submitImage(7)}>upload</button>
                        {loading7 ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
                                <span>Wait Image Uploading...</span>
                            </div>
                        ) : (
                            <div>
                            </div>

                        )}
                    </div>
                    <div className='p-4 flex flex-col justify-evenly items-center border-4 border-white border-dashed' style={divStyle8}>
                        <img className='' src={bikefront} alt="" srcset="" />
                        <input className='hidden' type="file" onChange={(event) => handleImageChange(event, 8)} accept='image/*' id="customFileInput8" />
                        <label for="customFileInput8" class="text-white absolute font-semibold text-7xl">+</label>
                        <button onClick={() => submitImage(8)}>upload</button>
                        {loading8 ? (
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
                    <div className='text-white text-md sm:text-2xl font-semibold'>
                        Vehicle Model No. :
                    </div>
                    <input className='bg-transparent text-white  border-b-2 active:border-b-2'type="text" name="" id="" value={vehicle_model}  onChange={handleModelChange} />
                </div>
            </div>

        </div>
    )
}
