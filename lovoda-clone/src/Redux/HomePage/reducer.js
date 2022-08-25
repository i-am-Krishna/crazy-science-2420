import { GET_HOMEPAGE_FAILURE, GET_HOMEPAGE_SUCCESS, GET_HOMEPAGE_REQUEST } from "./actionType";
const initalState = {
    HomePageData:[],
    isLoading: false,
    isError: false,
}

export const reducer=(state=initalState,action)=>{
    const {type,payload} = action;
    switch(type){
        case GET_HOMEPAGE_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        
        case GET_HOMEPAGE_SUCCESS:
            return {
                ...state,
                HomePageData:payload,
                isLoading:false,
                isError:false
            }
        
        case GET_HOMEPAGE_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        
        default: return state;
    }
}