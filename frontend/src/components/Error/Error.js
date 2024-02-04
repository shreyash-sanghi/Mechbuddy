import React from 'react'
import errorlogo from './error_asset.png';

const handleback=()=>{
    window.history.back();

}

export default function Error() {
    return (
        <div className='bg-[#000515CC] h-screen  md:py-2 md:px-64'>

            <div className='flex flex-col'>
                <div>
                    <img src={errorlogo} alt="" srcset="" />
                </div>
                <div className='flex flex-col gap-2 text-center'>
                    <div className='text-white text-xl'>Internal Server Error</div>
                    <div className='text-white'>Please visit correct page</div>
                    <div>
                    <button onClick={handleback} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Go Back</button>

                    </div>
                </div>
            </div>

        </div>
    )
}
