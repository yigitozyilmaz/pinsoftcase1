"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotellist from "../data/hotels.json"
import Hotel from "./hotel.js"

const HotelList = () => { 
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [checkedLocation, setCheckedLocation] = useState([]);



    let result = hotellist.filter(function (obj) {
      if (checkedLocation.length > 0) {
      
      return Object.values(obj).some(value =>
        typeof value === "string" && value.toLowerCase().includes(inputValue.toLowerCase())
      );
    } else {

      return obj.location.toLowerCase().includes(inputValue.toLowerCase());
    }
      });
      const handleCheckbox = (event) => {
        if (event.target.checked) {
          setCheckedLocation([...checkedCategories, event.target.value]);
        } else {
          setCheckedLocation(
            checkedCategories.filter((value) => value !== event.target.value)
          );
        }
      };

return(

<div>
<div>
<input
          className="search"
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

<div className="checkbox-mainDiv">
          <p>Filter</p>

          {hotellist.map((value, key) => (
            
            <p key={key} className="filter">
              {value}{" "}
              <input
                type="checkbox"
                value={value.location.split(",")[0]}
                checked={checkedLocation.includes(value)}
                onChange={(event) => handleCheckbox(event)}
              ></input>{" "}
            </p>
          ))}
        </div>

{" "}
          {result.map((value, index) => (
            <Hotel hotel={value} key={index} />
          ))}{" "}

</div>


</div>



) }
export default HotelList;
