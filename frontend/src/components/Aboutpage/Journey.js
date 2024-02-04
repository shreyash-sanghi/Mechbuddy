import React from 'react';
import fy20 from './assets/fy 20-21.jpg';
import fy21 from './assets/fy 21-22.jpg';
import fy22 from './assets/fy 22-23.jpg';
import fy23 from './assets/fy 23-24.jpg';
export default function Journey() {
    return (
        <div>

            <h1 className="text-[#F31D32] bg-[#F9F9F9] h-[60px] text-xl sm:text-3xl font-bold text-center  py-2 uppercase">
                Our Incredible Journey
            </h1>
            <div className="bg-[#171822] text-white py-8">
                <p className='text-center' style={{fontFamily: 'AR One Sans, sans-serif'}}>Embarking on our remarkable journey, from humble beginnings to boundless horizons.</p>

                <div className='flex flex-col sxl:flex-row gap-8 sxl:gap-0 items-center sxl:bg-track bg-local bg-no-repeat z-30 justify-evenly mx-16 p-4 500:p-[4.5rem]  '  >

                    <div>

                        <img className='border-4 object-cover border-dashed rounded-full w-36 h-36' src={fy20} alt="" srcset="" />
                        <h4 className='text-center text-lg mt-2' style={{fontFamily:'Shadows Into Light ,cursive'}}>FY 2020-21</h4>
                    </div>
                    <svg class=" w-6 h-6 absolute left-[33%] mb-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z" />
                    </svg>
                    <div>

                        <img className='border-4 object-contain  border-dashed rounded-full w-36 h-36' src={fy21} alt="" srcset="" />
                        <h4 className='text-center text-lg mt-2' style={{fontFamily:'Shadows Into Light ,cursive'}}>FY 2021-22</h4>
                    </div>
                    <div>
                        <img className='object-cover border-4 border-dashed rounded-full w-36 h-36' src={fy22} alt="" srcset="" />
                        <h4 className='text-center text-lg mt-2' style={{fontFamily:'Shadows Into Light ,cursive'}}>FY 2022-23</h4>
                    </div>
                    <svg className='absolute mb-44 right-[35%]' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.8758 32.8921C27.0929 32.9593 29.2904 32.4588 31.2597 31.4381C33.229 30.4174 34.9049 28.9105 36.1282 27.0602C37.3516 25.2099 38.0818 23.0778 38.2496 20.866C38.4174 18.6542 38.0173 16.4363 37.0872 14.4226C36.157 12.4089 34.7277 10.6663 32.935 9.36021C31.1422 8.05408 29.0454 7.22774 26.8435 6.9596C24.6417 6.69146 22.4078 6.99043 20.354 7.82812C18.3001 8.66581 16.4944 10.0144 15.1082 11.746H13.1312C10.3262 11.746 7.63609 12.8603 5.65265 14.8438C3.66922 16.8272 2.55493 19.5173 2.55493 22.3223C2.55493 25.1273 3.66922 27.8174 5.65265 29.8009C7.63609 31.7843 10.3262 32.8986 13.1312 32.8986H24.5211C24.6399 32.8989 24.757 32.8967 24.8758 32.8921ZM28.0535 29.1904C31.8773 27.9391 35.0339 24.244 35.0339 19.8816C35.0339 17.2924 34.0053 14.8092 32.1744 12.9784C30.3436 11.1475 27.8604 10.1189 25.2712 10.1189C22.6819 10.1189 20.1987 11.1475 18.3679 12.9784C16.537 14.8092 15.5084 17.2924 15.5084 19.8816H12.2542C12.2542 18.1569 12.5894 16.507 13.1996 15.0003H13.1312C11.1893 15.0003 9.3269 15.7717 7.95375 17.1449C6.5806 18.518 5.80917 20.3804 5.80917 22.3223C5.80917 24.2642 6.5806 26.1266 7.95375 27.4998C9.3269 28.8729 11.1893 29.6444 13.1312 29.6444H24.5211C25.416 29.6444 26.773 29.4833 28.0535 29.1904Z" fill="white" />
                    </svg>
                    <svg className='absolute mb-40 right-[30%]' xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <path d="M16.3702 48.2033C12.7713 48.2033 9.69607 46.9576 7.14443 44.466C4.59278 41.9745 3.31776 38.9293 3.31934 35.3304C3.31934 32.2457 4.24872 29.4971 6.10748 27.0847C7.96623 24.6722 10.3984 23.1299 13.4041 22.4575C14.3928 18.8191 16.3702 15.8728 19.3363 13.6185C22.3024 11.3643 25.664 10.2372 29.4211 10.2372C34.0482 10.2372 37.9737 11.8492 41.1977 15.0731C44.4216 18.2971 46.0328 22.2218 46.0312 26.8474C48.7601 27.1638 51.0246 28.3407 52.8248 30.3782C54.625 32.4157 55.5244 34.7981 55.5228 37.5253C55.5228 40.4915 54.4842 43.013 52.4072 45.0901C50.3301 47.1672 47.8093 48.2049 44.8448 48.2033H16.3702ZM16.3702 43.4576H44.8448C46.5058 43.4576 47.9098 42.8841 49.0567 41.7372C50.2036 40.5903 50.777 39.1864 50.777 37.5253C50.777 35.8643 50.2036 34.4604 49.0567 33.3135C47.9098 32.1666 46.5058 31.5931 44.8448 31.5931H41.2855V26.8474C41.2855 23.5649 40.1283 20.7665 37.8139 18.4521C35.4996 16.1378 32.702 14.9814 29.4211 14.983C26.1386 14.983 23.3401 16.1401 21.0258 18.4545C18.7114 20.7688 17.5551 23.5665 17.5566 26.8474H16.3702C14.0764 26.8474 12.1188 27.6581 10.4973 29.2796C8.87584 30.901 8.06511 32.8587 8.06511 35.1525C8.06511 37.4463 8.87584 39.4039 10.4973 41.0254C12.1188 42.6468 14.0764 43.4576 16.3702 43.4576Z" fill="white" />
                    </svg>
                    <div>
                        <img className=' object-cover border-4 border-dashed rounded-full w-48 h-48' src={fy23} alt="" srcset="" />
                        <h4 className='text-center text-lg mt-2' style={{fontFamily:'Shadows Into Light ,cursive'}}>FY 2023-24</h4>

                    </div>


                </div>
            </div>
        </div>
    )
}
