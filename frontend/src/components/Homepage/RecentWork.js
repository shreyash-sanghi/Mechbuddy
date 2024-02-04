import React from "react";
// eslint-disable-next-line
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import logo1 from "./logorecentwork/36643-1-honda-logo.png";
import logo2 from "./logorecentwork/580b57fcd9996e24bc43c487.png";
import logo3 from "./logorecentwork/580b585b2edbce24c47b2cf2.png";
import logo4 from "./logorecentwork/BMW.svg.png";
import logo5 from "./logorecentwork/BharatBenz-logo-1920x1080.webp";
import logo6 from "./logorecentwork/Eicher-logo-1920x1080.webp";
import logo7 from "./logorecentwork/FORCEMOT.NS-49b79a41.png";
import logo8 from "./logorecentwork/Hero_MotoCorp-Logo.wine.png";
import logo9 from "./logorecentwork/Honda_Logo.svg.webp";
import logo10 from "./logorecentwork/Land-Rover-logo-2011-1920x1080.png";
import logo11 from "./logorecentwork/Leyland-logo-1024x768.webp";
import logo12 from "./logorecentwork/MG-logo-red-2010-1920x1080.webp";
import logo13 from "./logorecentwork/Nissan_logo.png";
import logo14 from "./logorecentwork/TVS_Motor_Company-Logo.wine.png";
import logo15 from "./logorecentwork/Tata-Symbol-removebg-preview.png";
import logo16 from "./logorecentwork/audi-logo-2.png";
import logo17 from "./logorecentwork/dezxm1f-1e987c04-a1b7-4554-a189-ed574a591c68.png";
import logo18 from "./logorecentwork/kia-motors-new-20211718-removebg-preview.png";
import logo19 from "./logorecentwork/hyundai-logo-6.png";
import logo20 from "./logorecentwork/skoda-6-logo-png-transparent.png";
import logo21 from "./logorecentwork/toyota-logos-brands-10.png";

// ... add more image imports as needed

const Photo = styled.img`
  width: auto;
  height: 140px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.5);
  object-fit: cover;
  object-position: top;
`;

const RecentWork = () => {
  // Create an array containing references to the image paths or URLs
  const photos = [logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,logo16,logo17,logo18,logo19,logo20,logo21, /* add more images as needed */];

  return (
    <>
    <div className="bg-[#000000] pb-12 z-10">
    <h1 className="flex justify-center text-[#F31D32] items-center w-full mt-1 h-12 text-center bg-[#000000] text-2xl font-bold border-y-2 space-x-[7px]">
    <span>Multibrand Automotive service </span>
  </h1>

  <span className="text-white text-base font-bold text-center mb-20">
    <p></p>{" "}
  </span>

  <div className="bg-[#000000] py-8 max-w-full">
    {/* First Slide */}
    <div style={{ height: 230 }}>
      <Marquee velocity={45}>
        {photos.map((photo, id) => (
          <Photo
            src={photo}
            key={`marquee-recentwork-${id}`}
            style={{
              marginLeft: "30px",
            }}
          />
        ))}
      </Marquee>
    </div>

    <div style={{ height: 180 }}>
          <Marquee velocity={55} direction="ltr">
            {photos.map((photo, id) => (
              <Photo
                src={photo}
                key={`marquee-recentwork-${id}`}
                style={{
                  marginLeft: "30px",
                }}
              />
            ))}
          </Marquee>
        </div>

    {/* Second Slide (left to right) */}

    {/* Third Slide */}

    {/* Add more slides as needed */}
  </div>
</div>
</>
);
};

export default RecentWork;