import React from 'react'
import {BsHeart} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './singleProduct.css'

const SingleNewProduct = ({id,imageUrl_1,imageUrl_2,name,price}) => {
  return (
    <div className='single_new_product'>
      <Link to={`/new_products/${id}`}>
        <div className='card'>
        <img src={imageUrl_1} alt={name} />
        <img src={imageUrl_2} alt={name} className="img-top"/>
        </div> 
        <div className='div_icon'><BsHeart className='heart_icon'/></div>
        <p className='single_product_title'>{name}</p>
        <p className='single_product_price'>${price}.00</p>
      </Link>
    </div>
  )
}


export default SingleNewProduct