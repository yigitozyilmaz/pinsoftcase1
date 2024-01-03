"use client"
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import hotellist from "../data/hotels.json"
import Hotel from "./hotel.js"
import { object } from "prop-types";



const HotelList = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    let result = hotellist.filter(function (obj) {
      console.log(obj);
      return (
        obj

              );
      });
 

return(

<div>
<div>


{" "}
          {result.map((value, index) => (
            <Hotel hotel={value} key={index} />
          ))}{" "}

</div>


</div>



) }
export default HotelList;
