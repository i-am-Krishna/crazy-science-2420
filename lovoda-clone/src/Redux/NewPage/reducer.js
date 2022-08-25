import * as types from './actionTypes';
const initState = {
    isLoading: false,
    isError: false,
    newPageData:[]
}

export const reducer=(state=initState,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.GET_NEWPAGE_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case types.GET_NEWPAGE_SUCCESS:{
            return {
                ...state,
                isLoading:false,
                newPageData:payload,
                isError:false
            }
        }
        case types.GET_NEWPAGE_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default: return state;
    }
}