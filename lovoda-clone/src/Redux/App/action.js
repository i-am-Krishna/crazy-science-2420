import axios from 'axios';
import * as types from './actionTypes';

export const login =(params)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",params).then((res)=>dispatch({type:types.LOGIN_SUCCESS,payload:res.data.token})).catch((err)=>dispatch({type:types.LOGIN_FAILURE,payload:err}))
}

export const register =(params)=>(dispatch)=>{
    dispatch({type:types.REGISTER_REQUEST})
    return axios.post('https://masai-api-mocker.herokuapp.com/auth/register',params).then((res)=>dispatch({type:types.REGISTER_SUCCESS,payload:res.data})).catch((err)=>dispatch({type:types.REGISTER_FAILURE,payload:err}))
}