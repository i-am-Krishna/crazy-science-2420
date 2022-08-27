import { GET_ALLPAGE_REQUEST,GET_ALLPAGE_SUCCESS,GET_ALLPAGE_FAILURE } from "./actionType";

import axios from 'axios'


let req=()=>{
    return{
        type:GET_ALLPAGE_REQUEST
    }
}
let suc=(payload)=>{
    return{
        type:GET_ALLPAGE_SUCCESS,payload
    }
}

let fail=()=>{
    return{
        type:GET_ALLPAGE_FAILURE
    }
}

let allDatas=(dispatch)=>{
    dispatch(req())
    axios.get("http://localhost:8080/shopAll")
    .then((res)=>{dispatch(suc(res.data))})
    .catch((err)=>{dispatch(fail())})
    
}


export {allDatas}