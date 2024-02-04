import React, { useContext } from "react";
import Select from "react-select";
import noteContext from "../../context/noteContext";
export default function Payment_dialog(props) {
    // React state to manage selected options
    const {mode,setMode}=useContext(noteContext);
    

    // Array of all options
    const optionList = [
        { value: "Cash On Service", label: "Cash On Service" },
        { value: "Online Payment", label: "Online Payment" }
    ];

    // Function triggered on selection
    function handleSelect(data) {
        setMode(data);
        

    }
    return (
        <div className=" z-100 mb-8">

            <div className="dropdown-container">
                <Select
                    options={optionList}
                    placeholder="Select Mode Of Payment"
                    value={mode}
                    onChange={handleSelect}
                    isSearchable={true}

                />
            </div>


        </div>
    );
}