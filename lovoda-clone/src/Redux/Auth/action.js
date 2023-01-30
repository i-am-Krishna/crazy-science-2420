import * as types from './actionTypes';
import axios from 'axios';

export const signup =(params)=>(dispatch)=>{
    dispatch({type:types.REGISTER_REQUEST})
    return axios.post('https://lovoda-backend.vercel.app/api/user/register',params).then((res)=>dispatch({type:types.REGISTER_SUCCESS,payload:res.data})).catch((err)=>dispatch({type:types.REGISTER_FAILURE,payload:err}))
}


export const login =(params)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios.post('https://lovoda-backend.vercel.app/api/user/login',params).then((res)=>dispatch({type:types.LOGIN_SUCCESS,payload:res.data})).catch((err)=>dispatch({type:types.LOGIN_FAILURE,payload:err}))
}


