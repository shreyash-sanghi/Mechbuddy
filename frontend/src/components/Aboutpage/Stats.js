import React from 'react';
// import choose from "./assets/selct.png"
import StatsCar from "./assets/StatsCar.png"
import location from './assets/location.png';
import mechanic from './assets/mechanic.png';
import orders from './assets/orders.png';
export default function Stats() {

    const bgStyle = {
        backgroundImage: `url(${StatsCar})`,
    };

    const containerStyle = {
        background: `
            linear-gradient(0deg, #E6E6E6, #E6E6E6),
            linear-gradient(0deg, rgba(243, 29, 50, 0.91), rgba(243, 29, 50, 0.91))
        `,
    };

    return (
        <div>
         <h1 className="text-[#F31D32] bg-[#F9F9F9] h-[60px] text-3xl font-bold text-center  py-2 uppercase">
         OUR NUMBERS
                </h1>

            <div className=" py-8" style={bgStyle} >
               

                <div className='flex flex-col gap-8 sm:p-12'>
                    {/* <div className='flex w-full overflow-auto sm:w-auto sm:justify-start md:ml-20'> */}
                    <div className='flex w-full overflow-auto sm:w-auto sm:justify-start md:justify-center'>
                        {/* copy */}
                        <div style={containerStyle} className='flex p-8 bg-gray-400 rounded-l-xl border-r-2 border-gray-900'>
                            <div class="flex-shrink-0 w-16 h-16 mr-4 bg-red-500 text-red-500 rounded-full inline-flex items-center justify-center">
                                <img src={mechanic} alt="" srcset="" />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-3xl font-bold  text-red-500'>200+</div>
                                <div>Vendors</div>
                            </div>
                        </div>
                        
                        <div style={containerStyle} className='flex p-8 bg-gray-400 border-r-2 border-gray-900'>
                            <div class="flex-shrink-0 w-16 h-16 mr-4 bg-red-500 text-red-500 rounded-full inline-flex items-center justify-center">
                                <img src={orders} alt="" srcset="" />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-3xl font-bold  text-red-500 '>600+</div>
                                <div>Orders</div>
                            </div>
                        </div>
                        
                        <div style={containerStyle} className='flex p-8 bg-gray-400 rounded-r-xl'>
                            <div class="flex-shrink-0 w-16 h-16 mr-4 bg-red-500 text-red-500 rounded-full inline-flex items-center justify-center">
                                <img src={location} alt="" srcset="" />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-3xl font-bold  text-red-500'>04</div>
                                <div>Cities</div>
                            </div>
                        </div>
                        
                        
                        

                    </div>
                    {/* <div className='flex w-full overflow-auto sm:w-auto  sm:justify-end md:mr-20'>
                        
                        <div style={containerStyle} className='flex p-8 bg-gray-400 rounded-l-xl border-r-2 border-gray-900'>
                            <div class="flex-shrink-0 w-16 h-16 mr-4 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <img src={choose} alt="" srcset="" />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-3xl font-bold  text-red-500 '>100+</div>
                                <div>Vendors</div>
                            </div>
                        </div>
                        
                        <div style={containerStyle} className='flex p-8 bg-gray-400 border-r-2 border-gray-900'>
                            <div class="flex-shrink-0 w-16 h-16 mr-4 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <img src={choose} alt="" srcset="" />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-3xl font-bold  text-red-500'>100+</div>
                                <div>Vendors</div>
                            </div>
                        </div>
                        
                        <div style={containerStyle} className='flex p-8 bg-gray-400 rounded-r-xl'>
                            <div class="flex-shrink-0 w-16 h-16 mr-4 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <img src={choose} alt="" srcset="" />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-3xl font-bold  text-red-500'>100+</div>
                                <div>Vendors</div>
                            </div>
                        </div>
                        
                        
                        

                    </div> */}


                </div>
            </div>
        </div>
    )
}
