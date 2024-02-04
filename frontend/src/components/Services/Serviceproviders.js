import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DotSpinner } from "@uiball/loaders";

export default function Serviceproviders() {
  const [vendor, setVendor] = useState([]);
  const [loading, setLoading] = useState(false);

  const mockData = {
    loading: false,
    vendor: [
      {
        _id: "1",
        shop_name: "BABA HERO HONDA SERVICE CENTER",
        shop_address: "GHANTA GHAR",
        vendor_average_price: 200,
      },
      {
        _id: "2",
        shop_name: "BABA TAJ HERO HONDA &BULEET SERVICE",
        shop_address: "BESIDE INDIAN COFFE HOUSE SADAR",
        vendor_average_price: 200,
      },
      {
        _id: "3",
        shop_name: "GURU NANAK ENTERPRISES",
        shop_address: "GHANTA GHAR",
        vendor_average_price: 300,
      },
      {
        _id: "4",
        shop_name: "DANISH REPAIRING",
        shop_address: "SADAR BESIDE TOP N TOWN OR GARACIN GARDEN",
        vendor_average_price: 250,
      },
      {
        _id: "5",
        shop_name: "ROSHAN BIKE CARE",
        shop_address: "CITY COFFEE HOUSE ROAD BADIOMTI",
        vendor_average_price: 200,
      },
      {
        _id: "6",
        shop_name: "AKRAM BULEET SERVICE CENTER",
        shop_address: "SATPULA BAZAR GCF MARKET",
        vendor_average_price: 300,
      },
      {
        _id: "8",
        shop_name: "RAO WORKSHOP",
        shop_address: "RANJHI ENDING",
        vendor_average_price: 300,
      },
      {
        _id: "7",
        shop_name: "RK AUTOMOBILE",
        shop_address:
          "1461 NEAR HOUSING BOARD COLONY BIMA HOSPITAL ROAD KACH GHAR",
        vendor_average_price: 300,
      },
      {
        _id: "9",
        shop_name: "CALLY SCOOTER SERVICE CENTER",
        shop_address: "SOUTH CIVIL LINE IN FRONT OF KALCHURI HOTEL",
        vendor_average_price: 300,
      },
      {
        _id: "10",
        shop_name: "VISHAL AUTOCARE",
        shop_address:
          "SHOP NO. 2 KASTORI TOWER IN FRONT OF KRISHI UPAJ MANDI GATE NO. 2",
        vendor_average_price: 250,
      },
      {
        _id: "11",
        shop_name: "KAPOOR SCOOTER & MOTOR CYCLE HOUSE",
        shop_address: "METRO MARKET SHOP NO. 7 TURNING DHANI KI KUTIYA",
        vendor_average_price: 250,
      },
      
      // Add more vendor objects as needed
    ],
  };
  // Replace the existing data with the mockData
  const { vendor: mockVendor } = mockData;

  // useEffect(() => {
  //     fetchSpares();
  // }, [])

  // const fetchSpares = async () => {
  //     try {

  //         setLoading(true);
  //         let serviceApi = 'http://localhost:8000/api/auth/getvendor';

  //         const response = await fetch(serviceApi, {
  //             method: "GET",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //         });
  //         const json = await response.json();
  //         if (json.success) {

  //             setLoading(false);

  //             setVendor(json.vendors)
  //         }
  //         else {
  //             setLoading(false);
  //             alert('error')
  //         }
  //     } catch (error) {

  //     }
  // }

  return (
    <div>
      <div className="bg-[#EBEBEB] text-white">
        <h1 className="text-black  text-3xl font-bold  mb-10 py-2 px-2">
          Service Providers
        </h1>
        {/* list of cards */}
        <div className="flex  flex-col p-4 lg:px-32 gap-4">
          {/* single card */}

          {loading ? (
            <div className="ml-auto mr-auto">
              <DotSpinner size={40} speed={0.9} color="red" />
            </div>
          ) : (
            mockVendor.map((item) => {
              let linku = `/vendor?vendor_id=${item._id}`;
              return (
                <div className="flex  bg-[#000000E8] p-2 md:py-4 md:px-16 justify-start md:justify-between rounded-md">
                  {/* image and rating */}
                  <div
                    className="bg-red absolute"
                    style={{ clipPath: "polygon(19% 0, 31% 0, 0 50%, 0 34%)" }}
                  ></div>
                  <div className="flex flex-col">
                    <div className="w-[28vw] 570:w-[20vw] md:w-[15vw]  sm:w-auto">
                      <img
                        className="w-[28vw] 570:w-[20vw] md:w-[15vw] h-28 rounded-lg"
                        src="https://th.bing.com/th/id/OIP._SZM30_l7zXHQ3ShNcMOxQHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt=""
                        srcset=""
                      />
                    </div>

                    <div class="hidden md:flex items-center justify-center">
                      <svg
                        class="w-8 h-8 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <p class="ml-2 text-md font-bold text-white">4.95</p>
                    </div>
                  </div>
                  {/* name address */}
                  <div className="flex flex-col whitespace-nowrap overflow-auto  text-ellipsis justify-evenly px-4 gap-2">
                    <div className="font-bold text-xl">{item.shop_name}</div>
                    <div className="flex gap-4">
                      <div>
                        <svg
                          class="w-6 h-6 text-white "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 20"
                        >
                          <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                        </svg>
                      </div>
                      <div className="">{item.shop_address}</div>
                    </div>
                    <div className="flex md:hidden justify-evenly">
                      <div className="flex">
                        <svg
                          class="w-6 h-6 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p>4.2</p>
                      </div>
                      •<div>₹ {item.vendor_average_price}</div>•
                      <div>1.5 Kms</div>
                    </div>
                    <div className="flex justify-center overscroll-none md:hidden">
                      <Link
                        to={linku}
                        type="button"
                        class="text-white bg-[#F31D32]  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Get Now
                      </Link>
                    </div>
                    {/* price */}
                    <div className="hidden md:flex">
                      <div className="font-bold text-md">Price: </div>
                      <div>Rs {item.vendor_average_price}</div>
                    </div>
                  </div>
                  {/* Distance */}
                  <div className="hidden  md:flex flex-col text-center justify-evenly">
                    <div className="font-bold">Nearby Distance</div>
                    <div>1.5 Kms</div>
                    <div>
                      <Link
                        to={linku}
                        type="button"
                        class="text-white bg-[#F31D32]  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
          {/* card end */}
        </div>
      </div>
    </div>
  );
}
