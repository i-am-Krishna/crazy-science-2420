import * as types from './actionTypes';
import axios from 'axios';

// export const register =(payload)=>dispatch=>{
// dispatch({type: types.REGISTER_REQUEST})
// return axios.post('https://masai-api-mocker.herokuapp.com/auth/register',payload).then((r)=> { dispatch({type: types.REGISTER_SUCCESS,payload:r.data})
// return types.REGISTER_SUCCESS
// }).catch((e)=>{dispatch({type:types.REGISTER_FAILURE,payload:e})
// return types.REGISTER_FAILURE
// })
// }

// export const login =(params)=>dispatch=>{
// dispatch({type:types.LOGIN_REQUEST})
// return axios.post('https://masai-api-mocker.herokuapp.com/auth/login',params).then((r)=> {dispatch({type:types.LOGIN_SUCCESS,payload:r.data.token})
// return types.LOGIN_SUCCESS
// }).catch((e)=>{dispatch({type:types.LOGIN_FAILURE,payload:e})
// return types.LOGIN_FAILURE 
// })
// }




export const signup =(params)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios.get('https://reqres.in/api/register',params).then((res)=>dispatch({type:types.LOGIN_SUCCESS,payload:res.data})).catch((err)=>dispatch({type:types.LOGIN_FAILURE,payload:err}))
}


export const login =(params)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios.get('https://reqres.in/api/login',params).then((res)=>dispatch({type:types.LOGIN_SUCCESS,payload:res.data})).catch((err)=>dispatch({type:types.LOGIN_FAILURE,payload:err}))
}


