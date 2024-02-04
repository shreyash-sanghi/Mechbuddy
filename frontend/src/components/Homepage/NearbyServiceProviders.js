import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your vendor images
import vendorImage1 from './vendersimage/dvfjkefkjwegfwegf.jpg';
import vendorImage2 from './vendersimage/fjgfghf.jpg';
import vendorImage3 from './vendersimage/gfghfjgfuytuiyt.jpg';
import vendorImage4 from './vendersimage/jjhgkjhgituuityyu.jpg';
import vendorImage5 from './vendersimage/65654645656546456456132156423168498.jpg';
import vendorImage6 from './vendersimage/pexels-andrea-piacquadio-3806249.jpg';
import vendorImage7 from './vendersimage/pexels-pixabay-372810.jpg';
import vendorImage8 from './vendersimage/wdhjwdjwedwhd.jpg';


const ServiceProviders = () => {
  const vendors = [
    {
      id: 1,
      name: "BABA HERO HONDA SERVICE CENTER",
      description: "GHANTA GHAR.",
      image: vendorImage1,
    },
    {
      id: 2,
      name: "GURU NANAK ENTERPRISES",
      description: "GORAKHPUR GURUDAWARA NEAR HAWBAG RAILWAY STATION",
      image: vendorImage2,
    },
    {
      id: 3,
      name: "DANISH REPAIRING",
      description: "SADAR BESIDE TOP N TOWN OR GARACIN GARDEN",
      image: vendorImage3,
    },
    {
      id: 4,
      name: "RK AUTOMOBILE",
      description: "1461 NEAR HOUSING BOARD COLONY BIMA  HOSPITAL ROAD KACH GHAR",
      image: vendorImage4,
    },
    {
      id: 5,
      name: " RAO WORKSHOP",
      description: "RANJHI ENDING ",
      image: vendorImage5,
    },
    {
      id: 6,
      name: "CALLY SCOOTER SERVICE CENTER",
      description: "SOUTH CIVIL LINE INFRONT OF KALCHURI HOTEL",
      image: vendorImage6,
    },
    {
      id: 7,
      name: "VISHAL AUTOCARE",
      description: "SHOP N.O. 2 KASTORI TOWER INFRONT OF KRISHI UPAJ MANDI GATE N.O. 2",
      image: vendorImage7,
    },
    {
      id: 8,
      name: "KAPOOR SCOOTER & MOTOR CYCLE HOUSE",
      description: "METRO MARKET SHOP N.O. 7 TURNING DHANI KI KUTIYA",
      image: vendorImage8,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <section className="pb-16 bg-nearbyserviceprovidersbg bg-cover bg-top flex flex-col justify-center items-center align-middle">
      <h1 className="flex justify-center text-[#F31D32] items-center w-full h-12 text-center mb-8 bg-[#000000] border-y-2 text-2xl font-bold space-x-[7px]">
       <span>NEARBY <span className="text-white">SERVICE</span> PROVIDERS</span>
      </h1>

      <div className="w-[80%] mx-auto">
        <Slider {...settings}>
          {vendors.map((vendor) => (
            <div key={vendor.id} className="py-2 min-w-[90vw] sm:min-w-[70vw] md:min-w-[55vw] lg:min-w-[45vw] border border-black bg-white flex flex-col">
              <div style={{ flex: 1 }}>
                <img className="h-[17rem] w-full object-cover" src={vendor.image} alt="" />
              </div>
              <div className="flex p-4 justify-between bg-[#000515] text-white">
                <div className="w-[70%]">
                  <h1 className="text-xl">{vendor.name}</h1>
                  <p className="text-sm">{vendor.description}</p>
                </div>
                <div>
                  <Link to={`/book-now/${vendor.id}`}>
                    <button
                      type="button"
                      className="focus:outline-none text-[#000515] bg-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServiceProviders;








// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ServiceProviders = () => {
//   const [vendors, setVendors] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     afterChange: (current) => setCurrentSlide(current),
//   };

//   useEffect(() => {
//     // Fetch vendor data from your API
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/api/auth/getvendor", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }); // Replace with your actual API endpoint
//         const data = await response.json();
        
//         if (Array.isArray(data)) {
//           setVendors(data);
//         } else {
//           console.error("Fetched data is not an array:", data);
//         }

//         setVendors(data.vendors);
//       } catch (error) {
//         console.error("Error fetching vendor data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs once after the initial render

//   return (
//     <section className="pb-16 bg-nearbyserviceprovidersbg bg-cover bg-top flex flex-col justify-center items-center align-middle">
//       <h1 className="flex justify-center text-[#F31D32] items-center w-full h-12 text-center mb-8 bg-[#000000] border-y-2 text-2xl font-bold space-x-[7px]">
//         <span>NEARBY <span className="text-white">SERVICE</span> PROVIDERS</span>
//       </h1>

//       <div className="w-[80%] mx-auto">
//         <Slider {...settings}>
//           {vendors.map((item,index) => {
//             let linku = `/vendor?vendor_id=${item._id}`;
//             return (
//               <div key={index} className=" py-2 min-w-[90vw] sm:min-w-[70vw] md:min-w-[55vw] lg:min-w-[45vw] border border-black bg-white flex flex-col">
//                 <div>
//                   <img className="h-[15rem] w-full object-cover" src="https://th.bing.com/th/id/OIP._SZM30_l7zXHQ3ShNcMOxQHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" srcset="" />
//                 </div>
//                 <div className="flex p-4 justify-between bg-[#000515] text-white">
//                   <div className="w-[70%]">
//                     <h1 className="text-xl">{item.name}</h1>
//                     <p className="text-sm">{item.vendor_description}</p>
//                   </div>
//                   <div>
//                     <Link to={linku} type="button" class="focus:outline-none text-[#000515] bg-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
//                       Book Now
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default ServiceProviders;
