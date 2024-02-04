import React from 'react'

export default function Modificationstyle() {
  return (
    <div>
      <h1 className="flex justify-center text-[#F31D32] items-center w-full  h-12 text-center  bg-[#FFFFFF] text-2xl font-bold	 " >
        SELECT YOUR STYLE
      </h1>

      <div className='bg-[#F31D32] flex flex-col items-center py-12 px-2 500:px-8 sm:py-12 sm:px-28  md:py-12 md:px-36'>

        <div className='grid grid-cols-2 sm:grid-cols-4 py-2 gap-20'>
          <div className='bg-white text-[#0F1423] flex justify-center rounded-md px-12 py-2 text-xl'>PPF</div>
          <div className='bg-white text-[#0F1423] flex justify-center rounded-md px-12 py-2 text-xl'>TPU</div>
          <div className='bg-white text-[#0F1423] flex justify-center rounded-md px-12 py-2 text-xl'>VINYL</div>
          <div className='bg-white text-[#0F1423] flex justify-center rounded-md px-12 py-2 text-xl'>ETC</div>



        </div>
        <div className='mt-8'>
          <button type="button" class=" text-white bg-[#0F1423] hover:bg-red-800  font-medium rounded-lg text-md px-20 py-4 mr-2 mb-2">Proceed</button>
        </div>
      </div>

      {/* color style */}

    {/*   <div className='bg-[#F31D32] flex flex-col items-center py-12 px-2 500:px-8 sm:py-12 sm:px-28  md:py-12 md:px-36'>

        <div className='grid grid-cols-2 sm:grid-cols-4 py-2 gap-20'>
          <div className='bg-white text-[#0F1423] flex flex-col justify-center rounded-md px-8 py-2 '>
            <div className='text-xl'>ORIGINAL</div>
            <div className='flex flex-row gap-2'>
              <div className='p-4 bg-black rounded-md'></div>
              <div>ACHA BLACK</div>
            </div>
          </div>
          <div className='bg-white text-[#0F1423] flex justify-center rounded-md px-12 py-2 text-xl'>CUSTOMIZE</div>
          <div className='bg-white text-[#0F1423] flex justify-center rounded-md px-12 py-2 text-xl'>PARTICULAR</div>
          <div className='bg-white text-[#0F1423] flex justify-center rounded-md px-12 py-2 text-xl'>PREMIUM</div>



        </div>
        <div className='mt-8'>
          <button type="button" class=" text-white bg-[#0F1423] hover:bg-red-800  font-medium rounded-lg text-md px-20 py-4 mr-2 mb-2">Proceed</button>
        </div>
      </div> */}
    </div>
  )
}
