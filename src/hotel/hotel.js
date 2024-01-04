"use client"
import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../redux/actions";





const Hotel = ({hotel}) => {

  const cartItems = useSelector((state) => state.cart);  

  console.log(cartItems);
  
  const dispatch = useDispatch();
    
  const handleAddToCart = () => {
    dispatch(addToCart(hotel));
    
   
  };

  
   
    return (
        
        <div>
         <img src={hotel.image} className='w-52 h-52'></img>
         <h1>{hotel.name}</h1>
         <h1>{hotel.location.split(",")[0]}</h1>
         <h1>{hotel.price}TL</h1>
         <h1>{hotel.rooms.map((room, index) => (
          <div key={index}>{room.type}</div>
        ))}       </h1>
         <button  onClick={handleAddToCart}>
        Add to Cart
      </button>

      </div>
    
        );
    };
   
    export default Hotel;