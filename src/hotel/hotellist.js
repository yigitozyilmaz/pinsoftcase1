import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotellist from "../data/hotels.json"
import Hotel from "./hotel.js"
import './hotelList.css';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from "@mui/material/colors";
const HotelList = () => { 
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [checkedLocation, setCheckedLocation] = useState([]);



    let result = hotellist.filter(function (obj) {
      if (checkedLocation.length > 0) {
        
        return (
          checkedLocation.includes(obj.location.split(",")[0]) &&
          Object.values(obj).some(value =>
            typeof value === "string" &&
            value.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
    } else {

      return Object.values(obj).some(value =>
        typeof value === "string" &&
        value.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
      });
      const handleCheckbox = (event) => {
        if (event.target.checked) {
          setCheckedLocation([...checkedLocation, event.target.value]);
        } else {
          setCheckedLocation(
            checkedLocation.filter((value) => value !== event.target.value)
          );
        }
      };
      const history = useHistory();
      const handleFavoriteClick = () => {
      
        history.push('/favpage');
      };

return(


<div className="hotellistDiv">
<ToastContainer />
<div className="h-20 w-30 bg-white-600 flex border shadow  ">
<input
          className="border border-gray-300 h-12 p-2 rounded-md focus:outline-none focus:border-blue-500 m-4 ml-36 bg-red-100"
          type="text"
          value={inputValue}
          placeholder="Search"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="m-6 "id="favlist">
          <label onClick={handleFavoriteClick} style={{ cursor: 'pointer' }}>
            <span className="font-bold">Fav List</span>
            
        <FavoriteIcon fontSize="large" sx={{ color: red[500] }} />
        </label>
        </div>
        </div>
        
<div>
  <div className="flex ">
  <div className="checkbox-mainDiv border shadow bg-white-600 w-36">
  <h1 className="text-red-500 text-2xl font-bold">City Filter</h1>
  {hotellist.map((value, key) => (
    <label key={key} className="text-lg flex items-center text-lg hover:bg-gray-200">
      <span className="mr-2">{value.location.split(",")[0]}</span>
      <input
        type="checkbox"
        value={value.location.split(",")[0]}
        checked={checkedLocation.includes(value.location.split(",")[0])}
        onChange={(event) => handleCheckbox(event)}
        className="form-checkbox text-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none checked:bg-red-500 "
      />
    </label>
  ))}
</div>

        <div className="cartDiv">

{" "}
          {result.map((value, index) => (
            <Hotel hotel={value} key={index} />
          ))}{" "}
</div>
</div>
</div>


</div>



) }
export default HotelList;
