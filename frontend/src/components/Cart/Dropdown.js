import React, { useState, useContext } from "react";
import Select from "react-select";
import noteContext from "../../context/noteContext";

export default function Dropdown(props) {


  // React state to manage selected options
  
  const {option, setOptions  } = useContext(noteContext);


  // Array of all options
  const optionList = [
    { value: "10AM - 12 PM", label: "10AM - 12 PM" },
    { value: "12PM - 02 PM", label: "12PM - 02 PM" },
    { value: "02PM - 04 PM", label: "02PM - 04 PM" },
    { value: "04PM - 06 PM", label: "04PM - 06 PM" }

  ];

  // Function triggered on selection
  function handleSelect(data) {
    setOptions(data);
    
  }
  return (
    <div className=" z-100 mb-8">

      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select Slot"
          value={option}
          onChange={handleSelect}
          isSearchable={true}

        />
      </div>


    </div>
  );
}