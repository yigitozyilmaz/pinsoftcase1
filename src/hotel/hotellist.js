"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotellist from "../data/hotels.json"
import Hotel from "./hotel.js"




const HotelList = () => { 
   const cartItems = useSelector((state) => state.cart);  

  console.log(cartItems);
    let result = hotellist.filter(function (obj) {
      
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
