"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hotel from "./hotel/hotel.js"




const favpage = () => { 
   
    const cartItems = useSelector((state) => state.cart);  

  console.log(cartItems);

return(


<div>


{" "}
          {cartItems.map((value, index) => (
            <Hotel hotel={value} key={index} />
          ))}{" "}

</div>





) }
export default favpage;
