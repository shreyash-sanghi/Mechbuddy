import React from 'react'
import istockphoto from './assets/istockphoto.png'

const AboutHero = () => {
  return (
    <>


      <div className="hidden bg-white relative sm:flex flex-col-reverse py-16 md:pt-0 md:flex-col md:pb-0 h-[600px]">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 md:pr-0 md:mb-0 md:mx-0 md:w-[74%] sxl:w-[65%] md:max-w-full md:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 md:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-md md:rounded-none md:shadow-none  md:h-full"
            src={istockphoto}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto  md:px-8 md:max-w-screen-xl">
          <div className="mb-16 leading-19 md:my-40 md:max-w-md md:pr-5">

            <h2 className="mb-5 	 font-sans text-8xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              Unveiling Our

            </h2>

            <h2 className="mb-5 	 font-sans text-8xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none" >            Commitment
            </h2>

            <h2 className="mb-5 	 font-sans text-8xl font-bold tracking-tight text-red-900 sm:text-5xl sm:leading-none" >to You!</h2>


          </div>
        </div>
      </div>


    </>
  )
}

export default AboutHero

