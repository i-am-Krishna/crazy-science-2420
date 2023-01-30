import * as types from './actionTypes'
import axios from 'axios'
let id = localStorage.getItem("cartId");



export const setCart = (params)=>(dispatch)=>{
    dispatch({type:types.CART_REQUEST})
    return axios.get(`https://lovoda-backend.vercel.app/api/cart/${id}`,params).then((res)=>dispatch({type:types.CART_SUCCESS,payload:res.data})).catch((err)=>dispatch({type:types.CART_FAILURE,payload:err}))}

 
export const addCart = (params)=>(dispatch)=>{
    dispatch({type:types.ADD_CART_REQUEST})
    return axios.post("https://lovoda-backend.vercel.app/api/cart",params)
    .then((res)=>dispatch({type:types.ADD_CART_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:types.ADD_CART_FAILURE,payload:err}))
}


export const deleteCart =(id)=>(dispatch)=>{
    dispatch({type:types.DELETE_CART_REQUEST})
    return axios.delete(`https://lovoda-backend.vercel.app/api/cart/${id}`)
    .then((res)=>dispatch({type:types.DELETE_CART_SUCCESS}))
    .catch((err)=>dispatch({type:types.DELETE_CART_FAILURE,payload:err}))
}