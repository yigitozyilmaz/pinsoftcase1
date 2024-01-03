const initialState = {
    cart: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItem = state.cart.find(
          (item) => item.id === action.payload.id
        );
        if (existingItem) {
          const updatedCart =  state.cart.filter(
            (item) => item.id !== action.payload
          );
          return {
            ...state,
            cart: updatedCart,
            
          };
          
        } else {
          const newItem = {
            id: action.payload.id,
            image:action.payload.image,
            name: action.payload.name,
            location: location.payload.location,
            price: action.payload.price,
            description: action.payload.description,
            rooms: action.payload.rooms,
          };
          return {
            ...state,
            cart: [...state.cart, newItem],
          };
          
        }
   
      default:
        return state;
    }
  };
  
  export default rootReducer;