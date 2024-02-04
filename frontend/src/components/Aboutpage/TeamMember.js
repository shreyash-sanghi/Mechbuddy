// TeamMember.js
import React from "react";

const TeamMember = ({ image, name, title, description }) => {
  return (
    <div className="bg-white h-full w-60 relative">
      {/* Added 'relative' class */}
      <div>
        <img
          className="w-full object-cover rounded-t h-80 "
          src={image}
          alt=""
        />{" "}
        {/* Added 'alt' attribute for accessibility */}
      </div>
      <div className="absolute top-[14.5rem] left-[5.5rem] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="mt-10 text-2xl text-white">
          <span className="text-2xl">{name}</span>
          {/* <span className="text-base">DUBEY </span> */}
        </h1>
      </div>
      {/* icon */}
   
      {/* icon end */}
      <div className="h-5 w-full">{""}</div>
      <div className="p-4 ">
        <h1 className="mt-5 text-2xl text-[#FF4457] ">
          {" "}
          {title}
          {/* title prop added */}
        </h1>
        <p>
          {" "}
          {description}
          {" "}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
