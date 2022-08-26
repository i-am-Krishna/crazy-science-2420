import * as types from "./actionType";
import axios from 'axios'
export const allDatas = (params)=>(dispatch)=>{
    dispatch({type:types.GET_ALLPAGE_REQUEST})
    return axios.get('http://localhost:8080/shopAll',params)
    .then((res)=>dispatch({type:types.GET_ALLPAGE_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:types.GET_ALLPAGE_FAILURE,payload:err}))
}