import React from 'react'
import { useEffect } from 'react'
import { allDatas } from '../Redux/Allpage/action'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'

const AllPages = () => {
    let dispatch=useDispatch()
    let mydata=useSelector((store)=>store.allPage.arr)
    console.log(mydata)
  


    useEffect(()=>{
         dispatch(allDatas)
    },[])
 
  return (
    <div>
      
    </div>
  )
}

export default AllPages