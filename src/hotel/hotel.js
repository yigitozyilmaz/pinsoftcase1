"use client"
import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../redux/actions";






const Hotel = ({hotel}) => {
  const cartItems = useSelector((state) => state.cart);  

  console.log(cartItems);
  
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
 
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
      
         <button  onClick={handleAddToCart}>
        Add to Cart
      </button>

      <div>
      <button onClick={openModal}>Details</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={hotel.image} className='w-96 h-96'></img>
            
            <h1>{hotel.description}</h1>
            
            <div className='flex' >
              
            <h1>{hotel.rooms.map((room, index) => (
          <div key={index}><h1>{room.type}</h1>
          <h1>{room.capacity} Kişilik Oda</h1>
          <h1>{room.price} TL </h1></div>
        ))}       </h1>          
        </div>
        </div>
        </div>
      )}

      <style jsx>{`
        /* Modal stilleri */
        .modal {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #fff;
          padding: 20px;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>

      </div>
    

    
        );
    };
    
    
   
    export default Hotel;