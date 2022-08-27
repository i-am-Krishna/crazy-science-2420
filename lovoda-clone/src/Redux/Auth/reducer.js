import * as types from './actionTypes';
import {getData,setData} from '../../Utils/localStorage';

const initState = {
    isAuth: getData('token') ? true : false,
    token: getData('token') || '',
    isLoading: false,
    isError: false
}

export const reducer =(state=initState,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }

        case types.LOGIN_SUCCESS:{
            setData('token',payload)
            return {
                ...state,
                isLoading:false,
                isError:false,
                isAuth:true,
                token: payload
            }
        }

        case types.LOGIN_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true,
                token:'',
                isAuth:false
            }
        }

        case types.REGISTER_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }

        case types.REGISTER_SUCCESS:{
            return {
                ...state,
                isLoading:false,
                isError:false,
                isAuth:true,
                token: payload
            }
        }

        case types.REGISTER_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true,
                token:'',
                isAuth:false
            }
        }


        default : return state;
    }
}