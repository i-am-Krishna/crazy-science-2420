import * as types from './actionTypes';
const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  const {type,payload} = action ;
  switch(type){
    case types.CART_REQUEST:{
      return {
        ...state,
        isLoading:true,
        isError:false
      }
    }

    case types.CART_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        products:[...payload],
        isError:false
      }
    }

    case types.CART_FAILURE:{
      return {
        ...state,
        isLoading:false,
        isError:true
      }
    }
 














    default : return state;
  }
};







 