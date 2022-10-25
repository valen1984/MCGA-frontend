import { SET_PRODUCTS, GET_PRODUCTS, DISMISS_PRODUCTS } from "./types";

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: {
      products: products,
    },
  };
};

export const setLoading = () => {
    return {
        type: SET_PRODUCTS,
        payload: {
            isLoadingProducts: true
        }
    }
}

export const dismissLoading = () => {
    return {
        type: DISMISS_PRODUCTS,
        payload: {
            isLoadingProducts: false
        }
    }
}