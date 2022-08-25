

 let initialData={
    arr:[],
    isLoading:false,
    isError:false
 }

 let reducer=(oldState=initialData,action)=>{
    console.log(action.type)
     switch(action.type){
      
        case 'GET_ALLPAGE_REQUEST':{
            return{
                ...oldState,isLoading:true,isError:false
            }
        }
        case 'GET_ALLPAGE_SUCCESS':{
            return{
                ...oldState,isLoading:false,isError:false,arr:action.payload
            }
        }
        case 'GET_ALLPAGE_FAILURE':{
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