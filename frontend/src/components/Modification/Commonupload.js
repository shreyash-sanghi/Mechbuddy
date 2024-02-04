import React from 'react'

export default function Commonupload() {
  return (
    <div>
      <h1 className="flex justify-center text-[#F31D32] items-center w-full  h-12 text-center  bg-[#FFFFFF] text-2xl font-bold	 " >
        PICTURE OF VEHICLE
      </h1>
      <div className=' bg-[#000515] flex flex-col items-center py-12 px-2 500:px-8 sm:py-12 sm:px-28  md:py-12 md:px-36'>
        <div>
          <div className='bg-gray-400 flex flex-col items-center p-16 sm:p-24 border-4 border-dashed border-white'>
            
            <div className='text-5xl font-bold '>+</div>
            <div className='font-semibold text-white'>SIDE VIEW</div>
          </div>
        </div>
        <div className='flex mt-8'>
          <div className='text-white text-2xl'>
            Vehicle Name :
          </div>
          <input className='bg-transparent  border-b-2 active:border-b-2' type="text" name="" id="" />
        </div>
      </div>
    </div>
  )
}
