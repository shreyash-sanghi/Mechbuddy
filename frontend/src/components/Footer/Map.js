import React from "react";

const Map = () => {
  return (
    <div className="relative bg-[#F31D32] -z-10">
      {/* Blue background for the top 50% */}
      <div className="bg-[#F31D32] h-1/2 w-full"></div>

      {/* Google Map */}
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="mx-auto bg-white max-w-screen-xl space-y-8 p-2 sm:px-2 lg:space-y-16 lg:px-2">
          <iframe className="h-[150px]"
            title="Google Map"
            src="https://maps.google.com/maps?q=jabalpur%20incubation%20center&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"

            style={{
              border: "0",
              borderRadius: "10px",
              marginTop: "0.95rem",
              marginBottom: "0.95rem",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </div>

      {/* White background for the bottom 50%, floated on top */}
      <div className="absolute bottom-0 z-[-1] bg-footerbg bg-top  w-full h-[40%] "></div>
    </div>
  );
};

export default Map;
