import React, { useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../redux/actions";
import './hotel.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { red } from '@mui/material/colors';
import Room from "./hotelroom.js";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {CameraControls} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const Hotel = ({hotel}) => {
  const favlist = useSelector((state) => state.cart);  
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
 
  const dispatch = useDispatch();
    
  const removeToCart = () => {
    dispatch(addToCart(hotel));
    toast.warn("🦄 removed to fav", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
		});

  };

  const addCart = () => {
    dispatch(addToCart(hotel));
    toast.warn("🦄 aded to fav", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
		});
  };

 
    return (
        
        <div  className='bg-gray-100 h-96 w-60 m-10 text-center grid place-items-center border border-gray-300 rounded-md' id='hotelCardDiv'>
         <img src={hotel.image} className='w-52 h-52' id='img' alt="Description"></img>
         <h1 className='text-xl font-bold text-gray-800'>{hotel.name}</h1>
         <h1 className='font-bold text-gray-600'>{hotel.location.split(",")[0]}</h1>
         <h1 className='font-bold ' >{hotel.price} TL</h1>
         {
          favlist.filter(x=>x.id===hotel.id).length>0?
          <FavoriteIcon onClick={removeToCart} sx={{ color: red[500]}} />:<FavoriteBorderIcon onClick={addCart}/>
         }
          
      <div>
      <button onClick={openModal} type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Details</button>
   
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content ">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h1 className='text-2xl font-bold text-red-800 p-2'>{hotel.name}</h1>
            <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-2, 5, 0],
        }}
      >
         <Room />
        <CameraControls makeDefault />
       
      </Canvas>
            
            <h1 className='text-2xl font-bold text-gray-800 p-2 max-w-xs whitespace-pre-line' >{hotel.description}</h1>
            
            <div  >
              
            {hotel.rooms.map((room, index) => (
          <div key={index}><h1 className='text-red-800 text-xl font-bold'>{room.type}</h1>
          <h1 className='text-gray-800 text-lg'>{room.capacity} Kişilik </h1>
          <h1 className='text-black-800 text-lg'>{room.price} TL </h1></div>
        ))}          
        </div>
        </div>
        </div>
      )}

     
    </div>

      </div>
    

    
        );
    };
    
    
   
    export default Hotel;