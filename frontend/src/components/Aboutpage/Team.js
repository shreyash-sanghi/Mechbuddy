import React from "react";
import Teambg from "./assets/abstract-metallic-red-black-back.avif";

import siddharth from "./assets/4.png";
import ashutosh from "./assets/8.png";
import mukul from "./assets/7.png";
import nishant from "./assets/5.png";
import madhvendra from "./assets/9.png";
import rahul from "./assets/6.png";
import TeamMember from "./TeamMember";

const Team = () => {
  const bgStyle = {
    backgroundImage: `url(${Teambg})`,
    backgroundPosition: 'center', // Center the background image
    backgroundSize: 'cover',      // Cover the entire container
    opacity: 0.8,                 // Set the transparency (adjust as needed)
  };

  return (
    <>
      <div style={bgStyle} className="overflow-x-hidden  mr-0 w-full">
        <h1 className="text-[#F31D32] bg-[#F9F9F9] h-[60px] text-3xl font-bold text-center  py-2 uppercase ">
          MEET THE TEAM
        </h1>
        {/* Container */}

        <div
          className="relative my-4 w-[300px] "
          style={{
            borderLeft: "solid transparent",
            borderRight: "50px solid transparent",
            borderTop: "60px solid #909090",
          }}
        >
          <div className="absolute top-[-35px] transform -translate-y-1/2 left-1/2  -translate-x-1/2  justify-center items-center content-center place-items-center w-full ml-3 ">
            <h1 className="text-white font-bold text-2xl mx-auto flex justify-center items-center">
              Engines of Company
            </h1>
          </div>
        </div>

        {/* ========================================================================  */}
        {/*just change the grid column to 2 so that they both come with the space between in them*/}

        <div className="p-5 container mx-auto">
          {/* Section 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-16 justify-between items-center content-center place-items-center">
            {/* card */}
            <TeamMember
              image={siddharth}
              
              
              
              description="Handle all tasks related to business development, proper supply chain, workflow, Business Expansion, strategy making, etc"
            />
            <TeamMember
              image={nishant}
             
             
              description="Handle all tasks related to Product Market Fit, CRM Business Development, Operations, strategy-making, etc."
            />
            {/* Repeat for other members */}
          </div>
        </div>

        {/* Section 2 */}

        <div className=" flex justify-end">
          <div
            className="relative my-4 w-[500px]   "
            style={{
              borderLeft: "50px solid transparent",
              borderRight: "solid transparent",
              borderTop: "50px solid #909090",
            }}
          >
            <div className="absolute top-[-28px] transform -translate-y-1/2 left-1/2  -translate-x-1/2  justify-center items-center content-center place-items-center w-full ml-3 ">
              <h1 className="text-white font-bold text-2xl">
                4 Wheels That Drives The Company
              </h1>
            </div>
          </div>
        </div>

        <div className="p-5 container mx-auto">
          {/* Section 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center content-center place-items-center">
            {/* card */}
              <TeamMember
                image={mukul}
               
                
                description="Handle all field-related challenges like Vendor Management, Data Mining collaboration, etc"
              />
            {/* Repeat the card structure for other items */}
            <TeamMember
              image={ashutosh}
            
             
              description="Manage all Research & development-related tasks like Data Analysis, Product Development etc."
            />
            <TeamMember
              image={madhvendra}
            
             
              description="Handle all types of management-related tasks like Hiring, Social Media, Growth Analysis, etc"
            />
            <TeamMember
              image={rahul}
              
             
              description="Handle all Tech related channels like Web Development. App Development. etc"
            />
            
            {/* Card end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
