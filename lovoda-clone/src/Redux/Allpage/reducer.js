import * as types from './actionType'

 let initialData={
    arr:[],
    isLoading:false,
    isError:false
 }

 let reducer=(oldState=initialData,action)=>{
     switch(action.type){
      
        case types.GET_ALLPAGE_REQUEST:{
            return{
                ...oldState,isLoading:true,isError:false
            }
        }
        case types.GET_ALLPAGE_SUCCESS:{
            return{
                ...oldState,isLoading:false,isError:false,arr:action.payload
            }
        }
        case types.GET_ALLPAGE_FAILURE:{
            return{
                ...oldState,isLoading:false,isError:true
            }
        }
        default:{
            return oldState
        }
     }
 }

 export {reducer}