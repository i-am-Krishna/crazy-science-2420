 
 import * as types from './actionTypes'
import axios from 'axios'

export const setCartData = (params)=>(dispatch)=>{
    dispatch({type:types.CART_REQUEST})
    return axios.post('http://localhost:8080/Cart',params).then((res)=>dispatch({type:types.CART_SUCCESS,payload:res.data})).catch((err)=>dispatch({type:types.CART_FAILURE,payload:err}))
}

 