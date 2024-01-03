export const addToCart = (hotel) => {
    return {
      type: "ADD_TO_CART",
      payload: hotel,
    };
  };
