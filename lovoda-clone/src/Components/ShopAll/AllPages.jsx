import React from 'react'
import { useEffect } from 'react'
import { allDatas } from '../../Redux/Allpage/action'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { BsHeart } from 'react-icons/bs'


import './allPage.css'
import FilterSort from '../Filter/Filter&Sort'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const AllPages = () => {
    const dispatch=useDispatch()
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    let mydata=useSelector((store)=>store.allPage.arr)
    
const handleClick=(id)=>{
  localStorage.setItem("page","shop")
  navigate(`/all_products/${id}`)
}


    useEffect(()=>{
      if(location || mydata.length === 0){
          const sortBy = searchParams.get('sortBy')
          const queryParams = {
              params:{
                  _sort: sortBy && "price",
                  _order: sortBy,
              }
          }
          dispatch(allDatas(queryParams))
      }
  },[location.search])



    // useEffect(()=>{
    //      dispatch(allDatas)
    // },[])
 
  return (
    <>
     <p className='product_title'>All Products</p>
    <div><FilterSort length={mydata.length}/></div>
    <div className='new_product11'>  {mydata.map((elem)=>   (   
      
      <div className='single_new_product11' key={elem.id}>
        {/* <Link to={`/all_products/${elem._id}`} > */}

        <div onClick={()=>handleClick(elem._id)} className='card'>
        <img src={elem.imageUrl_1} alt={elem.name} />
        <img src={elem.imageUrl_2} alt={elem.name} className="img-top"/>
        </div> 
        <div className='div_icon'><BsHeart className='heart_icon'/></div>
        <p className='single_product_title'>{elem.name}</p>
        <p className='single_product_price'>${elem.price}.00</p>
        {/* </Link> */}
        </div>
       
       ))}

      </div>
       </>
  )
}

export default AllPages