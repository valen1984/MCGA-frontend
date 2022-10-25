import {
    GET_PRODUCTS,
    SET_PRODUCTS,
    DISMISS_PRODUCTS,
  } from "./types";
  
  const INITIAL_STATE = {
    isLoadingProducts: false,
    products: [],
  };
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
        };
      default:
        return state;

    case GET_PRODUCTS:
        return {
          ...state
        };
    case DISMISS_PRODUCTS:
        return {
          ...state,
          isLoadingProducts: false,
    };
    
  };
}
  export default reducer;