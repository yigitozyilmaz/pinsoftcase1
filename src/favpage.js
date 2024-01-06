import { useDispatch, useSelector } from "react-redux";
import Hotel from "./hotel/hotel.js"
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from "@mui/material/colors";



const Favpage = () => { 
   
    const cartItems = useSelector((state) => state.cart);  

    const history = useHistory();
    const handleHomeClick = () => {
    
      history.push('/');
    };

return(

<div className="hotellistDiv">
<ToastContainer />
<div className="h-20 w-30 bg-white-600 flex border shadow  ">
<input  className=" h-12 p-2 rounded-md  m-4 ml-36 "   
          
        
        />

        <div className="m-6 "id="favlist">
          <label onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
            <span className="font-bold">Home</span>
            
        <FavoriteIcon fontSize="large" sx={{ color: red[500] }} />
        </label>
        </div>
        </div>
        
<div className="cartDiv">


{" "}
          {cartItems.map((value, index) => (
            <Hotel hotel={value} key={index} />
          ))}{" "}

</div>

</div>



) }
export default Favpage;
