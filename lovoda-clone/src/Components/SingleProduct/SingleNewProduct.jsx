import React from 'react'
import {BsHeart} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import './singleProduct.css'

const SingleNewProduct = ({_id,imageUrl_1,imageUrl_2,name,price}) => {
const navigate = useNavigate();
  
const handleClick=()=>{
  localStorage.setItem("page","product")
  navigate(`/all_products/${_id}`)
}
  return (
    <div className='single_new_product'>
      {/* <Link to={`/new_products/${_id}`}> */}
        <div onClick={handleClick} className='card'>
        <img src={imageUrl_1} alt={name} />
        <img src={imageUrl_2} alt={name} className="img-top"/>
        </div> 
        <div className='div_icon'><BsHeart className='heart_icon'/></div>
        <p className='single_product_title'>{name}</p>
        <p className='single_product_price'>${price}.00</p>
      {/* </Link> */}
    </div>
  )
}


export default SingleNewProduct