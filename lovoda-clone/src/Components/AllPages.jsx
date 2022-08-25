import React from 'react'
import { useEffect } from 'react'
import { allDatas } from '../Redux/Allpage/action'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { BsHeart } from 'react-icons/bs'


import './allPage.css'

const AllPages = () => {
    let dispatch=useDispatch()
    let mydata=useSelector((store)=>store.allPage.arr)
    



    useEffect(()=>{
         dispatch(allDatas)
    },[])
 
  return (
    <div className='new_product11'>  {mydata.map((elem)=>   (   
        
        <div className='single_new_product11'>
        <div className='card'>
        <img src={elem.imageUrl_1} alt={elem.name} />
        <img src={elem.imageUrl_2} alt={elem.name} className="img-top"/>
        </div> 
        <div className='div_icon'><BsHeart className='heart_icon'/></div>
        <p className='single_product_title'>{elem.name}</p>
        <p className='single_product_price'>${elem.price}.00</p>
        </div>
       
  ))}

      </div>
  )
}

export default AllPages