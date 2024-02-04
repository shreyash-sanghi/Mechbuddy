import React from "react";

export default function Contact() {
  return (
    <div>
      <h1 className="text-[#FF1313] bg-[#F9F9F9] h-[60px] text-2xl font-bold text-center py-2 uppercase">
        CONTACT
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 py-12 px-8 sm:py-16 sm:px-8 md:py-16 md:px-4 lg:p-16  gap-12 sm:gap-4 lg:gap-12 xl:gap-40 bg-[#000000] text-white">
        <div className="bg-[#FF1313] px-4 py-8 md:p-8 lg:p-12 rounded-xl text-center flex flex-col items-center">
          <div class=" absolute -mt-16 lg:-mt-20 flex-shrink-0 w-16 h-16 mr-4 bg-white text-red-500 rounded-full inline-flex items-center justify-center">
            <svg class="w-8 h-8 text-[#FF1313]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
              <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
              </g>
            </svg>
          </div>
          <h1 className="text-xl font-bold">LOCATION</h1>
          <p className="pt-2">4WWP+V7F, Jabalpur Incubation Center, 3rd floor, MCI Colony, Katanga, Jabalpur, Madhya Pradesh 48200</p>
        </div>

        <div className="bg-[#FF1313] px-4 py-8 md:p-8 lg:p-12 rounded-xl text-center flex flex-col items-center">
          <div class=" absolute -mt-16 lg:-mt-20 flex-shrink-0 w-16 h-16 mr-4 bg-white text-red-500 rounded-full inline-flex items-center justify-center">
            <svg class="w-8 h-8 text-[#FF1313]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">EMAIL</h1>
          <p className="pt-2 mt-4">infomechbuddy@gmail.com</p>
          
          
        </div>
        <div className="bg-[#FF1313] px-4 py-8 md:p-8 lg:p-12 rounded-xl text-center flex flex-col items-center">
          <div class=" absolute -mt-16 lg:-mt-20 flex-shrink-0 w-16 h-16 mr-4 bg-white text-red-500 rounded-full inline-flex items-center justify-center">
            <svg class="w-8 h-8 text-[#FF1313] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">PHONE</h1>
          <p className="pt-2 mt-4">8435776053</p>
        </div>



      </div>
    </div>
  );
}
