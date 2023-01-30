import * as types from './actionTypes';
import axios from 'axios';

export const getNewPageData = (params)=>(dispatch)=>{
    dispatch({type:types.GET_NEWPAGE_REQUEST})
    return axios.get('https://lovoda-backend.vercel.app/api/product',params).then((res)=> dispatch({type:types.GET_NEWPAGE_SUCCESS,payload:res.data})).catch((err)=>dispatch({type:types.GET_NEWPAGE_FAILURE,payload:err}))
}