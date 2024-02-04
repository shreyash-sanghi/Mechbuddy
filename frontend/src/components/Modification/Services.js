import React from 'react';
import car from './cuate.png';
import bike from './rafiki.png';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div>
            <h1 className="flex justify-center text-[#F31D32] items-center w-full  h-12 text-center  bg-[#FFFFFF] text-2xl font-bold	 " >
                SERVICES AVAILABLE
            </h1>

            <div className='bg-[#000515] grid grid-cols-2 py-12 px-2 500:px-8 sm:py-12 sm:px-28  md:py-12 md:px-36 gap-8 sm:gap-12 md:gap-20 lg:gap-48 '>
                <Link to='/carmodification' className='flex justify-between flex-col rounded-xl items-center bg-[#EBEBEB]'>
                    <div>
                        <img src={car} alt="" srcset="" />
                    </div>
                    <h2 className='text-dark font-semibold text-xl p-4'>
                        Car
                    </h2>
                </Link>
                <Link to='/bikemodification' className='flex justify-between flex-col rounded-xl items-center bg-[#EBEBEB]'>
                    <div>
                        <img src={bike} alt="" srcset="" />
                    </div>
                    <h2 className='text-dark font-semibold text-xl p-4'>
                        Bike
                    </h2>
                </Link>



            </div>
        </div>
    )
}
